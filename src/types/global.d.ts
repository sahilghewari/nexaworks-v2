// Global type declarations for runtime globals used across the app
export {};

declare global {
  interface Window {
    // Google Tag Manager / dataLayer events
    dataLayer?: Array<Record<string, unknown>>;
  }
}
