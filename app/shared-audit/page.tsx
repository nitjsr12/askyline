'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  Zap,
  ExternalLink
} from 'lucide-react';

interface SharedAuditData {
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
}

export default function SharedAuditResults() {
  const searchParams = useSearchParams();
  const data = searchParams.get('data');
  const [auditData, setAuditData] = useState<SharedAuditData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!data) {
      setError('No audit data provided');
      return;
    }

    try {
      const decodedData = atob(data);
      const parsedData = JSON.parse(decodedData);
      setAuditData(parsedData);
    } catch (err) {
      setError('Invalid audit data format');
    }
  }, [data]);

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

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-red-100 dark:bg-red-900 rounded-full w-fit">
              <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl text-red-600 dark:text-red-400">Invalid Share Link</CardTitle>
            <CardDescription>
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Start New Audit
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!auditData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WebAudit Pro
              </h1>
            </Link>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              Shared Report
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Start New Audit
          </Link>
        </div>

        {/* Shared Report Notice */}
        <Alert className="mb-8 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertDescription className="text-blue-800 dark:text-blue-200">
            This is a shared audit report. For a complete analysis with detailed recommendations, 
            <Link href={`/audit?url=${encodeURIComponent(auditData.url)}`} className="font-medium underline ml-1">
              run a full audit
            </Link>.
          </AlertDescription>
        </Alert>

        {/* Website Info */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Shared Audit Results
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <p className="text-lg text-gray-600 dark:text-gray-300">{auditData.url}</p>
                <Link 
                  href={auditData.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
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

        {/* Score Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full w-fit">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg">Performance</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(auditData.scores.performance)}`}>
                {auditData.scores.performance}
              </div>
              <CardDescription>
                Core Web Vitals and loading speed metrics
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 p-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full w-fit">
                <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg">SEO</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(auditData.scores.seo)}`}>
                {auditData.scores.seo}
              </div>
              <CardDescription>
                Search engine optimization and content structure
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full w-fit">
                <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg">Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(auditData.scores.accessibility)}`}>
                {auditData.scores.accessibility}
              </div>
              <CardDescription>
                WCAG compliance and inclusive design
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 p-3 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 rounded-full w-fit">
                <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-lg">Security</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(auditData.scores.security)}`}>
                {auditData.scores.security}
              </div>
              <CardDescription>
                SSL certificates and security headers
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-full w-fit">
                <Smartphone className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <CardTitle className="text-lg">Mobile</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(auditData.scores.mobile)}`}>
                {auditData.scores.mobile}
              </div>
              <CardDescription>
                Mobile responsiveness and usability
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 p-3 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 rounded-full w-fit">
                <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <CardTitle className="text-lg">Technical</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(auditData.scores.technical)}`}>
                {auditData.scores.technical}
              </div>
              <CardDescription>
                Technical SEO and optimization
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want the Full Analysis?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              This shared report shows the overview scores. Get detailed recommendations, 
              performance metrics, and actionable insights with a complete audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/audit?url=${encodeURIComponent(auditData.url)}`}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Run Full Audit
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline">
                  Audit Your Website
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}