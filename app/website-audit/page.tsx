'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, Zap, Shield, Eye, Smartphone, TrendingUp, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { AuditHero } from "@/components/AuditHero";

export default function Home() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const router = useRouter();

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Analysis",
      description: "Comprehensive speed and performance metrics with actionable insights.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Complete SEO audit with meta tags, content structure, and ranking factors.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Accessibility Check",
      description: "WCAG compliance analysis to ensure your site is accessible to everyone.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Scan",
      description: "Security vulnerabilities detection and SSL certificate validation.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Responsiveness",
      description: "Mobile-first design analysis and responsive layout optimization.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technical SEO",
      description: "Core Web Vitals, structured data, and technical optimization checks.",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

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
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-10"></div>
        <div className="absolute top-60 right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:opacity-10"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10"></div>
      </div>

      {/* Header */}
      <AuditHero />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Audit Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto mb-16 shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg hover:shadow-3xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Start Your Free Audit
                </CardTitle>
                <CardDescription className="text-lg">
                  Enter your website URL and get a comprehensive analysis in seconds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAudit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Input
                        type="url"
                        placeholder="https://your-website.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="text-lg py-7 px-5 rounded-xl border-2 focus:border-blue-500 focus:ring-0"
                        required
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <Sparkles className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-7 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                          <ArrowRight className="h-5 w-5 ml-1" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 text-left p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Website Analysis
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our advanced audit tool analyzes every aspect of your website to help you improve 
              performance, ranking, and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 cursor-pointer ${activeFeature === index ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-3 bg-gradient-to-r ${feature.color} rounded-full w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Feature Showcase */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={activeFeature}
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className={`p-5 rounded-xl bg-gradient-to-r ${features[activeFeature].color} text-white w-fit`}>
                  {features[activeFeature].icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {features[activeFeature].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Optimize Your Website?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of websites that have improved their performance with our free audit tool.
            </p>
            <Button 
              onClick={() => document.querySelector('input')?.focus()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Audit Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}