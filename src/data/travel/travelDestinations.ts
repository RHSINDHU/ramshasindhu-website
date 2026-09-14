export interface TravelDestination {
  id: string;
  location: string;
  country: string;
  year: string;
  heroImageKey: string;
  story: string;
  observation: string;
  galleryImageKeys: string[];
  isPlaceholder: boolean;
  mapPosition: { x: number; y: number };
}

export const travelDestinations: TravelDestination[] = [
  {
    id: 'dest01',
    location: 'Add Location',
    country: 'Add Country',
    year: '20XX',
    heroImageKey: 'travelDest1Hero',
    story: 'Add your travel story here. Describe the journey, what brought you here, and what made this place memorable.',
    observation: 'Add your personal observation here. What did this place teach you? How did it change your perspective?',
    galleryImageKeys: ['travelDest1Gallery1', 'travelDest1Gallery2', 'travelDest1Gallery3'],
    isPlaceholder: true,
    mapPosition: { x: 52, y: 38 },
  },
  {
    id: 'dest02',
    location: 'Add Location',
    country: 'Add Country',
    year: '20XX',
    heroImageKey: 'travelDest2Hero',
    story: 'Add your travel story here. Describe the journey, what brought you here, and what made this place memorable.',
    observation: 'Add your personal observation here. What did this place teach you? How did it change your perspective?',
    galleryImageKeys: ['travelDest2Gallery1', 'travelDest2Gallery2', 'travelDest2Gallery3'],
    isPlaceholder: true,
    mapPosition: { x: 82, y: 42 },
  },
  {
    id: 'dest03',
    location: 'Add Location',
    country: 'Add Country',
    year: '20XX',
    heroImageKey: 'travelDest3Hero',
    story: 'Add your travel story here. Describe the journey, what brought you here, and what made this place memorable.',
    observation: 'Add your personal observation here. What did this place teach you? How did it change your perspective?',
    galleryImageKeys: ['travelDest3Gallery1', 'travelDest3Gallery2', 'travelDest3Gallery3'],
    isPlaceholder: true,
    mapPosition: { x: 47, y: 22 },
  },
  {
    id: 'dest04',
    location: 'Add Location',
    country: 'Add Country',
    year: '20XX',
    heroImageKey: 'travelDest4Hero',
    story: 'Add your travel story here. Describe the journey, what brought you here, and what made this place memorable.',
    observation: 'Add your personal observation here. What did this place teach you? How did it change your perspective?',
    galleryImageKeys: ['travelDest4Gallery1', 'travelDest4Gallery2', 'travelDest4Gallery3'],
    isPlaceholder: true,
    mapPosition: { x: 28, y: 58 },
  },
];

export const horizontalScrollImageKeys: string[] = [
  'travelHScroll1',
  'travelHScroll2',
  'travelHScroll3',
  'travelHScroll4',
  'travelHScroll5',
  'travelHScroll6',
];

export const travelPageHeading = {
  title: 'Places That Changed My Perspective',
  heroHeadline: 'The World, One Place at a Time.',
  heroSupporting: 'Places, moments and perspectives collected along the way.',
};
