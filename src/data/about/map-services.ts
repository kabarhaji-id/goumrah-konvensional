export interface MapProps {
  address: string;
  zoom?: number;
  width?: string;
  height?: string;
  className?: string;
}

export interface MapContainerProps {
  title: string;
  subtitle?: string;
  address: string;
}