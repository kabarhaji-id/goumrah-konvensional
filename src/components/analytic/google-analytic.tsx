'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';

/**
 * Komponen untuk tracking page view dan custom event ke GTM
 */
export function Analytics({ eventData }: { eventData?: Record<string, any> }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    // Ambil query params jika ada
    const query = searchParams.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;

    // Tracking page view ke GA
    event('page_view', {
      page_path: fullPath,
      page_title: document.title,
      page_location: window.location.href,
      page_referrer: document.referrer || "direct",
      language: navigator.language || "en",
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
      country: "id" // Bisa diperoleh dari API lokasi jika diperlukan
    });

    // Ambil lokasi pengguna jika diizinkan
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.warn("Geolocation error:", error);
          setCurrentLocation("Permission Denied");
        }
      );
    } else {
      setCurrentLocation("Geolocation not supported");
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!pathname || currentLocation === null) return;

    // Data dinamis untuk GTM
    const dynamicEventData = {
      event_name: eventData?.event_name || "page_view",
      timezoneOffset: new Date().getTimezoneOffset(),
      country: eventData?.country || "id",
      lang: eventData?.lang || "en",
      currency: eventData?.currency || "IDR",
      intf: eventData?.intf || "mobile",
      currentLocation: currentLocation, // Lokasi pengguna
      pageId: eventData?.pageId || crypto.randomUUID(),
      pageName: eventData?.pageName || document.title,
      storefront: eventData?.storefront || "insurance",
      funnelSource: eventData?.funnelSource || "default_source",
      clientTimestamp: Date.now(),
      requestId: eventData?.requestId || crypto.randomUUID(),
      eventAction: eventData?.eventAction || "END OF FEED",
      deeplinkUrl: eventData?.deeplinkUrl || undefined,
      sections: eventData?.sections || [
        {
          sectionId: "default_section",
          sectionName: "Default Section",
          widget: "DEFAULT_WIDGET",
          position: 1,
          activeFilter: null,
          filters: null,
          details: undefined
        }
      ],
      event: eventData?.event || "TRACK",
      "gtm.uniqueEventId": Date.now(), // Unik setiap kali event dipanggil
    };

    // Pastikan dataLayer ada sebelum push
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(dynamicEventData);

  }, [pathname, searchParams, currentLocation, eventData]);

  return <GoogleAnalytics trackPageViews />;
}
