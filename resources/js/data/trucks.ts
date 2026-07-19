import type { Truck } from '../types/truck';

export const trucks: Truck[] = [
    {
        id: 'volvo-f88',
        model: 'Volvo F88',
        generation: 'De klassieke frontstuurder',
        startYear: 1965,
        endYear: 1977,
        tagline: 'Waar de reis begint',
        description:
            'De Volvo F88 groeide uit tot een van de herkenbaarste Europese vrachtwagens van zijn tijd.',
        specifications: [
            {
                label: 'Motor',
                value: '6-cilinder dieselmotor',
            },
            {
                label: 'Motorinhoud',
                value: 'Circa 9,6 liter',
            },
            {
                label: 'Configuratie',
                value: 'Frontstuurcabine',
            },
            {
                label: 'Periode',
                value: '1965–1977',
            },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Klassieke Volvo F88 vrachtwagen',
        },
    },
];