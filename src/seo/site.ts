/**
 * Single source of truth for technical SEO values.
 *
 * CONTENT: confirm with client before launch.
 * - SITE_URL is the public domain used in canonicals, Open Graph URLs and the sitemap.
 * - No email, telephone, address or social accounts are declared because none have
 *   been supplied by NDRS. Add them here only once they are confirmed.
 */
export const SITE_URL = 'https://www.ndrs.ca';

export const SITE_NAME = 'Nnaya Divine Reach Services';
export const SHORT_NAME = 'NDRS';
export const TAGLINE = 'Supporting Growth, Inspiring Change.';

/** Brand colours used by the browser UI (tabs, Android status bar, iOS home screen). */
export const BRAND_COLOR = '#2e1b18';
export const BACKGROUND_COLOR = '#fbf7f0';

/** Square brand mark (rising sun over open hands), public/icon-512.png. */
export const BRAND_ICON = `${SITE_URL}/icon-512.png`;

/** 1200 x 630 share card for the home page, public/social/home.jpg (brand colours + tagline). */
export const OG_HOME_IMAGE = `${SITE_URL}/social/home.jpg`;

export const OG_HOME_ALT =
  'Nnaya Divine Reach Services: supporting growth, inspiring change. Food, skills, wellness and Igbo cultural programs in Brampton.';

export const ROBOTS_INDEX =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
export const ROBOTS_NOINDEX = 'noindex, follow';

export type PageMeta = {
  /** 50–60 characters, "Page Topic | SITE_NAME" */
  title: string;
  /** 140–160 characters, human sentence with a gentle call to action */
  description: string;
  /** Route path, always leading with "/" and without a trailing slash */
  path: string;
  image?: string;
  imageAlt?: string;
  robots?: string;
  type?: 'website' | 'article';
};

/** Home page metadata. */
export const HOME_META: PageMeta = {
  title: 'Nnaya Divine Reach Services | Brampton Community Support',
  description:
    'A Brampton not-for-profit supporting youth, seniors, families and newcomers with food, skills, wellness and Igbo cultural programs. Explore how we can help.',
  path: '/',
  image: OG_HOME_IMAGE,
  imageAlt: OG_HOME_ALT,
  robots: ROBOTS_INDEX,
  type: 'website',
};

/** 404 page metadata. */
export const NOT_FOUND_META: PageMeta = {
  title: 'Page Not Found | Nnaya Divine Reach Services',
  description:
    'This page could not be found. Return to the Nnaya Divine Reach Services home page to explore our community programs, support services and ways to get involved.',
  path: '/404',
  robots: ROBOTS_NOINDEX,
  type: 'website',
};

/**
 * Metadata for the remaining pages in the project plan. These entries are ready
 * and activate as soon as that route exists — nothing is added to the sitemap
 * until the page is actually published, so no broken URLs are ever declared.
 */
export const PLANNED_META: Record<string, PageMeta> = {
  about: {
    title: 'About Our Brampton Not-for-Profit | NDRS',
    description:
      'Learn who we are, what we believe and who we serve. Nnaya Divine Reach Services brings compassionate, culturally responsive support to every generation in Brampton.',
    path: '/about',
  },
  programs: {
    title: 'Community Programs and Services | NDRS Brampton',
    description:
      'Food support, youth wellness, summer camp, senior engagement, skills training, employment readiness and newcomer information. Find the right NDRS program for you.',
    path: '/programs',
  },
  'igbo-roots': {
    title: 'Igbo Roots & Generations Heritage Program | NDRS',
    description:
      'A proposed intergenerational initiative preserving Igbo language, story, music and food while connecting elders, parents, youth and children across Brampton.',
    path: '/igbo-roots',
  },
  'get-support': {
    title: 'Get Support in Brampton | Nnaya Divine Reach Services',
    description:
      'Looking for a program, community connection or practical assistance? Tell us what you need and our team will explain programs, eligibility and referrals.',
    path: '/get-support',
  },
  volunteer: {
    title: 'Volunteer With NDRS in Brampton | Get Involved',
    description:
      'Give your time to food drives, hot lunches, recreation, senior engagement, cultural events or mentoring. Apply to volunteer with Nnaya Divine Reach Services.',
    path: '/volunteer',
  },
  partner: {
    title: 'Partner With Our Community Organization | NDRS',
    description:
      'Schools, employers, cultural associations, service providers and funders: explore program sponsorship, in-kind giving, training delivery and referral partnerships.',
    path: '/partner',
  },
  donate: {
    title: 'Donate to Community Programs in Brampton | NDRS',
    description:
      'Your gift helps expand community meals, youth activities, senior engagement, employment readiness and cultural heritage programs for neighbours in Brampton.',
    path: '/donate',
  },
  impact: {
    title: 'Community Impact and Accountability | NDRS',
    description:
      'Every connection matters. See how Nnaya Divine Reach Services measures its work and shares verified results as programs develop across Brampton.',
    path: '/impact',
  },
  news: {
    title: 'News and Community Events | Nnaya Divine Reach Services',
    description:
      'Updates, events and community opportunities from Nnaya Divine Reach Services in Brampton. Check back for announcements as our programs grow.',
    path: '/news',
  },
  contact: {
    title: 'Contact Nnaya Divine Reach Services in Brampton',
    description:
      'Reach out for support, volunteering or partnership. Contact Nnaya Divine Reach Services to learn about current programs, eligibility and referrals in Brampton.',
    path: '/contact',
  },
  privacy: {
    title: 'Privacy Policy | Nnaya Divine Reach Services',
    description:
      'How Nnaya Divine Reach Services collects, uses and protects the personal information you share through our website forms and community programs.',
    path: '/privacy',
  },
  accessibility: {
    title: 'Accessibility Commitment | Nnaya Divine Reach Services',
    description:
      'Our commitment to making Nnaya Divine Reach Services programs, information and this website usable by people of all abilities across Brampton and beyond.',
    path: '/accessibility',
  },
};