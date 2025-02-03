export {};
declare global {
  interface Window {
    gtag: (command: string, targetId: string, options?: object) => void;
  }
}