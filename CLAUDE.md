# CLAUDE.md - dp-next Project Guide

## Project Overview

**dp-next** is a personal blog and portfolio website built with **Kirby CMS** and vanilla CSS/JavaScript. It's designed as a personal site for Daniel Pointecker, a software developer from Austria, featuring a journal section, resources page, and various utility pages.

### Key Technologies & Architecture

- **CMS**: Kirby 5.x (PHP-based, file-driven content management)
- **Styling**: Vanilla CSS with CSS custom properties and cascade layers
- **JavaScript**: Vanilla JavaScript (ES modules, no frameworks)
- **Language**: PHP 8.1+ for templates and server logic
- **Build Process**: None (no-build setup) - vanilla CSS and JS served directly
- **Asset Management**: Optional kirby-vite plugin for production builds
- **Fonts**: Custom WOFF2 fonts (Visby CF, CodeSaver)

## Architecture Patterns

### 1. **Content Structure** (File-Based)
```
content/
├── home/
│   └── home.txt              # Home page content
├── journal/
│   ├── journal.txt           # Journal index/overview
│   └── [post-slug]/
│       └── index.txt         # Individual blog post
├── about/
│   └── index.txt             # About page
├── uses/
│   └── uses.txt              # Uses/equipment page
├── resources/
│   └── resources.txt         # Resources page
├── privacy-policy/
│   └── privacy-policy.txt    # Privacy policy
└── site-notice/
    └── site-notice.txt       # Site notice
```

All content is stored as plain text files with frontmatter (YAML format). Kirby manages content through the CMS interface or direct file editing.

### 2. **Template Architecture** (PHP)
```
site/
├── templates/
│   └── default.php           # Base template for all pages
├── snippets/                 # Reusable template partials
├── blueprints/
│   ├── site.yml             # Site-wide blueprint
│   └── pages/
│       └── default.yml      # Default page blueprint
└── config/
    └── vite.config.php      # Asset pipeline config
```

Templates are PHP files that receive content from Kirby. The `default.php` template is used for all pages and handles rendering.

### 3. **Styling Architecture**
- **Approach**: Vanilla CSS with no build dependencies
- **Methodology**: CSS Cascade Layers (`@layer`) for organization
- **Variables**: CSS custom properties in `:root` for theming
- **Fonts**: WOFF2 format with preloading in template `<head>`
- **Dark Mode**: `@media (prefers-color-scheme: dark)` media query support
- **Responsiveness**: Mobile-first with standard media queries

### 4. **JavaScript Organization**
```
assets/js/
├── main.js              # Entry point - initializes Site class
└── site.js              # Main Site class with functionality
```

- Uses vanilla JavaScript with ES modules
- Classes and OOP patterns for code organization
- No external dependencies or frameworks
- Scripts loaded with `defer` attribute and `type="module"`

### 5. **Asset Structure**
```
assets/
├── css/
│   ├── main.css         # Primary stylesheet with @layer organization
│   └── fonts.css        # Font-face declarations
├── js/
│   ├── main.js          # Entry point
│   └── site.js          # Site functionality
└── fonts/               # Custom WOFF2 font files
```

## Development Workflow

### Available Commands
```bash
composer install  # Install PHP dependencies
composer run dev  # Start development server (localhost:8000)
```

### Key Configuration Files
- `composer.json` - PHP dependencies (Kirby CMS, kirby-vite plugin)
- `composer.lock` - Locked dependency versions
- `site/blueprints/` - Content structure definitions (YAML)
- `site/config/vite.config.php` - Asset pipeline configuration
- `.htaccess` - Apache routing configuration
- `index.php` - Application entry point

### Kirby Bootstrap Process
The `index.php` file boots Kirby by:
```php
require 'kirby/bootstrap.php';
echo (new Kirby)->render();
```

Kirby automatically routes requests to appropriate templates based on the content folder structure.

## Content Structure

### Blog Posts
- **Location**: `content/journal/` directory
- **Format**: Plain text files with YAML frontmatter
- **Structure**: Each post is a folder with an `index.txt` file
- **Content File Example**:
  ```yaml
  Title: Post Title
  Date: YYYY-MM-DD

  ----

  Post content in plain text/HTML format
  ```

### Page Content Files
All pages use `.txt` files with YAML frontmatter:
- `content/home/home.txt` - Home page
- `content/about/index.txt` - About page
- `content/uses/uses.txt` - Uses/equipment page
- `content/resources/resources.txt` - Resources page
- `content/privacy-policy/privacy-policy.txt` - Privacy policy
- `content/site-notice/site-notice.txt` - Site notice

### Blueprints (Content Schema)
Blueprints define which fields are available in the Kirby Panel:
- Located in `site/blueprints/pages/`
- YAML format for field definitions
- Define content structure and editor UI

## Styling Guidelines

### CSS Architecture
- **Approach**: Vanilla CSS with cascade layers for maintainability
- **Organization**: Defined using `@layer reset, global, utilities, components, overrides`
- **Variables**: CSS custom properties in `:root` scope
- **No Build Tool**: CSS is served directly without compilation

### Typography
```css
:root {
  --font-display: "Visby CF", "Trebuchet MS", sans-serif;
  --font-sans: "Visby CF", -apple-system, BlinkMacSystemFont, ...;
  --font-mono: "CodeSaver", "Menlo", "Monaco", ...;
}
```

- **Display/Headings**: Visby CF (custom font)
- **Body**: Visby CF with system font fallbacks
- **Monospace**: CodeSaver for code blocks and technical content

### Color & Theming
- **Light Mode**: Default color scheme optimized for light backgrounds
- **Dark Mode**: Activated via `@media (prefers-color-scheme: dark)`
- **Custom Properties**: Colors defined as CSS variables for easy theming
- **Branding**: Yellow/green gradient aesthetic

### Font Loading
- **Format**: WOFF2 (modern, optimized)
- **Preloading**: Critical fonts preloaded in template `<head>` for performance
- **Location**: `assets/fonts/` directory
- **Declaration**: `assets/css/fonts.css` handles all `@font-face` definitions

### Responsive Design
- **Mobile-First**: Base styles for mobile, enhanced with media queries
- **Breakpoints**: Standard media queries (typically `min-width: 768px` for tablet up)
- **Viewport Meta**: Set in template for mobile optimization

## Special Features

### 1. **File-Based Content Management**
- Pure file-based storage (no database required)
- Version control friendly content
- Direct file editing or Kirby Panel UI

### 2. **Template Rendering**
- PHP templates receive page data from Kirby
- Single `default.php` template handles all pages
- Kirby provides helper functions like `$page->title()`, `$page->content()`

### 3. **Asset Preloading**
- Critical fonts preloaded in `<head>` for better Core Web Vitals
- CSS and JS loaded efficiently with `defer` and `async` attributes

### 4. **Dark Mode Support**
- CSS-based dark mode using `prefers-color-scheme` media query
- No JavaScript required for theme switching
- Consistent styling across all components

## Development Best Practices

### PHP Template Practices
- **Template Logic**: Keep template logic minimal - use Kirby helper methods
- **Variable Scope**: Content data accessed via `$page` object
- **Security**: Use `$page->text()` for escaped output when appropriate
- **Reusability**: Extract common markup into `site/snippets/`

### CSS/Styling Practices
- **No Build Tool**: Edit CSS directly in `assets/css/`
- **Naming**: Use descriptive class names (avoid single-letter abbreviations)
- **Specificity**: Leverage cascade layers to avoid specificity wars
- **Custom Properties**: Use CSS variables for themeable values
- **Mobile First**: Write mobile styles first, enhance with `@media` queries

### JavaScript Practices
- **Vanilla JS**: Use ES modules and modern JavaScript APIs
- **Classes**: Organize code into ES6 classes
- **No Dependencies**: Avoid external libraries where vanilla JS suffices
- **Performance**: Load scripts with `defer` for non-critical functionality

### Content Management
- **File Structure**: Use folders for posts, not just flat files
- **Frontmatter**: Follow YAML format in `.txt` files
- **Naming**: Use descriptive folder names for post slugs
- **SEO**: Include proper titles and descriptions in content

## Environment Setup

### Requirements
- PHP 8.1 or higher
- Composer (for dependency management)
- Local development server

### Getting Started
1. Clone repository
2. Run `composer install`
3. Start dev server: `composer run dev`
4. Access site at `http://localhost:8000`
5. Edit content in `content/` folders or via Kirby Panel

## Content Creation Guidelines

### Writing Blog Posts
1. Create new folder in `content/journal/` with slug name
2. Add `index.txt` file with content
3. Include Title and Date in frontmatter:
   ```
   Title: My Blog Post
   Date: 2025-01-15
   ```
4. Write content after `----` separator
5. Use standard HTML or Markdown (depending on Kirby setup)

### Adding New Pages
1. Create directory in `content/` (e.g., `content/my-page/`)
2. Add `index.txt` with required frontmatter
3. Template uses `default.php` to render page
4. Update navigation if needed by modifying template

### Template Modifications
1. Edit `site/templates/default.php` to change page rendering
2. Create snippets in `site/snippets/` for reusable components
3. Access page content via Kirby API: `$page->title()`, `$page->text()`, etc.

## Kirby Panel

The Kirby Panel provides a web-based editor at `/panel`:
- Edit page content through web interface
- Manage file structure graphically
- Define custom fields via blueprints in `site/blueprints/`

## Deployment Notes

- **Platform**: Works on any PHP 8.1+ hosting
- **Build**: No build step needed - serve directly
- **Assets**: All assets (CSS, JS, fonts) self-contained
- **Content**: All content stored in version-controlled text files
- **Performance**: Static file delivery, minimal server load

This architecture provides a lightweight, maintainable personal blog using Kirby CMS with vanilla CSS and JavaScript, emphasizing simplicity, performance, and ease of deployment.