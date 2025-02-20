'use client';

import { useEffect } from 'react';
import { event } from 'nextjs-google-analytics';

/**
 * Komponen untuk tracking scroll depth (90% scroll)
 */
export function ScrollTracker() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage > 90) {
        event('scroll_90%', {
          event_category: 'User Engagement',
          event_label: 'User scrolled 90% of the page',
        });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
