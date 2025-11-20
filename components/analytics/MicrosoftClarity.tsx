'use client';

import Script from 'next/script';

interface MicrosoftClarityProps {
  projectId: string;
}

/**
 * Microsoft Clarity Component
 *
 * Usage:
 * 1. Get your Clarity Project ID from https://clarity.microsoft.com/
 * 2. It should look like: xxxxxxxxxx (10 alphanumeric characters)
 * 3. Add the projectId in layout.tsx
 *
 * Features:
 * - Session recordings
 * - Heatmaps (click, scroll, area)
 * - User behavior analytics
 * - Free and unlimited
 * - GDPR compliant
 * - Performance optimized with Next.js Script component
 */
export function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  // Don't load in development to avoid polluting analytics data
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  // Don't load if no project ID is provided
  if (!projectId) {
    console.warn('Microsoft Clarity: No project ID provided. Please add your Clarity Project ID to enable analytics.');
    return null;
  }

  return (
    <>
      {/* Microsoft Clarity tracking code */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${projectId}");
          `,
        }}
      />
    </>
  );
}

/**
 * Helper function to track custom events in Clarity
 *
 * Usage in your components:
 * import { clarityEvent } from '@/components/analytics/MicrosoftClarity';
 *
 * clarityEvent('button_click', 'navigation');
 */
export function clarityEvent(eventName: string, eventData?: string) {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', eventName, eventData);
  }
}

/**
 * Helper function to set custom session tags
 *
 * Usage:
 * import { clarityTag } from '@/components/analytics/MicrosoftClarity';
 *
 * clarityTag('userType', 'premium');
 */
export function clarityTag(key: string, value: string) {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('set', key, value);
  }
}

/**
 * Helper function to identify users (useful for support)
 *
 * Usage:
 * import { clarifyIdentify } from '@/components/analytics/MicrosoftClarity';
 *
 * clarifyIdentify('user123', 'session456', 'page789');
 */
export function clarityIdentify(userId?: string, sessionId?: string, pageId?: string) {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('identify', userId, sessionId, pageId);
  }
}
