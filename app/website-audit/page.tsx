'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, Zap, Shield, Eye, Smartphone, TrendingUp, CheckCircle } from 'lucide-react';
import { AuditHero } from "@/components/AuditHero";
export default function Home() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const encodedUrl = encodeURIComponent(url);
      router.push(`/audit?url=${encodedUrl}`);
    }, 2000);
  };

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Analysis",
      description: "Comprehensive speed and performance metrics with actionable insights."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Complete SEO audit with meta tags, content structure, and ranking factors."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Accessibility Check",
      description: "WCAG compliance analysis to ensure your site is accessible to everyone."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Scan",
      description: "Security vulnerabilities detection and SSL certificate validation."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Responsiveness",
      description: "Mobile-first design analysis and responsive layout optimization."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technical SEO",
      description: "Core Web Vitals, structured data, and technical optimization checks."
    }
  ];

  const benefits = [
    "Instant comprehensive website analysis",
    "Actionable recommendations for improvement",
    "Track your SEO performance over time",
    "Identify and fix technical issues",
    "Improve user experience and conversion rates",
    "Stay ahead of algorithm updates"
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <AuditHero />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Audit Form */}
          <Card className="max-w-2xl mx-auto mb-16 shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Start Your Free Audit</CardTitle>
              <CardDescription>
                Enter your website URL and get a comprehensive analysis in seconds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAudit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="url"
                      placeholder="https://your-website.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="text-lg py-6 px-4"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Analyzing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Search className="h-5 w-5" />
                        <span>Audit Website</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Website Analysis
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our advanced audit tool analyzes every aspect of your website to help you improve 
              performance, ranking, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Optimize Your Website?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of websites that have improved their performance with our free audit tool.
          </p>
          <Button 
            onClick={() => document.querySelector('input')?.focus()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Start Free Audit Now
          </Button>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}