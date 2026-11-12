
## Food pantry / food bank section for funders (11 Nov 2026)
- The "What funders receive" list states reporting commitments (updates, photos, financial reports on request, recognition). Confirm the organization is happy to offer these.
- Funding-package button opens an email: make sure a short funding package (PDF) is ready to send back.

## Share previews (11 Nov 2026)
- [x] Live address is https://nnayadivinereachservices.com (from the FTP account, 11 Nov). ndrs.ca is not on HostGator: if the client owns it, redirect it here.
- [ ] The share card `public/social/home.jpg` is a designed brand card. Replace with a real NDRS photo the client owns (several photos in `Images/` carry other people's watermarks or look AI-generated, so they were not used).
- [ ] Hero cover image is still hosted on static.readdy.ai (`FilmChapter.tsx`): move it to Cloudinary or the repo.

## Contact details (11 Nov 2026, from the client)
- [x] Email nnayadivinereachservices@gmail.com, phones (647) 657-8716 and 0803 061 5142 (Nigeria), address 101 West Drive, Unit 7, Brampton, ON L6T 2J6: in `src/lib/contact.ts`, used in the contact section, footer, phone menu, donate section and Google structured data.
- [x] Web3Forms key for nnayadivinereachservices@gmail.com added 12 Nov 2026 (`WEB3FORMS_KEY` in `src/lib/contact.ts`): the contact form sends straight to that inbox.
- [ ] Office hours, social media links, registered charity number and tax-receipt details: removed from view until confirmed (they showed as "[to be added]").
- [ ] Online donation link: the Donate button opens an email to NDRS until a donation page exists.
