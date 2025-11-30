# dp-next: Personal Blog & Portfolio

A personal blog and portfolio website for Daniel Pointecker built with **Kirby CMS** and vanilla CSS/JavaScript. No build tools required.

## Overview

**dp-next** is a lightweight, file-based content management system featuring:
- A journal/blog section with date-organized posts
- Resources page
- About, Uses, Privacy Policy, and Site Notice pages
- Vanilla CSS styling with custom font loading
- Pure JavaScript for interactivity

## Tech Stack

- **CMS**: Kirby 5.x (PHP-based, file-driven)
- **Styling**: Vanilla CSS with CSS custom properties and layers
- **JavaScript**: Vanilla JavaScript (no frameworks)
- **Fonts**: Custom WOFF2 fonts (Visby CF, CodeSaver)
- **Server**: PHP 8.1+ development server

## Getting Started

### Prerequisites
- PHP 8.1 or higher
- Composer (for dependency management)

### Installation

```bash
# Install dependencies
composer install

# Start development server
composer run dev

# Server runs at http://localhost:8000
```

## Project Structure

```
dp-next/
├── content/              # Page content (text files)
│   ├── home/
│   ├── journal/
│   ├── resources/
│   ├── uses/
│   ├── about/
│   ├── privacy-policy/
│   └── site-notice/
├── site/
│   ├── templates/        # Page templates (PHP)
│   ├── blueprints/       # Content structure definitions (YAML)
│   ├── snippets/         # Reusable template partials
│   ├── config/           # Kirby configuration
│   └── plugins/          # Custom plugins (kirby-vite)
├── assets/
│   ├── css/              # Vanilla CSS stylesheets
│   │   ├── main.css      # Primary stylesheet
│   │   └── fonts.css     # Font definitions
│   ├── js/               # Vanilla JavaScript
│   │   ├── main.js       # Entry point
│   │   └── site.js       # Site functionality
│   └── fonts/            # Custom font files
├── media/                # User-uploaded files
├── kirby/                # Kirby CMS core (managed by Composer)
└── public/               # Publicly served assets (if using Vite)
```

## Content Management

### Adding Blog Posts

Posts are stored in the `content/journal/` directory and are file-based:

1. Create a new directory in `content/journal/`
2. Add an `index.txt` file with your post content

Blog posts are organized by folder and managed through Kirby's content interface.

### Page Templates

Templates are stored in `site/templates/` as PHP files:
- `default.php` - Base template for all pages
- Custom templates can be created per page type

### Content Blueprints

Page structures are defined in `site/blueprints/pages/` using YAML:
- `default.yml` - Standard page blueprint
- Custom blueprints define which fields are available in the content editor

## Styling

### CSS Architecture

The project uses vanilla CSS with:
- **CSS Cascade Layers**: `@layer` organization for maintainability
- **CSS Custom Properties**: Root-level variables for colors, fonts, spacing
- **Mobile-First**: Responsive design using media queries
- **Dark Mode**: `prefers-color-scheme` media query support

### Fonts

Custom fonts are loaded via WOFF2 format:
- **Display**: Visby CF (headings)
- **Body**: Visby CF (fallback system fonts)
- **Monospace**: CodeSaver (code blocks)

Fonts are preloaded in templates for optimal performance.

## JavaScript

JavaScript files use standard vanilla JS without dependencies:
- `site.js` - Main site functionality class
- `main.js` - Application entry point

Scripts are loaded as ES modules with `defer` attribute.

## Development

### Available Commands

```bash
composer run dev       # Start development server on localhost:8000
```

### Configuration Files

- `composer.json` - PHP dependencies
- `site/config/vite.config.php` - Vite plugin configuration (if using asset compilation)
- `.htaccess` - Web server routing

## Resources

- [Kirby Documentation](https://getkirby.com/docs)
- [Kirby Content Folder Structure](https://getkirby.com/docs/guide/content)
- [Kirby Templating](https://getkirby.com/docs/guide/templates)

## License

Kirby CMS is proprietary software. See [Kirby License](https://getkirby.com/license) for details.

For this project's custom code: © Daniel Pointecker
