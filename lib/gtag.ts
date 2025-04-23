

export const GA_TRACKING_ID = 'G-FDLHQ1G2RZ' // <-- Replace with your GA4 ID

// Pageview tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Event tracking
type GAEvent = {
  action: string
  category: string
  label: string
  value?: number
}

export const event = ({ action, category, label, value }: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}
declare global {
    interface Window {
      gtag: (...args: any[]) => void
    }
  }
  
