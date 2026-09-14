export interface TravelEntry {
  id: string;
  destination: string;
  country: string;
  date: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

export const travelEntries: TravelEntry[] = [
  {
    id: 'placeholder-1',
    destination: 'Destination Name',
    country: 'Country',
    date: '2024',
    description: 'A brief travel story will appear here.',
    imageUrl: '/images/travel/placeholder-1.svg',
    highlights: ['Highlight one', 'Highlight two'],
  },
];
