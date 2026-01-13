import { Link } from '@tanstack/react-router'
import './PostNavigation.css'

interface PostNavLink {
  slug: string
  title: string
}

interface PostNavigationProps {
  prevPost: PostNavLink | null
  nextPost: PostNavLink | null
}

export function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  return (
    <>
      {/* Desktop side navigation */}
      <nav className="post-nav-desktop" aria-label="Post navigation">
        {prevPost && (
          <Link
            to="/journal/$slug"
            params={{ slug: prevPost.slug }}
            className="post-nav-link post-nav-prev"
            aria-label={`Previous post: ${prevPost.title}`}
          >
            <span className="post-nav-arrow">←</span>
            <span className="post-nav-title">{prevPost.title}</span>
          </Link>
        )}
        {nextPost && (
          <Link
            to="/journal/$slug"
            params={{ slug: nextPost.slug }}
            className="post-nav-link post-nav-next"
            aria-label={`Next post: ${nextPost.title}`}
          >
            <span className="post-nav-arrow">→</span>
            <span className="post-nav-title">{nextPost.title}</span>
          </Link>
        )}
      </nav>

      {/* Mobile bottom navigation */}
      <nav className="post-nav-mobile" aria-label="Post navigation">
        {prevPost && (
          <Link
            to="/journal/$slug"
            params={{ slug: prevPost.slug }}
            className="post-nav-mobile-link post-nav-mobile-link-prev"
            aria-label={`Previous post: ${prevPost.title}`}
          >
            <span className="post-nav-mobile-arrow">←</span>
            <span className="post-nav-mobile-label">Previous</span>
          </Link>
        )}
        {nextPost && (
          <Link
            to="/journal/$slug"
            params={{ slug: nextPost.slug }}
            className="post-nav-mobile-link post-nav-mobile-link-next"
            aria-label={`Next post: ${nextPost.title}`}
          >
            <span className="post-nav-mobile-label">Next</span>
            <span className="post-nav-mobile-arrow">→</span>
          </Link>
        )}
      </nav>
    </>
  )
}
