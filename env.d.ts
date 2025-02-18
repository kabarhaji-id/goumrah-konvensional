declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_WHATSAPP_NUMBER: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_COLLECTION_ID_URL: string;
    NEXT_PUBLIC_API_TOKEN: string;
    NEXT_PUBLIC_BASE_URL: string;

    NEXT_PUBLIC_PIXEL_ID: string;
    NEXT_PUBLIC_FB_ACCESS_TOKEN: string;
    NEXT_PUBLIC_GA_ID: string;
    NEXT_PUBLIC_GTM_ID: string;
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
    NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID: string;
    NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID: string;

    MAILCHIMP_API_KEY: string;
    MAILCHIMP_API_SERVER: string;
    MAILCHIMP_AUDIENCE_ID: string;
  }
}
