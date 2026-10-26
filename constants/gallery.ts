export type GalleryItem = {
  id: string;
  source: number;
  title: string;
  caption: string;
  /** width / height of the source image */
  aspectRatio: number;
};

/**
 * Mixed story: drives, donors, haul details, warehouse, and workshop—
 * new and older shots interleaved so similar scenes don't clump.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: '3896',
    source: require('../assets/gallery/IMG_3896.jpg'),
    title: 'Drive day, ready to go',
    caption:
      'Empty Gaylords and a Computers for Kids sign—Johns Creek High School opens for drop-offs.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '7',
    source: require('../assets/gallery/7.jpg'),
    title: 'Mission accomplished',
    caption:
      'Rishi Pai and Tim posing with MONITORS boxes packed after a busy school collection.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9',
    source: require('../assets/gallery/9.jpg'),
    title: 'Trunk-side handoff',
    caption:
      'A donor meets us at the curb—tower units and a bin of cables leave the car for a second life.',
    aspectRatio: 1200 / 1600
  },
  {
    id: '3903',
    source: require('../assets/gallery/IMG_3903.jpg'),
    title: 'Incoming monitors',
    caption: 'Rishi Pai shuttling flat panels across the courtyard as the bins start to fill.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9618',
    source: require('../assets/gallery/IMG_9618.jpg'),
    title: 'Cable box #26',
    caption:
      'A Kirkland box stuffed with power cords and AV leads—small parts that add up fast.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '3904',
    source: require('../assets/gallery/IMG_3904.jpg'),
    title: 'One more trip',
    caption: 'Arms full again—each walk from donor to bin keeps another screen out of the landfill.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9632',
    source: require('../assets/gallery/IMG_9632.jpg'),
    title: 'Phones & connectors',
    caption:
      'Sorting a cordless handset and yellow-tipped AV cables at Door 1 of the high school.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '2923',
    source: require('../assets/gallery/IMG_2923.jpg'),
    title: 'Desktop intake',
    caption: 'Nesting donated towers into a shipping carton so the haul travels safely.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9653',
    source: require('../assets/gallery/IMG_9653.jpg'),
    title: 'Bench inventory',
    caption:
      'Laptop on the lap, keyboard in the box—logging peripherals before they leave the plaza.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '6068',
    source: require('../assets/gallery/IMG_6068.jpg'),
    title: 'Printers & more',
    caption: 'HP printers and towers lined along the brick wall—an afternoon’s worth of diversion.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9658',
    source: require('../assets/gallery/IMG_9658.jpg'),
    title: 'Retro Apple find',
    caption:
      'A translucent Apple Studio Display CRT—classic hardware waiting for careful processing.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '6069',
    source: require('../assets/gallery/IMG_6069.jpg'),
    title: 'Sorted by type',
    caption: 'Laptops, tablets, and keyboards staged in separate totes for the next stop.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9662',
    source: require('../assets/gallery/IMG_9662.jpg'),
    title: 'Cube in the mix',
    caption:
      'A Power Mac G4 Cube nestled with beige towers—vintage machines still worth rescuing.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '2389',
    source: require('../assets/gallery/IMG_2389.jpg'),
    title: 'Armstrong boxes full',
    caption:
      'Three relocation bins stacked with monitors and cord nests after a strong outdoor haul.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '8152',
    source: require('../assets/gallery/IMG_8152.jpg'),
    title: 'Warehouse floor',
    caption: 'Rishi Pai among the pallets—where drive-day donations become inventory.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '9663',
    source: require('../assets/gallery/IMG_9663.jpg'),
    title: 'Toaster to tower',
    caption:
      'Speaker stands, a toaster, and set-top boxes share a bin—household tech in every shape.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8150',
    source: require('../assets/gallery/IMG_8150.jpg'),
    title: 'Pallets of potential',
    caption: 'Desktop stacks topped with an iMac—ready for testing, reuse, or recycle.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9664',
    source: require('../assets/gallery/IMG_9664.jpg'),
    title: 'Cord mountain',
    caption:
      'Mice, remotes, and a nest of adapters—proof that chargers deserve their own recovery lane.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8151',
    source: require('../assets/gallery/IMG_8151.jpg'),
    title: 'Shelf to ceiling',
    caption: 'Industrial racks holding intake boxes—the quiet backlog behind every drive.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9665',
    source: require('../assets/gallery/IMG_9665.jpg'),
    title: 'Phones in the mix',
    caption:
      'Flip phones and smartphones beside a portable AC carton—small devices, big diversion.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '6732',
    source: require('../assets/gallery/IMG_6732.jpg'),
    title: 'Bin by bin',
    caption: 'Purple tote, blue tote—sorting intake so each item gets the right next step.',
    aspectRatio: 900 / 1600,
  },
  {
    id: '9666',
    source: require('../assets/gallery/IMG_9666.jpg'),
    title: 'Print shop leftovers',
    caption: 'Canon and Epson printers piled high—office gear that rarely belongs in trash.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8149',
    source: require('../assets/gallery/IMG_8149.jpg'),
    title: 'Laptops & drives',
    caption: 'Hard-drive rows and sticky-noted machines—“does not boot” still gets a second look.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9667',
    source: require('../assets/gallery/IMG_9667.jpg'),
    title: 'Laptop cascade',
    caption: 'Dell and Lenovo lids stacked in a Gaylord—portable computers ready for triage.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8157',
    source: require('../assets/gallery/IMG_8157.jpg'),
    title: 'Floor-level sorting',
    caption: 'Building laptop stacks while the forklift waits for the next pallet move.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '9668',
    source: require('../assets/gallery/IMG_9668.jpg'),
    title: 'Monitors & wire nests',
    caption:
      'Face-down panels beside a cord bin and an AC hose—the full spectrum of a drive day’s haul.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8162',
    source: require('../assets/gallery/IMG_8162.jpg'),
    title: 'Bench check',
    caption: 'Hands on a Dell at the wire rack—testing donated machines one keyboard at a time.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '8163',
    source: require('../assets/gallery/IMG_8163.jpg'),
    title: 'Notes that matter',
    caption: 'Pen on a sticky note while diagnostics run—so results stay attached to the device.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8167',
    source: require('../assets/gallery/IMG_8167.jpg'),
    title: 'Catalog & configure',
    caption: 'Spec sheet in one hand, laptop in the other—matching gear to its second-life plan.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8169',
    source: require('../assets/gallery/IMG_8169.jpg'),
    title: 'Parts with purpose',
    caption: 'Labeled RAM bins overhead while a chassis gets a closer look on the bench.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '8173',
    source: require('../assets/gallery/IMG_8173.jpg'),
    title: 'Component check',
    caption: 'Holding a module up to the light before it returns to service—or to recycle.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '8174',
    source: require('../assets/gallery/IMG_8174.jpg'),
    title: 'Careful teardown',
    caption: 'Cordless driver out—opening a laptop the right way so reusable parts stay intact.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '8176',
    source: require('../assets/gallery/IMG_8176.jpg'),
    title: 'Under the hood',
    caption: 'Screw by screw into an open chassis—finding what can still serve someone else.',
    aspectRatio: 1600 / 1200,
  },
  {
    id: '8178',
    source: require('../assets/gallery/IMG_8178.jpg'),
    title: 'Inside the machine',
    caption: 'Green RAM stick seated, fan nearby—quiet work that turns “broken” into usable.',
    aspectRatio: 1200 / 1600,
  },
  {
    id: '8179',
    source: require('../assets/gallery/IMG_8179.jpg'),
    title: 'Clean wipe, then reuse',
    caption: 'Parted Magic on screen—protecting donor data before any device moves on.',
    aspectRatio: 1600 / 1200,
  },
];
