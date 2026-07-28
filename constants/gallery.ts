export type GalleryItem = {
  id: string;
  source: number;
  title: string;
  caption: string;
  /** width / height of the source image */
  aspectRatio: number;
};

/**
 * Ordered as a story: community drive → haul → warehouse → sorting → testing → repair.
 * Aspect ratios match the source files so the masonry grid can pack tightly.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: '3896',
    source: require('../assets/gallery/IMG_3896.jpg'),
    title: 'Drive day, ready to go',
    caption:
      'Boxes out, signage up—our Johns Creek High School collection is open for Computers for Kids donations.',
    aspectRatio: 4032 / 3024,
  },
  {
    id: '3903',
    source: require('../assets/gallery/IMG_3903.jpg'),
    title: 'Incoming monitors',
    caption: 'Rishi Pai carrying donated screens to the Gaylord bins as neighbors drop off tech.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '3904',
    source: require('../assets/gallery/IMG_3904.jpg'),
    title: 'Every screen counts',
    caption: 'Another monitor headed for sorting—small trips that keep landfills a little emptier.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '2389',
    source: require('../assets/gallery/IMG_2389.jpg'),
    title: 'A full haul',
    caption: 'Rishi Pai and Tim with boxes packed full of monitors and hardware after a strong drive.',
    aspectRatio: 1536 / 2048,
  },
  {
    id: '2923',
    source: require('../assets/gallery/IMG_2923.jpg'),
    title: 'Desktop intake',
    caption: 'Packing donated towers carefully so nothing gets lost between the curb and the warehouse.',
    aspectRatio: 1536 / 2048,
  },
  {
    id: '6068',
    source: require('../assets/gallery/IMG_6068.jpg'),
    title: 'Printers & more',
    caption: 'Printers, monitors, and towers staged for pickup—proof of what a community can divert in one afternoon.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '6069',
    source: require('../assets/gallery/IMG_6069.jpg'),
    title: 'Sorted by type',
    caption: 'Laptops, tablets, and keyboards lined up in bins—ready for the next stage of processing.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '8152',
    source: require('../assets/gallery/IMG_8152.jpg'),
    title: 'Inside the warehouse',
    caption: 'Rishi Pai on the floor among pallets of collected machines—where the real work continues.',
    aspectRatio: 4032 / 3024,
  },
  {
    id: '8150',
    source: require('../assets/gallery/IMG_8150.jpg'),
    title: 'Pallets of potential',
    caption: 'Desktop towers and monitors stacked high, waiting to be tested, refurbished, or recycled.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '8151',
    source: require('../assets/gallery/IMG_8151.jpg'),
    title: 'Shelf to ceiling',
    caption: 'Industrial racks filled with intake boxes—the quiet scale behind every successful drive.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '6732',
    source: require('../assets/gallery/IMG_6732.jpg'),
    title: 'Bin by bin',
    caption: 'Sorting a fresh batch of devices so each item gets the right next step.',
    aspectRatio: 2268 / 4032,
  },
  {
    id: '8149',
    source: require('../assets/gallery/IMG_8149.jpg'),
    title: 'Laptops & drives',
    caption: 'Hard drives lined up, laptops tagged—diagnosing what can boot again and what needs recycling.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '8157',
    source: require('../assets/gallery/IMG_8157.jpg'),
    title: 'Floor-level sorting',
    caption: 'Building stacks of donated laptops while the forklift waits for the next pallet move.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '8162',
    source: require('../assets/gallery/IMG_8162.jpg'),
    title: 'Bench check',
    caption: 'Hands on a Dell at the wire rack—testing donated machines one keyboard at a time.',
    aspectRatio: 4032 / 3024,
  },
  {
    id: '8163',
    source: require('../assets/gallery/IMG_8163.jpg'),
    title: 'Notes that matter',
    caption: 'Labeling results as diagnostics run—so nothing gets lost in the refurb pipeline.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '8167',
    source: require('../assets/gallery/IMG_8167.jpg'),
    title: 'Catalog & configure',
    caption: 'Specs in one hand, laptop in the other—matching each device to its second-life plan.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '8169',
    source: require('../assets/gallery/IMG_8169.jpg'),
    title: 'Parts with purpose',
    caption: 'Labeled bins of RAM and boards nearby while a machine gets a closer look.',
    aspectRatio: 4032 / 3024,
  },
  {
    id: '8173',
    source: require('../assets/gallery/IMG_8173.jpg'),
    title: 'Component check',
    caption: 'Inspecting a module before it goes back into circulation—or into responsible recycling.',
    aspectRatio: 4032 / 3024,
  },
  {
    id: '8174',
    source: require('../assets/gallery/IMG_8174.jpg'),
    title: 'Careful teardown',
    caption: 'Power driver out—opening a chassis the right way so reusable parts stay intact.',
    aspectRatio: 4032 / 3024,
  },
  {
    id: '8176',
    source: require('../assets/gallery/IMG_8176.jpg'),
    title: 'Under the hood',
    caption: 'Screw by screw, opening donated laptops to see what can still serve someone else.',
    aspectRatio: 4032 / 3024,
  },
  {
    id: '8178',
    source: require('../assets/gallery/IMG_8178.jpg'),
    title: 'Inside the machine',
    caption: 'RAM, fans, and ribbon cables—the quiet work of giving hardware another chance.',
    aspectRatio: 3024 / 4032,
  },
  {
    id: '8179',
    source: require('../assets/gallery/IMG_8179.jpg'),
    title: 'Clean wipe, then reuse',
    caption: 'Professional disk tools on screen—protecting donor data before devices move on.',
    aspectRatio: 4032 / 3024,
  },
];
