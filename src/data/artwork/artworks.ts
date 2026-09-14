export interface ArtworkItem {
  id: string;
  title: string;
  year: number;
  medium: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const artworks: ArtworkItem[] = [
  {
    id: 'placeholder-1',
    title: 'Artwork Title',
    year: 2024,
    medium: 'Oil on Canvas',
    description: 'A brief description of the artwork will appear here.',
    imageUrl: '/images/artwork/placeholder-1.svg',
    tags: ['painting', 'abstract'],
  },
];
