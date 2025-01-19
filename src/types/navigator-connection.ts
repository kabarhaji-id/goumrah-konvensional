export interface NavigatorConnection extends Navigator {
  connection?: {
    effectiveType: string;
  };
}
