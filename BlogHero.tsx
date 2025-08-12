import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import heroImage from '@/assets/blog-hero.jpg';

const BlogHero = () => {
  const [topic, setTopic] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const generateSuggestion = async () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic first');
      return;
    }

    setLoading(true);
    try {
      // Simulate AI suggestion - in real app, this would call OpenAI API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const suggestions = [
        `"${topic}" is revolutionizing how we think about modern development. Explore its impact on user experience, performance optimization, and future trends in web technology.`,
        `Discover the latest trends in ${topic} and how leading companies are implementing these strategies to improve developer productivity and user satisfaction.`,
        `A comprehensive guide to ${topic}: from fundamental concepts to advanced techniques that every developer should master in 2024.`,
        `The future of ${topic} is here. Learn how to leverage cutting-edge tools and methodologies to build better, faster, and more accessible web applications.`,
        `Why ${topic} matters: understanding the core principles, best practices, and real-world applications that are shaping the industry today.`
      ];
      
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      setSuggestion(randomSuggestion);
      toast.success('AI suggestion generated!');
    } catch (error) {
      toast.error('Failed to generate suggestion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="hero-text">Modern Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover cutting-edge insights, tutorials, and industry trends. 
              Get AI-powered article suggestions tailored to your interests.
            </p>
          </div>

          {/* AI Suggestion Tool */}
          <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-md shadow-glow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-medium">AI Article Suggestion</span>
                </div>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter a topic (e.g., React, AI, CSS...)"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && generateSuggestion()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={generateSuggestion}
                    disabled={loading}
                    className="px-6"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Generate'
                    )}
                  </Button>
                </div>

                {suggestion && (
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {suggestion}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;