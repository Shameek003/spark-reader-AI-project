export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const categories = [
  "All",
  "Technology",
  "AI & Machine Learning",
  "Web Development",
  "Mobile Development",
  "DevOps",
  "Design"
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and design websites, from automated code generation to intelligent user experiences.",
    content: `# The Future of AI in Web Development

Artificial Intelligence is transforming the web development landscape at an unprecedented pace. From automated code generation to intelligent user experiences, AI is becoming an integral part of how we build modern web applications.

## Code Generation and Assistance

AI-powered tools like GitHub Copilot and ChatGPT have revolutionized how developers write code. These tools can:

- Generate boilerplate code instantly
- Suggest optimized algorithms
- Debug complex issues
- Create documentation automatically

\`\`\`javascript
// AI can help generate complex functions like this
function optimizeImageLoading(images) {
  return images.map(img => ({
    ...img,
    lazy: true,
    sizes: calculateOptimalSizes(img.dimensions)
  }));
}
\`\`\`

## Intelligent User Interfaces

Modern web applications are incorporating AI to create more intuitive and personalized experiences:

- **Predictive Search**: Autocomplete that learns from user behavior
- **Content Personalization**: Dynamic content based on user preferences
- **Chatbots and Virtual Assistants**: 24/7 customer support
- **Accessibility Improvements**: AI-powered screen readers and navigation

## The Road Ahead

As AI continues to evolve, we can expect to see even more innovative applications in web development. The key is to embrace these tools while maintaining the human creativity and critical thinking that makes great web experiences possible.

The future is bright for AI-assisted web development, and developers who adapt early will have a significant advantage in the market.`,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-15",
    readingTime: 8,
    category: "AI & Machine Learning",
    tags: ["AI", "Web Development", "Future Tech", "Automation"],
    image: "/api/placeholder/800/600",
    featured: true
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for architecting React applications that can grow with your team and user base, including state management, component patterns, and performance optimization.",
    content: `# Building Scalable React Applications

Creating React applications that scale requires careful planning and adherence to proven patterns. This guide covers essential practices for building maintainable and performant React apps.

## Component Architecture

A well-structured component hierarchy is crucial for scalability:

### Container vs Presentational Components

\`\`\`jsx
// Container Component
function UserListContainer() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  
  return <UserList users={users} />;
}

// Presentational Component
function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
\`\`\`

## State Management

Choose the right state management solution based on your app's complexity:

- **Local State**: Use \`useState\` and \`useReducer\` for component-level state
- **Context API**: For sharing state across component trees
- **External Libraries**: Redux, Zustand, or Jotai for complex global state

## Performance Optimization

Key strategies for maintaining performance as your app grows:

1. **Code Splitting**: Use React.lazy() and Suspense
2. **Memoization**: React.memo, useMemo, useCallback
3. **Virtual Scrolling**: For large lists
4. **Bundle Analysis**: Regular bundle size monitoring

## Testing Strategy

Implement a comprehensive testing approach:

- Unit tests for individual components
- Integration tests for component interactions
- End-to-end tests for critical user flows

Building scalable React applications is an iterative process that requires continuous refinement and adaptation to new patterns and best practices.`,
    author: {
      name: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-12",
    readingTime: 12,
    category: "Web Development",
    tags: ["React", "JavaScript", "Scalability", "Architecture"],
    image: "/api/placeholder/800/600",
    featured: false
  },
  {
    id: "3",
    title: "Modern CSS Techniques for 2024",
    excerpt: "Discover the latest CSS features and techniques that are changing how we style web applications, including container queries, CSS layers, and new layout methods.",
    content: `# Modern CSS Techniques for 2024

CSS continues to evolve rapidly, bringing powerful new features that make styling more intuitive and efficient. Let's explore the latest techniques that every developer should know.

## Container Queries

Finally, we can style elements based on their container size, not just the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}
\`\`\`

## CSS Cascade Layers

Organize your CSS with explicit cascade control:

\`\`\`css
@layer reset, base, components, utilities;

@layer base {
  body {
    font-family: system-ui, sans-serif;
  }
}

@layer components {
  .button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
}
\`\`\`

## Subgrid

Create more flexible grid layouts:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.child {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}
\`\`\`

## Color Functions and Relative Colors

New color manipulation capabilities:

\`\`\`css
.element {
  --primary: oklch(0.7 0.15 180);
  background: var(--primary);
  border: 1px solid oklch(from var(--primary) calc(l - 0.2) c h);
}
\`\`\`

These modern CSS features are revolutionizing how we approach responsive design and component styling. Start incorporating them into your projects today!`,
    author: {
      name: "Elena Kowalski",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-10",
    readingTime: 6,
    category: "Design",
    tags: ["CSS", "Frontend", "Responsive Design", "Modern Web"],
    image: "/api/placeholder/800/600",
    featured: false
  },
  {
    id: "4",
    title: "Docker for Frontend Developers",
    excerpt: "A practical guide to using Docker in frontend development workflows, from development environments to production deployments.",
    content: `# Docker for Frontend Developers

Docker has become essential for modern development workflows. This guide shows frontend developers how to leverage containerization for better development experiences.

## Why Docker for Frontend?

Docker solves common development problems:

- **Environment Consistency**: Same environment across all machines
- **Dependency Isolation**: No more "works on my machine"
- **Easy Onboarding**: New team members get started quickly
- **Production Parity**: Development mirrors production

## Basic Dockerfile for React Apps

\`\`\`dockerfile
# Multi-stage build
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

## Docker Compose for Development

\`\`\`yaml
version: '3.8'
services:
  frontend:
    build:
      context: .
      target: development
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
\`\`\`

## Best Practices

1. **Use .dockerignore**: Exclude unnecessary files
2. **Multi-stage builds**: Smaller production images
3. **Layer caching**: Order commands for optimal caching
4. **Security scanning**: Regular vulnerability checks

## Development Workflow

With Docker, your development workflow becomes:

\`\`\`bash
# Start development environment
docker-compose up

# Run tests
docker-compose exec frontend npm test

# Build for production
docker build -t myapp:latest .
\`\`\`

Docker transforms how we think about development environments, making them reproducible, shareable, and production-ready from day one.`,
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-08",
    readingTime: 10,
    category: "DevOps",
    tags: ["Docker", "DevOps", "Frontend", "Containerization"],
    image: "/api/placeholder/800/600",
    featured: false
  },
  {
    id: "5",
    title: "Mobile-First Design Principles",
    excerpt: "Understanding how to design and develop with mobile users as the primary focus, creating better experiences across all devices.",
    content: `# Mobile-First Design Principles

With mobile traffic dominating web usage, mobile-first design isn't just a trend—it's a necessity. This approach fundamentally changes how we think about user experience.

## The Mobile-First Mindset

Starting with mobile constraints forces better design decisions:

- **Content Prioritization**: What's truly essential?
- **Performance Focus**: Every byte matters on mobile
- **Touch-Friendly Interfaces**: Designing for fingers, not cursors
- **Progressive Enhancement**: Adding features as screen space increases

## Responsive Design Patterns

### Progressive Disclosure

\`\`\`css
.navigation {
  /* Mobile: hidden by default */
  display: none;
}

.navigation.open {
  display: block;
}

@media (min-width: 768px) {
  .navigation {
    /* Desktop: always visible */
    display: flex !important;
  }
}
\`\`\`

### Flexible Grid Systems

\`\`\`css
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Performance Considerations

Mobile users expect fast loading times:

1. **Image Optimization**: Use WebP, responsive images
2. **Code Splitting**: Load only what's needed
3. **Critical CSS**: Inline above-the-fold styles
4. **Service Workers**: Offline functionality

## Touch Interaction Design

Design for touch interfaces:

- **Minimum Target Size**: 44px × 44px for touch targets
- **Spacing**: Adequate space between interactive elements
- **Gestures**: Support swipe, pinch, and long-press where appropriate
- **Feedback**: Immediate visual response to touches

## Testing Across Devices

Effective mobile testing strategies:

- **Real Device Testing**: Nothing beats actual devices
- **Browser Dev Tools**: Good for initial responsive testing
- **Cloud Testing Services**: Access to various device combinations
- **Performance Testing**: Test on slower networks and devices

Mobile-first design leads to cleaner, faster, and more focused user experiences that work well across all devices.`,
    author: {
      name: "Jordan Kim",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-05",
    readingTime: 9,
    category: "Mobile Development",
    tags: ["Mobile", "Responsive Design", "UX", "Performance"],
    image: "/api/placeholder/800/600",
    featured: false
  }
];