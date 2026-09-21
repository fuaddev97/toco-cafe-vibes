# Scroll-triggered section entrances

## Goal
Add subtle, one-time upward reveal animations as each major home-page section approaches the viewport, while preserving the current design and behavior.

## What will change
- Observe the existing content sections as the page loads.
- Start unrevealed sections about 30px below their final position with light opacity reduction.
- Trigger each reveal shortly before the section enters the viewport.
- Keep revealed sections in place permanently so animations never replay while scrolling.
- Respect reduced-motion preferences by showing all sections immediately without movement.

## Technical details
- Use the browser's native `IntersectionObserver` in React; add no dependencies.
- Apply one shared vanilla-CSS animation class to the relevant sections.
- Leave the hero's existing letter animation, layout, spacing, colors, and interactions unchanged.
- Verify the result on desktop and mobile, including the mobile menu and browser console.
