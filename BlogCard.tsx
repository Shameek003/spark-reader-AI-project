import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import articlePlaceholder from '@/assets/article-placeholder.jpg';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-all duration-300 bg-card-gradient">
      <div className="aspect-video overflow-hidden">
        <Link to={`/blog/${post.id}`}>
          <img 
            src={articlePlaceholder}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
      <CardContent className="p-6 space-y-4">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
          {post.featured && (
            <Badge className="text-xs bg-primary">
              Featured
            </Badge>
          )}
        </div>

        {/* Title & Excerpt */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Author & Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;