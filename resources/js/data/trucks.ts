import type { Truck } from '@/types/truck';

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
            { label: 'Motor', value: '6-cilinder dieselmotor' },
            { label: 'Motorinhoud', value: 'Circa 9,6 liter' },
            { label: 'Configuratie', value: 'Frontstuurcabine' },
            { label: 'Periode', value: '1965–1977' },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Volvo F88 vrachtwagen',
        },
    },
    {
        id: 'volvo-f10',
        model: 'Volvo F10',
        generation: 'Een nieuwe generatie',
        startYear: 1977,
        endYear: 1993,
        tagline: 'Comfort en techniek kwamen samen',
        description:
            'De F10 vormde het begin van een moderne generatie Volvo-vrachtwagens.',
        specifications: [
            { label: 'Motor', value: 'Volvo TD100-serie' },
            { label: 'Cilinders', value: '6 in lijn' },
            { label: 'Motorinhoud', value: 'Circa 9,6 liter' },
            { label: 'Periode', value: '1977–1993' },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Volvo F10 vrachtwagen',
        },
    },
    {
        id: 'volvo-f12',
        model: 'Volvo F12',
        generation: 'Kracht voor de lange afstand',
        startYear: 1977,
        endYear: 1993,
        tagline: 'Gebouwd voor het zware werk',
        description:
            'De F12 combineerde de nieuwe F-seriecabine met extra vermogen voor internationaal transport.',
        specifications: [
            { label: 'Motor', value: 'Volvo TD120-serie' },
            { label: 'Cilinders', value: '6 in lijn' },
            { label: 'Motorinhoud', value: 'Circa 12 liter' },
            { label: 'Periode', value: '1977–1993' },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Volvo F12 vrachtwagen voor internationaal transport',
        },
    },
    {
        id: 'volvo-f16',
        model: 'Volvo F16',
        generation: 'Het vlaggenschip van de F-serie',
        startYear: 1987,
        endYear: 1993,
        tagline: 'Topvermogen in een vertrouwde cabine',
        description:
            'De F16 stond aan de top van de F-serie en richtte zich op de zwaarste transporttaken.',
        specifications: [
            { label: 'Motor', value: 'Volvo TD162-serie' },
            { label: 'Cilinders', value: '6 in lijn' },
            { label: 'Motorinhoud', value: 'Circa 16 liter' },
            { label: 'Periode', value: '1987–1993' },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Volvo F16 vrachtwagen uit de F-serie',
        },
    },
    {
        id: 'volvo-fh12',
        model: 'Volvo FH12',
        generation: 'De eerste FH-generatie',
        startYear: 1993,
        endYear: 2005,
        tagline: 'Een nieuwe standaard voor de snelweg',
        description:
            'De FH12 luidde een nieuw tijdperk in met een aerodynamische cabine en aandacht voor chauffeur en veiligheid.',
        specifications: [
            { label: 'Motor', value: 'Volvo D12-serie' },
            { label: 'Cilinders', value: '6 in lijn' },
            { label: 'Motorinhoud', value: 'Circa 12 liter' },
            { label: 'Introductie', value: '1993' },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Volvo FH12 vrachtwagen van de eerste FH-generatie',
        },
    },
    {
        id: 'volvo-fh16',
        model: 'Volvo FH16',
        generation: 'Het zware FH-vlaggenschip',
        startYear: 1993,
        tagline: 'Maximale kracht voor uitzonderlijk werk',
        description:
            'De FH16 groeide uit tot Volvo’s krachtigste FH voor zwaar transport en veeleisende lange afstanden.',
        specifications: [
            { label: 'Motor', value: 'Volvo 16-liter diesel' },
            { label: 'Cilinders', value: '6 in lijn' },
            { label: 'Toepassing', value: 'Zwaar transport' },
            { label: 'Introductie', value: '1993' },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Volvo FH16 vrachtwagen voor zwaar transport',
        },
    },
    {
        id: 'volvo-fh-aero',
        model: 'Volvo FH Aero',
        generation: 'De aerodynamische FH',
        startYear: 2024,
        tagline: 'Efficiëntie krijgt een nieuw profiel',
        description:
            'De FH Aero bouwt voort op de FH-serie met een verlengde, gestroomlijnde cabine voor efficiënter transport.',
        specifications: [
            { label: 'Aandrijving', value: 'Diesel, gas of elektrisch' },
            { label: 'Cabine', value: 'Aerodynamisch verlengd' },
            { label: 'Toepassing', value: 'Langeafstandstransport' },
            { label: 'Introductie', value: '2024' },
        ],
        image: {
            src: '/images/trucks/placeholder-truck.svg',
            alt: 'Moderne Volvo FH Aero vrachtwagen met gestroomlijnde cabine',
        },
    },
];
