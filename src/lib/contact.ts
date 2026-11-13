/**
 * Nnaya Divine Reach Services contact details (from the client, 11 Nov 2026).
 * Used everywhere on the site: change them here only.
 */
export const CONTACT = {
  email: 'nnayadivinereachservices@gmail.com',
  phones: [
    { label: '(647) 657-8716', href: 'tel:+16476578716', note: '' },
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
 * Web3Forms access key for nnayadivinereachservices@gmail.com (public by design, safe in the
 * code; created 12 Nov 2026). To replace it: web3forms.com → enter that email → the new key
 * arrives in the inbox. If it is ever emptied, the form opens the visitor's email app instead.
 */
export const WEB3FORMS_KEY = 'a34ee435-7dce-4ef6-8cfb-b988a8039d46';
