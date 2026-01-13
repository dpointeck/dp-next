import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { ProgressiveImage } from '../components/ProgressiveImage'

export const Route = createFileRoute('/progressive-image-demo')({
  component: ProgressiveImageDemo,
  head: () => ({
    meta: [
      { title: 'Progressive Image Demo' },
      {
        name: 'description',
        content: 'Demonstrating the pixelated image loading effect',
      },
    ],
  }),
})

// Sample images with tiny placeholders (using Unsplash's resize params)
const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    placeholder:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=32&q=30',
    alt: 'Mountain landscape with dramatic clouds',
    aspectRatio: 16 / 9,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80',
    placeholder:
      'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=32&q=30',
    alt: 'Abstract architectural lines',
    aspectRatio: 4 / 3,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    placeholder:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=32&q=30',
    alt: 'Foggy forest valley',
    aspectRatio: 16 / 9,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    placeholder:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=32&q=30',
    alt: 'Starry night over snowy mountains',
    aspectRatio: 16 / 9,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80',
    placeholder:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=32&q=30',
    alt: 'Waterfall in lush green forest',
    aspectRatio: 3 / 4,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80',
    placeholder:
      'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=32&q=30',
    alt: 'Golden hour over desert dunes',
    aspectRatio: 16 / 9,
  },
]

function ProgressiveImageDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader>Progressive Image Demo</PageHeader>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <p>
          This component creates a <strong>pixelated reveal effect</strong>{' '}
          inspired by{' '}
          <a
            href="https://fabianmichael.de/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            fabianmichael.de
          </a>
          . Images start as tiny thumbnails (32px wide) scaled up with sharp
          pixel edges, then smoothly transition to the full resolution.
        </p>
        <p>
          <strong>Scroll down</strong> to see the effect in action — images
          lazy-load as they enter the viewport.
        </p>
      </div>

      <div className="space-y-8">
        {images.map((image) => (
          <figure key={image.id} className="m-0">
            <ProgressiveImage
              src={image.src}
              placeholder={image.placeholder}
              alt={image.alt}
              aspectRatio={image.aspectRatio}
              className="rounded-lg"
            />
            <figcaption className="text-muted text-sm mt-2 text-center">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mt-16 mb-8">
        <h2>How to Use</h2>
        <pre>
          <code>{`import { ProgressiveImage } from '@/components/ProgressiveImage'

<ProgressiveImage
  src="/images/photo.jpg"           // Full resolution
  placeholder="/images/photo-tiny.jpg"  // ~32px wide
  alt="Description"
  aspectRatio={16/9}
/>`}</code>
        </pre>

        <h3>The Magic: Tiny Placeholders</h3>
        <p>
          The secret is the <code>placeholder</code> prop — a very small version
          of your image (20-40px wide). The CSS property{' '}
          <code>image-rendering: pixelated</code> scales it up with crisp,
          blocky pixels instead of blurring.
        </p>

        <h3>Generating Placeholders</h3>
        <p>For static images, resize them to ~32px wide:</p>
        <pre>
          <code>{`# ImageMagick
convert input.jpg -resize 32x output-tiny.jpg

# Or use URL parameters with image CDNs:
# Unsplash: ?w=32&q=30
# Cloudinary: /w_32,q_30/
# Imgix: ?w=32&q=30`}</code>
        </pre>
      </div>
    </div>
  )
}
