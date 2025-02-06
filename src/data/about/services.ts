export interface ServiceItem {
  label: string;
  iconSrc: string;
}

export interface ServiceData {
  icon: string;
  title: string;
  subtitle: string;
  description?: string;
  items?: ServiceItem[];
}

export interface ServiceCardProps extends ServiceData {
  isLoading?: boolean;
}

export interface UmrahServicesState {
  services: ServiceData[];
  error: string | null;
  isLoading: boolean;
}