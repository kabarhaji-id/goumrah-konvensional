'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';
import CookieConsent from 'react-cookie-consent';
import { v4 as uuidv4 } from 'uuid';

export function Analytics({ eventData }: { eventData?: Record<string, any> }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const userConsent = localStorage.getItem('userConsent');
    if (userConsent === 'granted') {
      setConsentGiven(true);
    } else if (userConsent === 'denied') {
      setConsentGiven(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userConsent', 'granted');
    setConsentGiven(true);
  };

  const handleDecline = () => {
    localStorage.setItem('userConsent', 'denied');
    setConsentGiven(false);
  };

  useEffect(() => {
    if (!pathname || consentGiven === null) return;

    const query = searchParams.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;

    event('page_view', {
      page_path: fullPath,
      page_title: document.title,
      page_location: window.location.href,
      page_referrer: document.referrer || 'direct',
      language: navigator.language || 'en',
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      country: 'id',
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.warn('Geolocation error:', error);
          setCurrentLocation('Permission Denied');
        }
      );
    } else {
      setCurrentLocation('Geolocation not supported');
    }
  }, [pathname, searchParams, consentGiven]);

  useEffect(() => {
    if (!pathname || currentLocation === null || consentGiven === null) return;

    const dynamicEventData = {
      event_name: eventData?.event_name || 'page_view',
      timezoneOffset: new Date().getTimezoneOffset(),
      country: eventData?.country || 'id',
      lang: eventData?.lang || 'en',
      currency: eventData?.currency || 'IDR',
      intf: eventData?.intf || 'mobile',
      currentLocation: currentLocation,
      pageId: eventData?.pageId || uuidv4(),
      pageName: eventData?.pageName || document.title,
      storefront: eventData?.storefront || 'travel',
      funnelSource: eventData?.funnelSource || 'default_source',
      clientTimestamp: Date.now(),
      requestId: eventData?.requestId || uuidv4(),
      eventAction: eventData?.eventAction || 'END OF FEED',
      deeplinkUrl: eventData?.deeplinkUrl || undefined,
      sections: eventData?.sections || [
        {
          sectionId: 'default_section',
          sectionName: 'Default Section',
          widget: 'DEFAULT_WIDGET',
          position: 1,
          activeFilter: null,
          filters: null,
          details: undefined,
        },
      ],
      event: eventData?.event || 'TRACK',
      'gtm.uniqueEventId': Date.now(),
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(dynamicEventData);
  }, [pathname, searchParams, currentLocation, eventData, consentGiven]);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <CookieConsent
        location="bottom"
        buttonText="Terima"
        declineButtonText="Tolak"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        style={{
          background: 'transparent',
          position: 'fixed',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%) translateY(-20%)',
          width: '100%',
          maxWidth: '32rem',
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        buttonStyle={{
          background: '#1B8386',
          color: '#fff',
          fontSize: '14px',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem'
        }}
        declineButtonStyle={{
          background: '#f44336',
          color: '#fff',
          fontSize: '14px',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem'
        }}
      >
        <h3 style={{ color: '#333', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Persetujuan Cookie
        </h3>
        <p style={{ color: '#333', marginBottom: '1rem' }}>
          Situs web ini menggunakan cookie untuk memastikan Anda mendapatkan pengalaman terbaik.
        </p>
      </CookieConsent>
    </>
  );
}
