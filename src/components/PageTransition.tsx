import { useRouter } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import './PageTransition.css'

const ANIMATION_DURATION = 800 // Full animation duration in ms

export function PageTransition() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Subscribe to router navigation events
    const unsubscribe = router.subscribe('onBeforeNavigate', () => {
      // Clear any existing timeout
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
      
      // Start the animation
      setIsTransitioning(true)
      
      // Always let the animation complete fully
      animationTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
      }, ANIMATION_DURATION)
    })

    return () => {
      unsubscribe()
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [router])

  return (
    <svg
      className={`header-logo ${isTransitioning ? 'header-logo--active' : ''}`}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main triangle - draws itself on transition */}
      <path
        className="header-logo__triangle header-logo__triangle--main"
        d="M32 8.58L3.24 55.09h57.52z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary triangle - slightly delayed, creates depth */}
      <path
        className="header-logo__triangle header-logo__triangle--secondary"
        d="M32 16L10 50h44z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner triangle - smallest, most delayed */}
      <path
        className="header-logo__triangle header-logo__triangle--inner"
        d="M32 24L18 45h28z"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center dot that pulses */}
      <circle
        className="header-logo__dot"
        cx="32"
        cy="38"
        r="3"
        strokeWidth="1"
      />
    </svg>
  )
}
