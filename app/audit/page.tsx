'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  ArrowLeft, 
  TrendingUp, 
  Search, 
  Eye, 
  Shield, 
  Smartphone, 
  Globe,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Users,
  Zap,
  Download,
  Share,
  RefreshCw,
  Copy,
  Check,
  ArrowUp 
} from 'lucide-react';

interface AuditData {
  url: string;
  timestamp: string;
  overallScore: number;
  scores: {
    performance: number;
    seo: number;
    accessibility: number;
    security: number;
    mobile: number;
    technical: number;
  };
  performance: any;
  seo: any;
  accessibility: any;
  security: any;
  mobile: any;
  technical: any;
}

export default function AuditResults() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [auditData, setAuditData] = useState<AuditData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);


  const performAudit = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setProgress(0);

    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 300);

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: decodeURIComponent(url) }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to audit website');
      }

      const data = await response.json();
      setAuditData(data);
      setProgress(100);
      
      // Small delay to show 100% progress
      setTimeout(() => {
        setIsLoading(false);
        clearInterval(progressInterval);
      }, 500);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
      clearInterval(progressInterval);
    }
  }, [url]);

  useEffect(() => {
    if (!url) return;
    
    performAudit();
  }, [url, performAudit]);

  const exportReport = async () => {
    if (!auditData) return;
    
    setIsExporting(true);
    
    try {
      // Generate comprehensive report content
      const reportContent = generateReportContent(auditData);
      
      // Create and download PDF-style HTML report
      const blob = new Blob([reportContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `website-audit-report-${new Date().toISOString().split('T')[0]}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      // Also generate JSON report
      const jsonBlob = new Blob([JSON.stringify(auditData, null, 2)], { type: 'application/json' });
      const jsonUrl = URL.createObjectURL(jsonBlob);
      const jsonLink = document.createElement('a');
      jsonLink.href = jsonUrl;
      jsonLink.download = `website-audit-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(jsonLink);
      jsonLink.click();
      document.body.removeChild(jsonLink);
      URL.revokeObjectURL(jsonUrl);
      
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const shareReport = async () => {
    if (!auditData) return;
    
    setIsSharing(true);
    
    try {
      // Generate shareable URL with audit data
      const shareData = {
        url: auditData.url,
        timestamp: auditData.timestamp,
        overallScore: auditData.overallScore,
        scores: auditData.scores
      };
      
      const encodedData = btoa(JSON.stringify(shareData));
      const currentUrl = window.location.origin;
      const generatedShareUrl = `${currentUrl}/shared-audit?data=${encodedData}`;
      
      setShareUrl(generatedShareUrl);
      
      // Try to use Web Share API if available
      if (navigator.share) {
        await navigator.share({
          title: `Website Audit Report - ${auditData.url}`,
          text: `Check out this comprehensive website audit report with an overall score of ${auditData.overallScore}/100`,
          url: generatedShareUrl,
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(generatedShareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
      
    } catch (error) {
      console.error('Share failed:', error);
      // Fallback: copy current URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (clipboardError) {
        console.error('Clipboard access failed:', clipboardError);
      }
    } finally {
      setIsSharing(false);
    }
  };

  const copyShareUrl = async () => {
    if (shareUrl) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Copy failed:', error);
      }
    }
  };

  const generateReportContent = (data: AuditData) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Audit Report - ${data.url}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e5e5e5; padding-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #3b82f6; margin-bottom: 10px; }
        .url { font-size: 18px; color: #666; margin-bottom: 5px; }
        .timestamp { font-size: 14px; color: #999; }
        .overall-score { text-align: center; margin: 30px 0; }
        .score-circle { display: inline-block; width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-size: 36px; font-weight: bold; line-height: 120px; }
        .scores-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .score-card { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; }
        .score-value { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
        .score-label { font-size: 14px; color: #666; text-transform: capitalize; }
        .section { margin: 30px 0; }
        .section-title { font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #333; border-left: 4px solid #3b82f6; padding-left: 15px; }
        .metric { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .metric:last-child { border-bottom: none; }
        .recommendation { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; padding: 15px; margin: 10px 0; }
        .recommendation.critical { background: #f8d7da; border-color: #f5c6cb; }
        .recommendation.warning { background: #fff3cd; border-color: #ffeaa7; }
        .recommendation-title { font-weight: bold; margin-bottom: 5px; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
            <img src="@/images/askyline.png" alt="Askyline Digital logo with stylized text Askyline Digital in blue and purple gradient, conveying a modern and professional tone, set against a clean white background" style="height: 40px; vertical-align: middle;">
            </div>
            <div class="url">${data.url}</div>
            <div class="timestamp">Generated on ${new Date(data.timestamp).toLocaleDateString()} at ${new Date(data.timestamp).toLocaleTimeString()}</div>
        </div>
        
        <div class="overall-score">
            <div class="score-circle">${data.overallScore}</div>
            <h2>Overall Score</h2>
        </div>
        
        <div class="scores-grid">
            ${Object.entries(data.scores).map(([key, score]) => `
                <div class="score-card">
                    <div class="score-value" style="color: ${score >= 90 ? '#10b981' : score >= 70 ? '#f59e0b' : '#ef4444'}">${score}</div>
                    <div class="score-label">${key}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="section">
            <div class="section-title">Performance Metrics</div>
            <div class="metric">
                <span>First Contentful Paint</span>
                <span>${data.performance.firstContentfulPaint}s</span>
            </div>
            <div class="metric">
                <span>Largest Contentful Paint</span>
                <span>${data.performance.largestContentfulPaint}s</span>
            </div>
            <div class="metric">
                <span>Cumulative Layout Shift</span>
                <span>${data.performance.cumulativeLayoutShift}</span>
            </div>
            <div class="metric">
                <span>First Input Delay</span>
                <span>${data.performance.firstInputDelay}ms</span>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">SEO Analysis</div>
            <div class="metric">
                <span>Title Tag</span>
                <span>${data.seo.title}</span>
            </div>
            <div class="metric">
                <span>Meta Description</span>
                <span>${data.seo.metaDescription}</span>
            </div>
            <div class="metric">
                <span>Internal Links</span>
                <span>${data.seo.internalLinks}</span>
            </div>
            <div class="metric">
                <span>External Links</span>
                <span>${data.seo.externalLinks}</span>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">Security Analysis</div>
            <div class="metric">
                <span>HTTPS Enabled</span>
                <span>${data.security.httpsEnabled ? 'Yes' : 'No'}</span>
            </div>
            <div class="metric">
                <span>SSL Certificate</span>
                <span>${data.security.sslCertificate}</span>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">Key Recommendations</div>
            ${data.performance.recommendations.slice(0, 3).map((rec: any) => `
                <div class="recommendation ${rec.type}">
                    <div class="recommendation-title">${rec.title}</div>
                    <div>${rec.description}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="footer">
            <p>Generated Askyline Digital - Comprehensive Website Analysis Tool</p>
            <p>© ${new Date().getFullYear()} Askyline Digital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900';
    if (score >= 70) return 'bg-yellow-100 dark:bg-yellow-900';
    return 'bg-red-100 dark:bg-red-900';
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'critical': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default: return <CheckCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  if (!url) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">No URL Provided</CardTitle>
            <CardDescription>
              Please provide a website URL to audit
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="website-audit">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Go Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-red-100 dark:bg-red-900 rounded-full w-fit">
              <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl text-red-600 dark:text-red-400">Audit Failed</CardTitle>
            <CardDescription>
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Button 
              onClick={performAudit}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Link href="website-audit">
              <Button variant="outline" className="w-full">
                Go Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <ArrowUp  className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Askyline Digital
                </h1>
              </Link>
            </div>
          </div>
        </header>

        {/* Loading Screen */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full w-fit">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <CardTitle className="text-2xl">Analyzing Your Website</CardTitle>
              <CardDescription>
                Performing comprehensive audit of {decodeURIComponent(url)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {progress < 25 && "Fetching website content..."}
                {progress >= 25 && progress < 50 && "Analyzing performance metrics..."}
                {progress >= 50 && progress < 75 && "Checking SEO and accessibility..."}
                {progress >= 75 && progress < 90 && "Running security and mobile tests..."}
                {progress >= 90 && "Finalizing audit report..."}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!auditData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               Askline Digital
              </h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={performAudit}
                disabled={isLoading}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Re-audit
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={exportReport}
                disabled={isExporting}
              >
                {isExporting ? (
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                {isExporting ? 'Exporting...' : 'Export Report'}
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={shareReport}
                disabled={isSharing}
              >
                {isSharing ? (
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                ) : copied ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Share className="h-4 w-4 mr-2" />
                )}
                {isSharing ? 'Sharing...' : copied ? 'Copied!' : 'Share'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Share URL Display */}
      {shareUrl && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 flex-1 min-w-0">
                <Share className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-sm text-blue-800 dark:text-blue-200 flex-shrink-0">Share URL:</span>
                <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded border text-blue-600 dark:text-blue-400 truncate flex-1 min-w-0">
                  {shareUrl}
                </code>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyShareUrl}
                className="ml-2 flex-shrink-0"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/website-audit" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Audit
          </Link>
        </div>

        {/* Website Info */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Audit Results
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">{auditData.url}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Analyzed on {new Date(auditData.timestamp).toLocaleDateString()} at {new Date(auditData.timestamp).toLocaleTimeString()}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor(auditData.overallScore)}`}>
                  {auditData.overallScore}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Overall Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {Object.entries(auditData.scores).map(([key, score]) => (
            <Card key={key} className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4">
                <div className={`text-2xl font-bold mb-1 ${getScoreColor(score as number)}`}>
                  {score}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {key}
                </div>
                <div className="mt-2">
                  <div className={`w-full h-2 rounded-full ${getScoreBg(score as number)}`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Results */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="performance" className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Performance</span>
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center space-x-1">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">SEO</span>
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Accessibility</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center space-x-1">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">Mobile</span>
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Technical</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Performance Metrics</span>
                  <Badge className={getScoreColor(auditData.scores.performance)}>
                    {auditData.scores.performance}/100
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Core Web Vitals and performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {auditData.performance.firstContentfulPaint}s
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      First Contentful Paint
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                      {auditData.performance.largestContentfulPaint}s
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Largest Contentful Paint
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {auditData.performance.cumulativeLayoutShift}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Cumulative Layout Shift
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {auditData.performance.firstInputDelay}ms
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      First Input Delay
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Recommendations</h4>
                  {auditData.performance.recommendations.map((rec: any, index: number) => (
                    <Alert key={index} className={`${rec.type === 'critical' ? 'border-red-200 dark:border-red-800' : rec.type === 'warning' ? 'border-yellow-200 dark:border-yellow-800' : 'border-blue-200 dark:border-blue-800'}`}>
                      <div className="flex items-start space-x-3">
                        {getRecommendationIcon(rec.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{rec.title}</h5>
                            <Badge variant="secondary" className="text-xs">
                              {rec.impact} Impact
                            </Badge>
                          </div>
                          <AlertDescription className="mt-1">
                            {rec.description}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>SEO Analysis</span>
                  <Badge className={getScoreColor(auditData.scores.seo)}>
                    {auditData.scores.seo}/100
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Search engine optimization and content analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Title Tag</span>
                      <Badge variant="outline" className={auditData.seo.title === 'Present' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.seo.title}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Meta Description</span>
                      <Badge variant="outline" className={auditData.seo.metaDescription === 'Present' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.seo.metaDescription}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Internal Links</span>
                      <Badge variant="outline">
                        {auditData.seo.internalLinks}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>External Links</span>
                      <Badge variant="outline">
                        {auditData.seo.externalLinks}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>H1 Tags</span>
                      <Badge variant="outline">
                        {auditData.seo.headings.h1}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>H2 Tags</span>
                      <Badge variant="outline">
                        {auditData.seo.headings.h2}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Images with Alt Text</span>
                      <Badge variant="outline">
                        {auditData.seo.images.withAlt}/{auditData.seo.images.total}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Missing Alt Text</span>
                      <Badge variant="outline" className="text-red-600 dark:text-red-400">
                        {auditData.seo.images.withoutAlt}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Recommendations</h4>
                  {auditData.seo.recommendations.map((rec: any, index: number) => (
                    <Alert key={index} className={`${rec.type === 'critical' ? 'border-red-200 dark:border-red-800' : rec.type === 'warning' ? 'border-yellow-200 dark:border-yellow-800' : 'border-blue-200 dark:border-blue-800'}`}>
                      <div className="flex items-start space-x-3">
                        {getRecommendationIcon(rec.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{rec.title}</h5>
                            <Badge variant="secondary" className="text-xs">
                              {rec.impact} Impact
                            </Badge>
                          </div>
                          <AlertDescription className="mt-1">
                            {rec.description}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Accessibility Analysis</span>
                  <Badge className={getScoreColor(auditData.scores.accessibility)}>
                    {auditData.scores.accessibility}/100
                  </Badge>
                </CardTitle>
                <CardDescription>
                  WCAG compliance and accessibility guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>WCAG Level</span>
                      <Badge variant="outline" className="text-green-600 dark:text-green-400">
                        {auditData.accessibility.wcagLevel}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Critical Issues</span>
                      <Badge variant="outline" className="text-red-600 dark:text-red-400">
                        {auditData.accessibility.issues.critical}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Warning Issues</span>
                      <Badge variant="outline" className="text-yellow-600 dark:text-yellow-400">
                        {auditData.accessibility.issues.warning}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Info Issues</span>
                      <Badge variant="outline" className="text-blue-600 dark:text-blue-400">
                        {auditData.accessibility.issues.info}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Recommendations</h4>
                  {auditData.accessibility.recommendations.map((rec: any, index: number) => (
                    <Alert key={index} className={`${rec.type === 'critical' ? 'border-red-200 dark:border-red-800' : rec.type === 'warning' ? 'border-yellow-200 dark:border-yellow-800' : 'border-blue-200 dark:border-blue-800'}`}>
                      <div className="flex items-start space-x-3">
                        {getRecommendationIcon(rec.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{rec.title}</h5>
                            <Badge variant="secondary" className="text-xs">
                              {rec.impact} Impact
                            </Badge>
                          </div>
                          <AlertDescription className="mt-1">
                            {rec.description}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Analysis</span>
                  <Badge className={getScoreColor(auditData.scores.security)}>
                    {auditData.scores.security}/100
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Security vulnerabilities and SSL certificate validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>HTTPS Enabled</span>
                      <Badge variant="outline" className={auditData.security.httpsEnabled ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.security.httpsEnabled ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SSL Certificate</span>
                      <Badge variant="outline" className={auditData.security.sslCertificate === 'Valid' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.security.sslCertificate}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>HSTS Header</span>
                      <Badge variant="outline" className={auditData.security.securityHeaders.hsts ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.security.securityHeaders.hsts ? 'Present' : 'Missing'}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Content Security Policy</span>
                      <Badge variant="outline" className={auditData.security.securityHeaders.csp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.security.securityHeaders.csp ? 'Present' : 'Missing'}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>X-Frame-Options</span>
                      <Badge variant="outline" className={auditData.security.securityHeaders.xframe ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.security.securityHeaders.xframe ? 'Present' : 'Missing'}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>X-XSS-Protection</span>
                      <Badge variant="outline" className={auditData.security.securityHeaders.xss ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.security.securityHeaders.xss ? 'Present' : 'Missing'}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Recommendations</h4>
                  {auditData.security.recommendations.map((rec: any, index: number) => (
                    <Alert key={index} className={`${rec.type === 'critical' ? 'border-red-200 dark:border-red-800' : rec.type === 'warning' ? 'border-yellow-200 dark:border-yellow-800' : 'border-blue-200 dark:border-blue-800'}`}>
                      <div className="flex items-start space-x-3">
                        {getRecommendationIcon(rec.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{rec.title}</h5>
                            <Badge variant="secondary" className="text-xs">
                              {rec.impact} Impact
                            </Badge>
                          </div>
                          <AlertDescription className="mt-1">
                            {rec.description}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>Mobile Analysis</span>
                  <Badge className={getScoreColor(auditData.scores.mobile)}>
                    {auditData.scores.mobile}/100
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Mobile responsiveness and usability analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Responsive Design</span>
                      <Badge variant="outline" className={auditData.mobile.responsive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.mobile.responsive ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Viewport Meta Tag</span>
                      <Badge variant="outline" className={auditData.mobile.viewportMeta ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.mobile.viewportMeta ? 'Present' : 'Missing'}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Touch Target Size</span>
                      <Badge variant="outline" className={auditData.mobile.touchTargets === 'Good' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>
                        {auditData.mobile.touchTargets}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Text Size</span>
                      <Badge variant="outline" className={auditData.mobile.textSize === 'Readable' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>
                        {auditData.mobile.textSize}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Recommendations</h4>
                  {auditData.mobile.recommendations.map((rec: any, index: number) => (
                    <Alert key={index} className={`${rec.type === 'critical' ? 'border-red-200 dark:border-red-800' : rec.type === 'warning' ? 'border-yellow-200 dark:border-yellow-800' : 'border-blue-200 dark:border-blue-800'}`}>
                      <div className="flex items-start space-x-3">
                        {getRecommendationIcon(rec.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{rec.title}</h5>
                            <Badge variant="secondary" className="text-xs">
                              {rec.impact} Impact
                            </Badge>
                          </div>
                          <AlertDescription className="mt-1">
                            {rec.description}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Technical Analysis</span>
                  <Badge className={getScoreColor(auditData.scores.technical)}>
                    {auditData.scores.technical}/100
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Technical SEO and website optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Page Size</span>
                      <Badge variant="outline" className="text-yellow-600 dark:text-yellow-400">
                        {auditData.technical.pageSize}MB
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>HTTP Requests</span>
                      <Badge variant="outline" className="text-yellow-600 dark:text-yellow-400">
                        {auditData.technical.requests}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Gzip Compression</span>
                      <Badge variant="outline" className={auditData.technical.gzipEnabled ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.technical.gzipEnabled ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>CDN Usage</span>
                      <Badge variant="outline" className={auditData.technical.cdnUsage ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {auditData.technical.cdnUsage ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Recommendations</h4>
                  {auditData.technical.recommendations.map((rec: any, index: number) => (
                    <Alert key={index} className={`${rec.type === 'critical' ? 'border-red-200 dark:border-red-800' : rec.type === 'warning' ? 'border-yellow-200 dark:border-yellow-800' : 'border-blue-200 dark:border-blue-800'}`}>
                      <div className="flex items-start space-x-3">
                        {getRecommendationIcon(rec.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{rec.title}</h5>
                            <Badge variant="secondary" className="text-xs">
                              {rec.impact} Impact
                            </Badge>
                          </div>
                          <AlertDescription className="mt-1">
                            {rec.description}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            onClick={() => window.location.href = '/website-audit'}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Audit Another Website
          </Button>
          <Button 
            variant="outline"
            onClick={shareReport}
            disabled={isSharing}
          >
            <Users className="h-4 w-4 mr-2" />
            {isSharing ? 'Sharing...' : 'Share Results'}
          </Button>
        </div>
      </div>
    </div>
  );
}