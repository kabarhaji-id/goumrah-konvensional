export type Services = {
  services: Service[];
}

export type Service = {
  icon:           string;
  title:          string;
  subtitle:       string;
  servicesItems?: ServicesItem[];
  description?:   string;
}

export type ServicesItem = {
  label:   string;
  iconSrc: string;
  items:   string[];
}


export interface ServiceCardProps extends Service {
  isLoading?: boolean;
}

export interface UmrahServicesState {
  services: Service[];
  error: string | null;
  isLoading: boolean;
}
