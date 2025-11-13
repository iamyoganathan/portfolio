"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Only log in development or when explicitly enabled
    if (
      process.env.NODE_ENV === "development" ||
      process.env.NEXT_PUBLIC_ENABLE_WEB_VITALS === "true"
    ) {
      console.log("Web Vital:", metric);
    }

    // In production, you would typically send these metrics to an analytics service
    // Examples: Google Analytics, Vercel Analytics, DataDog, etc.

    switch (metric.name) {
      case "CLS":
        // Cumulative Layout Shift
        if (metric.value > 0.1) {
          console.warn("Poor CLS score:", metric.value);
        }
        break;
      case "FID":
        // First Input Delay
        if (metric.value > 100) {
          console.warn("Poor FID score:", metric.value);
        }
        break;
      case "FCP":
        // First Contentful Paint
        if (metric.value > 1800) {
          console.warn("Poor FCP score:", metric.value);
        }
        break;
      case "LCP":
        // Largest Contentful Paint
        if (metric.value > 2500) {
          console.warn("Poor LCP score:", metric.value);
        }
        break;
      case "TTFB":
        // Time to First Byte
        if (metric.value > 800) {
          console.warn("Poor TTFB score:", metric.value);
        }
        break;
      case "INP":
        // Interaction to Next Paint
        if (metric.value > 200) {
          console.warn("Poor INP score:", metric.value);
        }
        break;
    }

    // Example: Send to analytics service in production
    // if (process.env.NODE_ENV === 'production') {
    //   gtag('event', metric.name, {
    //     event_category: 'Web Vitals',
    //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //     event_label: metric.id,
    //     non_interaction: true,
    //   });
    // }
  });

  return null;
}
