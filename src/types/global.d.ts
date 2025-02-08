export {};

interface DataLayerEvent {
  event: string;
  [key: string]: string | number | boolean | object | undefined;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    gtag: (command: "config" | "event" | "set" | "js", targetId: string | Date, options?: object) => void;

    fbq: {
      (...args: unknown[]): void;
      push: (args: unknown) => void;
      callMethod: (args: unknown) => void;
      queue: unknown[];
      loaded: boolean;
      version: string;
      initialized?: boolean; // ✅ Tambahkan properti initialized
    };

    _fbq: {
      (...args: unknown[]): void;
      push: (args: unknown) => void;
      callMethod: (args: unknown) => void;
      queue: unknown[];
      loaded: boolean;
      version: string;
      initialized?: boolean; // ✅ Tambahkan properti initialized
    };
  }
}
