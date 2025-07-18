# CLAUDE.md - dp-next Project Guide

## Project Overview

**dp-next** is a modern personal blog/portfolio website built with Next.js 15 and React 19. It's designed as a personal site for Daniel Pointecker, a software developer from Austria, featuring a journal section, resources page, and various utility pages.

### Key Technologies & Architecture

- **Framework**: Next.js 15 (App Router)
- **React**: 19.0.0 with React Server Components
- **TypeScript**: Full TypeScript implementation
- **Styling**: Tailwind CSS + SCSS modules (hybrid approach)
- **Content Management**: Contentlayer for markdown-based content
- **Analytics**: Fathom Analytics integration
- **Build Tool**: Uses Bun (lockfile present)

## Architecture Patterns

### 1. **App Router Structure** (Next.js 15)
```
app/
├── layout.tsx           # Root layout with navigation, fonts, analytics
├── page.tsx            # Home page with animated hero section
├── about/page.tsx      # About page
├── journal/            # Blog section
│   ├── page.tsx        # Journal index with posts by year
│   └── [slug]/page.tsx # Dynamic blog post pages
├── resources/page.tsx  # Resources page
├── uses/page.tsx       # Uses page (tools & equipment)
├── privacy-policy/page.tsx
└── site-notice/page.tsx
```

### 2. **Content Management with Contentlayer**
- **Posts**: Stored in `_posts/` directory as Markdown files
- **Schema**: Defined in `contentlayer.config.ts`
- **Fields**: `title`, `date`, `slug`, `metadesc`
- **Processing**: Uses `rehype-pretty-code` with Shiki for syntax highlighting
- **Theme**: GitHub Light theme for code blocks

### 3. **Styling Architecture**
- **Primary**: Tailwind CSS with custom configuration
- **Secondary**: SCSS modules for component-specific styles
- **Fonts**: Custom font loading (Greycliff, Inter, CodeSaver)
- **Dark Mode**: CSS-based dark mode support with `prefers-color-scheme`
- **Colors**: Custom yellow/green gradient branding

### 4. **Component Organization**
```
components/
├── nav.tsx              # Main navigation (desktop + mobile)
├── footer.tsx           # Site footer
├── pageHeader.tsx       # Reusable page header component
└── Fathom.tsx          # Analytics tracking component
```

### 5. **Library Structure**
```
lib/
├── post.ts             # Post data fetching and processing
└── uses.ts             # YAML data loading for uses page
```

## Development Workflow

### Available Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run export   # Static export
```

### Key Configuration Files
- `next.config.js` - Next.js configuration with Contentlayer integration
- `tailwind.config.js` - Tailwind configuration with custom fonts and colors
- `contentlayer.config.ts` - Content processing configuration
- `tsconfig.json` - TypeScript configuration with path aliases

### Path Aliases (tsconfig.json)
```typescript
"@components/*": ["components/*"]
"@api/*": ["api/*"]
"@layouts/*": ["layouts/*"]
"@pages/*": ["pages/*"]
"@styles/*": ["styles/*"]
"@svg/*": ["svg/*"]
"@lib/*": ["lib/*"]
"@fonts/*": ["fonts/*"]
```

## Content Structure

### Blog Posts
- **Location**: `_posts/` directory
- **Format**: Markdown with frontmatter
- **Naming**: `YYYYMMDD_slug.md` pattern
- **Required Fields**:
  ```yaml
  ---
  slug: post-slug
  title: "Post Title"
  date: YYYY-MM-DD
  metadesc: "SEO description"
  ---
  ```

### Data Files
- **Uses**: `data/uses.yml` - Equipment and software lists
- **Config**: `config.yml` - Site configuration

## Styling Guidelines

### Color Scheme
- **Primary Brand**: Yellow gradient (`#FFF95A` to `#FFF22E`)
- **Dark Mode**: Green gradient (`#064e3b` to `#065f46`)
- **Accent**: `#333` for text elements

### Typography
- **Sans-serif**: Greycliff (primary), Inter (fallback)
- **Monospace**: CodeSaver (primary)
- **Hierarchy**: Font-mono for technical content, sans for body text

### Component Styling
- **Approach**: Tailwind-first with SCSS modules for complex layouts
- **Responsiveness**: Mobile-first with `md:` breakpoints
- **Animations**: CSS transitions for hover effects

## Special Features

### 1. **Animated Hero Section**
- Custom SCSS animations in `app/index.module.scss`
- Responsive typography with vw units
- Branded background tiles with gradients

### 2. **Dual Navigation**
- Desktop: Horizontal navigation with icon hover effects
- Mobile: Fixed bottom navigation bar
- Custom SVG icons in `svg/` directory

### 3. **Content Processing**
- Automatic syntax highlighting with Shiki
- Custom rehype plugins for code formatting
- SEO optimization with canonical URLs

### 4. **Dark Mode Support**
- CSS-based dark mode using `prefers-color-scheme`
- Consistent color scheme across all components
- Gradient variations for different themes

## Development Best Practices

### Code Organization
- **Server Components**: Use `"server-only"` import for server-side logic
- **Client Components**: Minimal use, mainly for interactive elements
- **Type Safety**: Full TypeScript coverage with strict mode
- **Path Aliases**: Use configured aliases for clean imports

### Content Management
- **Markdown**: Write posts in Markdown with proper frontmatter
- **Images**: Store in `public/images/` directory
- **SEO**: Include metadesc in all posts and pages
- **URLs**: Use canonical URLs for better SEO

### Performance Considerations
- **Font Loading**: Local font files with `next/font/local`
- **Image Optimization**: Next.js Image component where applicable
- **Static Generation**: Most pages are statically generated
- **Analytics**: Lightweight Fathom Analytics integration

## Environment Setup

### Requirements
- Node.js (for Next.js)
- Bun (preferred package manager)
- TypeScript knowledge
- Tailwind CSS familiarity

### Getting Started
1. Install dependencies: `bun install`
2. Run development server: `bun run dev`
3. Add new posts to `_posts/` directory
4. Customize styles in `tailwind.config.js` or component SCSS modules

## Content Creation Guidelines

### Writing Blog Posts
1. Create file in `_posts/` with date prefix
2. Include required frontmatter fields
3. Use standard Markdown syntax
4. Add code blocks with language specification for syntax highlighting
5. Include meta description for SEO

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` with proper metadata export
3. Include canonical URL in metadata
4. Add navigation link if needed in `components/nav.tsx`

## Deployment Notes

- **Platform**: Designed for static deployment (Next.js export)
- **Build**: Uses standard Next.js build process
- **Assets**: Self-contained with local fonts and images
- **Analytics**: Fathom Analytics configured (requires environment variables)

This architecture provides a solid foundation for a personal blog with modern web development practices, emphasizing performance, SEO, and maintainability.