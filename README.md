# dp-next

Personal blog/portfolio website for Daniel Pointecker, built with TanStack Start.

## Tech Stack

- **Framework**: TanStack Start (React 19)
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4
- **Content**: Markdown with gray-matter + rehype-pretty-code
- **Analytics**: Fathom Analytics
- **Runtime**: Bun

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```
VITE_FATHOM_SITE_ID=your_fathom_site_id
VITE_GOOGLE_SITE_VERIFY_ID=your_google_site_verification_id
```

## Docker

```bash
docker build \
  --build-arg NEXT_PUBLIC_FATHOM_SITE_ID=xxx \
  --build-arg NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID=xxx \
  -t dp-next .

docker run -p 3000:3000 dp-next
```

## Project Structure

```
src/
├── routes/           # File-based routing
│   ├── __root.tsx    # Root layout
│   ├── index.tsx     # Homepage
│   ├── about.tsx
│   ├── journal/
│   │   ├── index.tsx
│   │   └── $slug.tsx
│   ├── resources.tsx
│   ├── uses.tsx
│   ├── privacy-policy.tsx
│   └── site-notice.tsx
├── components/       # Shared components
├── lib/              # Utilities & server functions
├── data/             # YAML data files
└── styles.css        # Global styles
_posts/               # Markdown blog posts
public/               # Static assets
```

## Adding Blog Posts

Create a markdown file in `_posts/` with frontmatter:

```yaml
---
slug: my-post
title: "My Post Title"
date: 2024-01-15
metadesc: "SEO description"
---

Post content here...
```
