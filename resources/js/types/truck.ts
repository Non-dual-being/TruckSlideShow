export interface TruckSpecification {
    label: string;
    value: string;
}

export interface TruckImage {
    src: string;
    alt: string;
    creator?: string;
    sourceName?: string;
    sourceUrl?: string;
    licenseName?: string;
    licenseUrl?: string;
}

export interface Truck {
    id: string;
    model: string;
    generation: string;
    startYear: number;
    endYear?: number;
    tagline: string;
    description: string;
    specifications: TruckSpecification[];
    image: TruckImage;
}