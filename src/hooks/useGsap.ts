/**
 * ============================================================================
 * GSAP + React Integration Hook
 * ============================================================================
 * 
 * This hook provides a clean way to use GSAP with React.
 * 
 * KEY CONCEPT: GSAP & React Lifecycle
 * ------------------------------------
 * GSAP manipulates the DOM directly, while React uses a virtual DOM.
 * This means we need to:
 * 1. Wait for components to mount before animating (useLayoutEffect)
 * 2. Clean up GSAP animations when components unmount
 * 3. Use refs to target DOM elements (not state)
 * 
 * gsap.context() is the magic sauce - it:
 * - Scopes all animations to a container
 * - Provides automatic cleanup via .revert()
 * - Allows selector scoping (e.g., ".box" only matches within container)
 */

import { useRef, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";

/**
 * useGsapContext - Provides a scoped GSAP context for React components
 * 
 * @returns A ref to attach to your container element
 * 
 * Usage:
 * ```tsx
 * const containerRef = useGsapContext((context) => {
 *   // All GSAP animations here are scoped to the container
 *   gsap.to(".box", { x: 100 });
 * });
 * 
 * return <div ref={containerRef}>...</div>;
 * ```
 */
export function useGsapContext<T extends HTMLElement = HTMLDivElement>(
  animation: (context: gsap.Context) => void,
  dependencies: React.DependencyList = []
) {
  const containerRef = useRef<T>(null);
  
  useLayoutEffect(() => {
    // Create a GSAP context scoped to our container
    const ctx = gsap.context(() => {
      // Run the animation callback
      animation(ctx);
    }, containerRef);
    
    // Cleanup: revert all GSAP changes when component unmounts
    // This is CRUCIAL - without this, GSAP animations can cause memory leaks
    return () => ctx.revert();
  }, dependencies);
  
  return containerRef;
}

/**
 * useGsapTimeline - Creates a GSAP timeline with proper React cleanup
 * 
 * Timelines are GSAP's way of sequencing animations.
 * Think of them like a video editor's timeline - you can:
 * - Sequence animations one after another
 * - Overlap animations with precise timing
 * - Control the entire sequence (play, pause, reverse, seek)
 */
export function useGsapTimeline(
  timelineConfig?: gsap.TimelineVars
) {
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  useLayoutEffect(() => {
    // Create timeline on mount
    tlRef.current = gsap.timeline(timelineConfig);
    
    return () => {
      // Kill the timeline on unmount
      tlRef.current?.kill();
    };
  }, []);
  
  return tlRef;
}

/**
 * useGsapAnimation - Simple hook for one-off animations
 * 
 * Perfect for hover effects, click animations, etc.
 */
export function useGsapAnimation() {
  const elementRef = useRef<HTMLElement>(null);
  
  const animate = useCallback((vars: gsap.TweenVars) => {
    if (elementRef.current) {
      return gsap.to(elementRef.current, vars);
    }
  }, []);
  
  const animateFrom = useCallback((vars: gsap.TweenVars) => {
    if (elementRef.current) {
      return gsap.from(elementRef.current, vars);
    }
  }, []);
  
  return { ref: elementRef, animate, animateFrom };
}
