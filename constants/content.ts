export const site = {
  name: 'Junkture e-Waste Inc.',
  shortName: 'Junkture e-Waste',
  tagline: 'Reviving Tech, Restoring the Planet',
  location: 'Johns Creek, GA · Metro Atlanta',
  email: 'pai.rishi0709@gmail.com',
  year: 2026,
  /** Zero-width non-joiner keeps fonts from turning "(c)" into © */
  nonprofitStatus: '501(c\u200c)(3)',
};

export const home = {
  heroSupport:
    'A Metro Atlanta nonprofit giving electronics a second life—keeping them out of landfills and into the hands of people who need them.',
  crisisLead: 'Over 62 million tons of electronic waste is produced annually.',
  crisisBody:
    'and only 22% of it is properly dealt with. Every year, millions of electronics are discarded, yet 70–80% still contain reusable parts. When repaired or refurbished, they can drastically reduce environmental impact—extending a device’s life by just one year cuts its footprint by up to 30%. Meanwhile, millions of children worldwide are exposed to toxic e-waste from unsafe disposal methods.',
  crisisClose:
    'At Junkture e-Waste, we combat this crisis by giving old electronics a second life—keeping them out of landfills and putting them into the hands of people who need them.',
  missionEyebrow: 'Our Mission',
  missionTitle: 'For people, for planet, and for good.',
  missionBody:
    `Junkture e-Waste Inc. is a ${site.nonprofitStatus} nonprofit organization in Metro Atlanta that empowers communities to responsibly recycle and reconnect with technology, diverting e-waste from landfills and giving electronics a second life for a more sustainable future.`,
};

export const stats = [
  {
    value: 3410,
    prefix: '',
    suffix: '+',
    label: 'electronics diverted from landfills',
    detail: 'Thousands of electronics collected and kept out of the waste stream.',
  },
  {
    value: 41400,
    prefix: '$',
    suffix: '',
    label: 'estimated donation value',
    detail: "We've reclaimed thousands in electronics that would've gone to waste.",
  },
  {
    value: 741,
    prefix: '',
    suffix: '',
    label: 'chargers and cables saved',
    detail: "That's a huge reduction in clutter and plastic waste for the environment.",
  },
];

export const about = {
  welcome: 'Welcome to Junkture e-Waste.',
  headline: "We don't just recycle electronics. We rebuild futures.",
  belief:
    'At Junkture e-Waste, we believe that no device should die in a landfill when it can power a future.',
  body: [
    'Based in Johns Creek, GA (North Atlanta), we are a nonprofit organization dedicated to collecting electronic waste (e-waste) and giving it a second life. Through community drives and donations, we gather everything from cables and printers to laptops and tablets—whether working or not.',
    'What sets us apart is our hands-on approach: we help refurbish devices manually, working alongside skilled volunteers and local partners to ensure each item is tested, repaired, and restored. Devices that can’t be saved are responsibly recycled, keeping toxic waste out of our environment.',
    'Refurbished tech is then distributed to underserved communities, bridging the digital divide and giving students, families, and job seekers access to tools they need to thrive.',
  ],
  closing:
    "Together, we're reducing e-waste, promoting sustainability, and creating access to technology. We're reviving tech and restoring the future.",
  whyTitle: 'Why Junkture e-Waste',
  whyBody:
    "At Junkture e-Waste, we're taking electronic junk and turning it into treasure. We're finding the unity between unwanted electronics and restoring them for the future of others.",
  partnerTitle: 'Our Partners',
  partnerName: 'New Life Technology Group',
  partnerLocation: 'Dawsonville, Georgia',
  partnerThanks:
    'We are grateful to our partners for their help in sustaining the mission of Junkture e-Waste and their dedication to serving communities across the United States.',
};

export const galleryIntro = {
  title: 'Moments from the mission',
  body: 'From community drives to the workshop floor—a look at how Junkture e-Waste collects, sorts, and restores tech.',
};

export const join = {
  eyebrow: 'Get involved',
  title: 'Join us',
  body: 'Whether you want to donate electronics, volunteer at a drive, partner with us, or just say hello—we’d love to hear from you.',
  contactTitle: 'Contact',
  ways: [
    {
      label: 'Email',
      value: 'pai.rishi0709@gmail.com',
      href: 'mailto:pai.rishi0709@gmail.com' as string | undefined,
    },
    {
      label: 'Based in',
      value: 'Johns Creek, GA · Metro Atlanta',
      href: undefined as string | undefined,
    },
    {
      label: 'Organization',
      value: `Junkture e-Waste Inc. · ${site.nonprofitStatus}`,
      href: undefined as string | undefined,
    },
  ],
  invite:
    'Bring your old devices to a community drive, spread the word, or reach out if you want to help rebuild futures—one piece of tech at a time.',
};

