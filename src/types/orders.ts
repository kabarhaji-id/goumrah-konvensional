interface Orders {
    id: string;
    package_detail_pricing_id: string;
    orderer_name: string;
    orderer_whatsapp: string;
    orderer_email: string;
    orderer_address: string;
    orderer_latitude: number;
    orderer_longitude: number;
}

export type { Orders }