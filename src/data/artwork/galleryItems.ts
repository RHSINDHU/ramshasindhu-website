export type GalleryCategory = 'Art' | 'Photography' | 'Design' | 'Creative' | 'Hobbies';

export type GallerySize = 'large' | 'portrait' | 'landscape' | 'square' | 'small';

export interface GalleryItem {
  id: string;
  imageKey: string;
  title: string;
  category: GalleryCategory;
  year: number;
  description: string;
  size: GallerySize;
  link?: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g01',
    imageKey: 'artAbstract1',
    title: 'Chromatic Drift',
    category: 'Art',
    year: 2024,
    description: 'A study in color theory and emotional response, exploring how bold pigments interact on canvas.',
    size: 'large',
    featured: true,
  },
  {
    id: 'g02',
    imageKey: 'artStreet1',
    title: 'Cyclist in Blue',
    category: 'Photography',
    year: 2023,
    description: 'Street photography capturing the energy of urban motion against a backdrop of painted doors.',
    size: 'portrait',
  },
  {
    id: 'g03',
    imageKey: 'artDesign1',
    title: 'Bulletin Board',
    category: 'Design',
    year: 2024,
    description: 'Found typography and layered posters creating an accidental composition of urban communication.',
    size: 'landscape',
  },
  {
    id: 'g04',
    imageKey: 'artPottery1',
    title: 'Hands in Clay',
    category: 'Hobbies',
    year: 2023,
    description: 'The tactile process of shaping pottery, connecting hand, material and intention.',
    size: 'square',
  },
  {
    id: 'g05',
    imageKey: 'artAbstract2',
    title: 'Primary Forces',
    category: 'Art',
    year: 2024,
    description: 'An exploration of primary colors and their energetic relationships on a single canvas.',
    size: 'landscape',
  },
  {
    id: 'g06',
    imageKey: 'artWatercolor1',
    title: 'Pastel Memory',
    category: 'Creative',
    year: 2023,
    description: 'A watercolor experiment in soft transitions and the blur between intention and accident.',
    size: 'portrait',
  },
  {
    id: 'g07',
    imageKey: 'artStreet2',
    title: 'Bogota Colors',
    category: 'Photography',
    year: 2022,
    description: 'The vibrant architecture of Bogota telling its own story through color and form.',
    size: 'portrait',
  },
  {
    id: 'g08',
    imageKey: 'artDesign2',
    title: 'Red on Blue',
    category: 'Design',
    year: 2024,
    description: 'A minimalist composition exploring the tension between two opposing colors.',
    size: 'small',
  },
  {
    id: 'g09',
    imageKey: 'artSculpture1',
    title: 'Bronze Form',
    category: 'Art',
    year: 2023,
    description: 'Abstract sculpture study examining volume, weight and the space around an object.',
    size: 'portrait',
  },
  {
    id: 'g10',
    imageKey: 'artPottery2',
    title: 'Vase Study',
    category: 'Hobbies',
    year: 2024,
    description: 'Handmade decorative vase, exploring traditional techniques and personal expression.',
    size: 'square',
  },
  {
    id: 'g11',
    imageKey: 'artAbstract3',
    title: 'Vivid Strokes',
    category: 'Art',
    year: 2024,
    description: 'Bold, expressive brushwork celebrating the physical act of painting.',
    size: 'landscape',
  },
  {
    id: 'g12',
    imageKey: 'artStreet3',
    title: 'Neon Night',
    category: 'Photography',
    year: 2023,
    description: 'London graffiti scene captured at night, where neon and street art converge.',
    size: 'portrait',
  },
  {
    id: 'g13',
    imageKey: 'artWatercolor2',
    title: 'Warm Flow',
    category: 'Creative',
    year: 2023,
    description: 'Watercolor experiment with warm tones and the unpredictability of pigment in water.',
    size: 'small',
  },
  {
    id: 'g14',
    imageKey: 'artDesign3',
    title: 'Fantasies',
    category: 'Design',
    year: 2024,
    description: 'Colorful lettering composition exploring the boundary between text and image.',
    size: 'landscape',
  },
  {
    id: 'g15',
    imageKey: 'artSculpture2',
    title: 'Black Minimal',
    category: 'Art',
    year: 2023,
    description: 'A minimalist sculpture study in black, examining form through absence of color.',
    size: 'portrait',
  },
  {
    id: 'g16',
    imageKey: 'artBrushstroke1',
    title: 'Blue Gesture',
    category: 'Creative',
    year: 2024,
    description: 'A single brushstroke capturing the essence of gesture and movement.',
    size: 'small',
  },
  {
    id: 'g17',
    imageKey: 'artAbstract4',
    title: 'Soft Spectrum',
    category: 'Art',
    year: 2024,
    description: 'Pastel abstract painting exploring gentle transitions and quiet color relationships.',
    size: 'landscape',
  },
  {
    id: 'g18',
    imageKey: 'artPottery3',
    title: 'Floral Vessels',
    category: 'Hobbies',
    year: 2023,
    description: 'Ceramic vases with hand-painted floral patterns, blending traditional and personal motifs.',
    size: 'square',
  },
];

export const galleryFilters: ('All' | GalleryCategory)[] = [
  'All',
  'Art',
  'Photography',
  'Design',
  'Creative',
  'Hobbies',
];

export const personalNote = {
  heading: 'Why I Make Things',
  body: 'Making things is how I process the world. Whether it is a painting, a photograph, a ceramic vessel or a design experiment, the act of creating is a way of paying attention. It keeps me curious, keeps me learning, and keeps me connected to the belief that creativity is not a profession — it is a way of seeing. These pages are a collection of the things I make, notice and collect along the way.',
};
