interface Reviews {
    id: string;
    author: Author;
    content: string;
    rating: number;
}

interface Author {
    id: string;
    fullName: string;
    whatsapp: string;
    email: string;
    address: string;
    latitude: string;
    longitude: string;
}

export type { Reviews }