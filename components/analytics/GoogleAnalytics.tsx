'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Google Analytics 4 (GA4) Component
 *
 * Usage:
 * 1. Get your GA4 Measurement ID from https://analytics.google.com/
 * 2. It should look like: G-XXXXXXXXXX
 * 3. Replace the measurementId in layout.tsx
 *
 * Features:
 * - Page view tracking
 * - Event tracking
 * - User engagement tracking
 * - Performance optimized with Next.js Script component
 */
export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Don't load in development to avoid polluting analytics data
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  // Don't load if no measurement ID is provided or if it's the placeholder
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics: No valid measurement ID provided. Please add your GA4 Measurement ID to enable analytics.');
    return null;
  }

  return (
    <>
      {/* Google Analytics gtag.js script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      {/* Google Analytics configuration */}
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true, // GDPR compliance
              cookie_flags: 'SameSite=None;Secure', // Enhanced security
            });

            // Custom event tracking
            window.gtag = gtag;
          `,
        }}
      />
    </>
  );
}

/**
 * Helper function to track custom events
 *
 * Usage in your components:
 * import { trackEvent } from '@/components/analytics/GoogleAnalytics';
 *
 * trackEvent('button_click', {
 *   category: 'engagement',
 *   label: 'navigation',
 *   value: 1
 * });
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
}

/**
 * Helper function to track page views
 * Useful for custom route tracking or SPA navigation
 */
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}
