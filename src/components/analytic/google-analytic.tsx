'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';

/**
 * Komponen untuk tracking page view secara otomatis
 */
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    // Tracking page view setiap kali path berubah
    event('page_view', {
      page_path: pathname + searchParams.toString(),
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return <GoogleAnalytics trackPageViews />;
}
