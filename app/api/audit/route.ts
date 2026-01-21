// /src/app/api/audit/route.ts

import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import axe from 'axe-core';

// Main handler for the POST request
export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    if (!url) return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    new URL(url); // Validate URL format

    // --- PARALLEL AUDIT EXECUTION ---
    // Run all audits simultaneously for maximum speed.
    const [
      psiData,
      securityData,
      onPageSeoData,
      // accessibilityData // Disabling by default due to high resource usage
    ] = await Promise.all([
      runPsiAnalysis(url),
      checkSecurityHeaders(url),
      analyzeOnPageSeo(url),
      // runAccessibilityCheck(url), // See note about resource intensity
    ]);

    // --- MERGE RESULTS INTO A SINGLE REPORT ---
    const mergedData = mergeAuditData({
      psiData,
      securityData,
      onPageSeoData,
      // accessibilityData
    });

    return NextResponse.json(mergedData);
  } catch (error: any) {
    console.error('Audit API error:', error);
    const errorMessage = error.message || 'Failed to audit website';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// =================================================================
// 1. Google PageSpeed Insights (Lighthouse)
// =================================================================
async function runPsiAnalysis(url: string) {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error('Google PageSpeed Insights API key is not configured. Please set GOOGLE_API_KEY in your environment variables.');
  }
  
  // Ensure URL has protocol
  let auditUrl = url;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    auditUrl = `https://${url}`;
  }
  
  const psiApiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(auditUrl)}&key=${apiKey}&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO&strategy=DESKTOP`;

  try {
    const response = await fetch(psiApiUrl, {
      next: { revalidate: 0 }, // Don't cache
    });
    
  if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
      throw new Error(`PageSpeed API Error: ${error.error?.message || 'Failed to fetch data'}`);
  }
    
  return response.json();
  } catch (error: any) {
    if (error.message.includes('API')) {
      throw error;
    }
    throw new Error(`Failed to connect to PageSpeed Insights: ${error.message}`);
  }
}

// =================================================================
// 2. Security Header Checker
// =================================================================
async function checkSecurityHeaders(url: string) {
  try {
    // Ensure URL has protocol
    let checkUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      checkUrl = `https://${url}`;
    }
    
    const response = await fetch(checkUrl, { 
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const headers = response.headers;
    return {
      hsts: headers.has('strict-transport-security'),
      csp: headers.has('content-security-policy'),
      xframe: headers.get('x-frame-options')?.toLowerCase() || 'not-found',
      xss: headers.get('x-xss-protection') === '1; mode=block',
      contentTypeOptions: headers.get('x-content-type-options') === 'nosniff',
    };
  } catch (error) {
    console.error('Failed to check security headers:', error);
    return null; // Return null on failure
  }
}

// =================================================================
// 3. SEO Analysis Tool (On-Page) using Cheerio
// =================================================================
async function analyzeOnPageSeo(url: string) {
  try {
    // Ensure URL has protocol
    let seoUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      seoUrl = `https://${url}`;
    }
    
    const response = await fetch(seoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);

    const images = $('img');
    const imagesWithAlt = images.filter((i, el) => $(el).attr('alt')?.trim() !== '').length;

    const internalLinks = new Set<string>();
    const externalLinks = new Set<string>();
    const urlHostname = new URL(url).hostname;
    
    $('a').each((i, el) => {
        const href = $(el).attr('href');
        if (href) {
            try {
                const linkUrl = new URL(href, url); // Resolve relative URLs
                if (linkUrl.hostname === urlHostname) {
                    internalLinks.add(linkUrl.href);
                } else {
                    externalLinks.add(linkUrl.href);
                }
            } catch (e) { /* ignore invalid hrefs */ }
        }
    });

    return {
      title: $('title').text(),
      metaDescription: $('meta[name="description"]').attr('content') || null,
      headings: {
        h1: $('h1').length,
        h2: $('h2').length,
        h3: $('h3').length,
        h4: $('h4').length,
      },
      images: {
        total: images.length,
        withAlt: imagesWithAlt,
        withoutAlt: images.length - imagesWithAlt,
      },
      links: {
          internal: internalLinks.size,
          external: externalLinks.size
      }
    };
  } catch (error) {
    console.error('Failed to analyze on-page SEO:', error);
    return null;
  }
}

// =================================================================
// 4. Accessibility Validator using Puppeteer & Axe-Core
// NOTE: This is resource-intensive and may time out on serverless functions.
// Enable with caution and consider a background job architecture.
// =================================================================
async function runAccessibilityCheck(url: string) {
  let browser;
  try {
    browser = await puppeteer.launch({ args: ['--no-sandbox'] }); // --no-sandbox is often needed in container environments
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.addScriptTag({ path: require.resolve('axe-core') });
    
    const results = await page.evaluate(() => (window as any).axe.run());
    return results;
  } catch (error) {
    console.error('Failed to run accessibility check:', error);
    return null;
  } finally {
    if (browser) await browser.close();
  }
}


// =================================================================
// Data Merger - The final step to combine all results
// =================================================================
function mergeAuditData({ psiData, securityData, onPageSeoData, accessibilityData }: any) {
  const lighthouseResult = psiData.lighthouseResult;
  const audits = lighthouseResult.audits;
  const url = lighthouseResult.finalUrl;

  // --- HELPER FUNCTION to get recommendations ---
  const getRecommendations = (categoryAuditRefs: any[] | undefined) => {
    if (!categoryAuditRefs) return []; // Return empty array if refs are missing
    return categoryAuditRefs
      .filter((ref: any) => ref.weight > 0 && audits[ref.id]?.score !== null && audits[ref.id]?.score < 1)
      .map((ref: any) => {
        const audit = audits[ref.id];
        return {
          type: audit.score === 0 ? 'critical' : 'warning',
          title: audit.title,
          description: audit.description.replace(/\[Learn more\]\(.*\)/, '').trim(),
          impact: audit.details?.overallSavingsMs ? `High (~${Math.round(audit.details.overallSavingsMs / 1000)}s saving)` : 'Medium',
        };
      });
  };

  // Scores from PSI
  const performanceScore = Math.round((lighthouseResult.categories.performance?.score ?? 0) * 100);
  const accessibilityScore = Math.round((lighthouseResult.categories.accessibility?.score ?? 0) * 100);
  const seoScore = Math.round((lighthouseResult.categories.seo?.score ?? 0) * 100);
  const technicalScore = Math.round((lighthouseResult.categories['best-practices']?.score ?? 0) * 100);

  // Derive scores for Security and Mobile from specific audits (with safety checks)
  const securityChecks = [audits['is-on-https']?.score ?? 0];
  if (securityData) {
      securityChecks.push(
          securityData.hsts ? 1 : 0,
          securityData.csp ? 1 : 0,
          securityData.contentTypeOptions ? 1 : 0
      );
  }
  const securityScore = Math.round((securityChecks.reduce((a, b) => a + b, 0) / securityChecks.length) * 100);
  
  // =================================================================
  // THIS IS THE LINE THAT CAUSED THE ERROR - NOW FIXED
  // =================================================================
  const mobileScore = Math.round((((audits['viewport']?.score ?? 0) + (audits['tap-targets']?.score ?? 0)) / 2) * 100);

  const overallScore = Math.round((performanceScore + accessibilityScore + seoScore + technicalScore + securityScore + mobileScore) / 6);

  return {
    url,
    timestamp: new Date(lighthouseResult.fetchTime).toISOString(),
    overallScore,
    scores: {
      performance: performanceScore,
      seo: seoScore,
      accessibility: accessibilityScore,
      security: securityScore,
      mobile: mobileScore,
      technical: technicalScore
    },
    performance: {
      firstContentfulPaint: audits['first-contentful-paint']?.displayValue?.replace('s', '') ?? 'N/A',
      largestContentfulPaint: audits['largest-contentful-paint']?.displayValue?.replace('s', '') ?? 'N/A',
      cumulativeLayoutShift: audits['cumulative-layout-shift']?.displayValue ?? 'N/A',
      firstInputDelay: audits['interactive']?.displayValue?.replace('ms', '') ?? 'N/A',
      recommendations: getRecommendations(lighthouseResult.categories.performance?.auditRefs),
    },
    seo: {
      title: onPageSeoData?.title || (audits['document-title']?.score === 1 ? 'Present' : 'Missing'),
      metaDescription: onPageSeoData?.metaDescription || (audits['meta-description']?.score === 1 ? 'Present' : 'Missing'),
      headings: onPageSeoData?.headings || { h1: 'N/A' },
      internalLinks: onPageSeoData?.links?.internal ?? 'N/A',
      externalLinks: onPageSeoData?.links?.external ?? 'N/A',
      images: onPageSeoData?.images || { withoutAlt: 'N/A' },
      recommendations: getRecommendations(lighthouseResult.categories.seo?.auditRefs),
    },
    accessibility: {
      wcagLevel: accessibilityScore >= 85 ? 'AAA' : 'AA',
      issues: {
        critical: lighthouseResult.categories.accessibility?.auditRefs?.filter((ref: any) => audits[ref.id]?.score === 0).length ?? 0,
        warning: lighthouseResult.categories.accessibility?.auditRefs?.filter((ref: any) => audits[ref.id]?.score > 0 && audits[ref.id]?.score < 1).length ?? 0,
        info: 0,
      },
      recommendations: getRecommendations(lighthouseResult.categories.accessibility?.auditRefs),
    },
    security: {
      httpsEnabled: audits['is-on-https']?.score === 1,
      sslCertificate: audits['is-on-https']?.score === 1 ? 'Valid' : 'Missing or Invalid',
      securityHeaders: securityData || { hsts: false, csp: false, xframe: 'not-found', xss: false },
      recommendations: getRecommendations(lighthouseResult.categories['best-practices']?.auditRefs?.filter((ref:any) => ['is-on-https', 'no-vulnerable-libraries'].includes(ref.id))),
    },
    mobile: {
        responsive: audits['viewport']?.score === 1,
        viewportMeta: audits['viewport']?.score === 1,
        touchTargets: audits['tap-targets']?.score === 1 ? 'Good' : 'Needs Improvement',
        textSize: audits['font-size']?.score === 1 ? 'Readable' : 'Too Small',
        recommendations: getRecommendations(lighthouseResult.categories.performance?.auditRefs?.filter((ref:any) => ['viewport', 'tap-targets', 'font-size'].includes(ref.id)))
    },
    technical: {
      pageSize: ((audits['total-byte-weight']?.numericValue ?? 0) / (1024 * 1024)).toFixed(2), // In MB
      requests: audits['network-requests']?.numericValue ?? 0,
      gzipEnabled: audits['uses-text-compression']?.score === 1,
      cdnUsage: audits['uses-optimized-images']?.score === 1,
      recommendations: getRecommendations(lighthouseResult.categories['best-practices']?.auditRefs),
    }
  };
}
