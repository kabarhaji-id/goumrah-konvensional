interface Window {
  fbq: {
    (...args: unknown): void; // Use unknown instead of any
    push: (args: unknown) => void;
    callMethod: (args: unknown) => void;
    queue: unknown;
    loaded: boolean;
    version: string;
  };
  _fbq: {
    (...args: unknown): void;
    push: (args: unknown) => void;
    callMethod: (args: unknown) => void;
    queue: unknown;
    loaded: boolean;
    version: string;
  };
}
