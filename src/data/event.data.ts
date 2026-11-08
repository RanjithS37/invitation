const photoshootTwo = new URL('../assets/pic/photoshoot_2.png', import.meta.url).href
const soloPreetha = new URL('../assets/pic/solo_preetha.JPG', import.meta.url).href
const soloVijay = new URL('../assets/pic/solo_vijay.JPG', import.meta.url).href
const ring = new URL('../assets/pic/ring.JPG', import.meta.url).href
const ringPlate = new URL('../assets/pic/ring_plate.JPG', import.meta.url).href
const cakeCut = new URL('../assets/pic/cake_cut.JPG', import.meta.url).href

export const celebrationMoments = [
  'With joy in our hearts and gratitude in our souls, we invite you to witness the beginning of a beautiful new chapter.',
  'We are delighted to celebrate our marriage and reception surrounded by the blessings and love of family and friends.',
  'Your presence will make this moment truly memorable as we begin this extraordinary journey together.',
] as const

export const galleryItems = [
  {
    id: 'gallery-1',
    src: photoshootTwo,
    alt: 'Couple photoshoot moment',
  },
  {
    id: 'gallery-2',
    src: soloPreetha,
    alt: 'Preetha portrait',
  },
  {
    id: 'gallery-3',
    src: soloVijay,
    alt: 'Vijayaprathap portrait',
  },
  {
    id: 'gallery-4',
    src: ring,
    alt: 'Wedding ring closeup',
  },
  {
    id: 'gallery-5',
    src: ringPlate,
    alt: 'Wedding ring plate moment',
  },
  {
    id: 'gallery-6',
    src: cakeCut,
    alt: 'Cake cutting moment',
  },
] as const
