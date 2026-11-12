/**
 * Nnaya Divine Reach Services contact details (from the client, 11 Nov 2026).
 * Used everywhere on the site: change them here only.
 */
export const CONTACT = {
  email: 'nnayadivinereachservices@gmail.com',
  phones: [
    { label: '(647) 657-8716', href: 'tel:+16476578716', note: '' },
    { label: '0803 061 5142', href: 'tel:+2348030615142', note: 'Nigeria' },
  ],
  address: {
    street: '101 West Drive, Unit 7',
    city: 'Brampton',
    region: 'ON',
    postalCode: 'L6T 2J6',
    country: 'CA',
  },
};

export const ADDRESS_LINES = [CONTACT.address.street, `${CONTACT.address.city}, ${CONTACT.address.region} ${CONTACT.address.postalCode}`];
export const ADDRESS_ONE_LINE = ADDRESS_LINES.join(', ');
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_ONE_LINE)}`;

/**
 * Web3Forms access key for nnayadivinereachservices@gmail.com (free: web3forms.com → enter
 * the email → the key arrives in that inbox). While it is empty, the contact form opens the
 * visitor's email app with the message ready to send, so no message is ever lost.
 */
export const WEB3FORMS_KEY = '';
