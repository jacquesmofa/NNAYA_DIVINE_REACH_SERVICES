// NDRS Food Security: the home-page case for funders and partners (real photos from the NDRS food drive).
const C = 'https://res.cloudinary.com/hxhakwbe/image/upload/';
const img = (path: string, w: number, h: number) => `${C}f_auto,q_auto,c_fill,g_auto,w_${w},h_${h}/${path}`;

const PHOTOS = {
  lead: 'v1794348730/WhatsApp_Image_2026-11-08_at_19.01.58_1_nagkc4.jpg',
  a: 'v1794348731/WhatsApp_Image_2026-11-08_at_19.01.58_nfmudk.jpg',
  b: 'v1794348731/WhatsApp_Image_2026-11-08_at_19.01.58_3_pcgfoy.jpg',
  c: 'v1794348731/WhatsApp_Image_2026-11-08_at_19.01.58_2_omap8j.jpg',
  d: 'v1794348730/WhatsApp_Image_2026-11-08_at_19.01.57_nxzlbi.jpg',
};

const steps = [
  { t: 'Gather', d: 'Fresh produce and staples arrive through community donations, partners and purchasing, with priority on the foods our families know and cook.' },
  { t: 'Prepare', d: 'Volunteers sort crates, pack bags and prepare our hot lunches so every serving is safe, generous and nourishing.' },
  { t: 'Share', d: 'Youth, seniors, families and newcomers receive food in a warm, judgement-free setting, alongside a hot meal and conversation.' },
  { t: 'Stay connected', d: 'Every visit links people to our skills training, job search support, wellness and Igbo Roots & Generations programs.' },
];

const fund = [
  'Fresh vegetables, fruit and culturally familiar staples for the food drive',
  'Ingredients and supplies for community hot lunches',
  'Storage, transport and delivery to seniors and families with limited mobility',
  'Volunteer coordination and food-safety training',
];

const promises = [
  'Regular updates on people served and food shared',
  'Photos and stories from the programs you fund',
  'Financial reporting and receipts on request',
  'Recognition at NDRS events and on our channels',
];

export default function FoodSecurity() {
  return (
    <section className="food" id="food-security" aria-labelledby="food-title">
      <div className="food-inner">
        <header className="food-head" data-reveal>
          <p className="stamp">04b — Food security · For funders &amp; partners</p>
          <h2 id="food-title">No neighbour should face <em className="accent">an empty plate.</em></h2>
          <p className="sub">Through our food drive and community hot lunches, Nnaya Divine Reach Services puts fresh, nourishing food into the hands of youth, seniors, families and newcomers in Brampton. Food is where trust begins: it is how people first walk through our doors, and how we connect them to everything that helps them move forward.</p>
        </header>

        <div className="food-gallery" data-reveal>
          <img className="g-lead" src={img(PHOTOS.lead, 1200, 900)} width={1200} height={900} loading="lazy" decoding="async" alt="Crates of fresh produce ready for the NDRS food drive" />
          <img src={img(PHOTOS.a, 600, 600)} width={600} height={600} loading="lazy" decoding="async" alt="Fresh tomatoes and vegetables for families" />
          <img src={img(PHOTOS.b, 600, 600)} width={600} height={600} loading="lazy" decoding="async" alt="Green beans and peppers sorted into crates" />
          <img src={img(PHOTOS.c, 600, 600)} width={600} height={600} loading="lazy" decoding="async" alt="Produce prepared for distribution" />
          <img src={img(PHOTOS.d, 600, 600)} width={600} height={600} loading="lazy" decoding="async" alt="Food drive supplies ready to share" />
        </div>

        <div className="food-cols">
          <div>
            <h3 className="food-h3" data-reveal>From crate to kitchen</h3>
            <ul className="rule-list food-steps">
              {steps.map((s, i) => (
                <li key={s.t} data-reveal><span className="idx">0{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></li>
              ))}
            </ul>
          </div>
          <aside className="food-card" data-reveal>
            <h3 className="food-h3">Your grant, at work</h3>
            <ul className="food-list">{fund.map((f) => <li key={f}>{f}</li>)}</ul>
            <h3 className="food-h3 mt">What funders receive</h3>
            <ul className="food-list food-list--check">{promises.map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="btn btn-accent" href="#contact">Fund the food drive <i className="ri-arrow-right-line" /></a>
              <a className="btn btn-ghost" href="#contact">Request a funding package</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
