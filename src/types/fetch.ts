export interface resJson<T> {
    data: T;
    links: Links
    meta: Meta;
}

export interface resJsonDetail<T> {
    data: T;
}

interface Links {
    first: string;
    last: string;
    prev: unknown | null;
    next: unknown | null;
}

interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLink;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

interface MetaLink {
    url: unknown | null;
    label: string;
    active: boolean;
}