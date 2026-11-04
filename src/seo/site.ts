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

/** Square, text-free brand mark used for share previews and app icons. */
export const BRAND_ICON =
  'https://readdy.ai/api/search-image?query=Flat%20minimal%20app%20icon%2C%20solid%20deep%20chocolate%20brown%20square%20background%2C%20a%20simple%20bold%20burnt%20orange%20rising%20sun%20circle%20above%20two%20cream%20curved%20open%20hands%20forming%20a%20reach%2C%20centered%20composition%20with%20generous%20empty%20margin%2C%20crisp%20clean%20vector%20edges%2C%20no%20text%2C%20no%20letters%2C%20no%20gradient%2C%20high%20contrast&width=512&height=512&seq=ndrs-app-icon-01&orientation=squarish';

/** 1200 x 630 Open Graph / Twitter share card for the home page. */
export const OG_HOME_IMAGE =
  'https://readdy.ai/api/search-image?query=Warm%20cinematic%20editorial%20photograph%20of%20a%20multigenerational%20Black%20family%2C%20grandmother%2C%20parents%20and%20children%20laughing%20together%20in%20golden%20late%20afternoon%20light%20on%20a%20Brampton%20porch%2C%20deep%20brown%20and%20terracotta%20tones%2C%20soft%20shadows%2C%20calm%20darker%20right%20third%20of%20the%20frame%20kept%20free%20for%20a%20title&width=1200&height=630&seq=ndrs-og-home-01&orientation=landscape';

export const OG_HOME_ALT =
  'A multigenerational Black family laughing together in golden light on a Brampton porch';

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