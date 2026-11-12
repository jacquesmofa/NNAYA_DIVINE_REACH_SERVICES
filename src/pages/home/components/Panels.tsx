import { CONTACT } from '../../../lib/contact';
const html = (s: string) => ({ __html: s });

const generations = [
  { t: 'Children and youth', d: 'Summer camp, recreation, leadership development and youth mental wellness in a safe, encouraging setting.' },
  { t: 'Seniors and older adults', d: 'Senior Breeze: active aging and belonging, with intergenerational connection at its heart.' },
  { t: 'Families and caregivers', d: 'Family wellness, food assistance and practical navigation through difficult transitions.' },
  { t: 'Newcomers and immigrants', d: 'General, referral-based settlement information and community connection — not legal advice.' },
];

export default function Panels() {
  return (
    <>
      {/* 02 — Manifesto */}
      <section className="panel manifesto" id="belief" aria-label="Our belief">
        <div className="rings" aria-hidden="true" data-parallax="0.55" />
        <span className="panel-accent" aria-hidden="true" data-parallax="0.55" style={{ right: '8vw', top: '12vh' }}>02</span>
        <p className="manifesto-text" data-words>
          A strong community is built when people of every age and background can <em className="accent">participate,</em> contribute, and be <em className="accent">heard.</em>
        </p>
      </section>

      {/* 03 — Support for every generation */}
      <section className="panel" data-side="right" id="generations">
        <img className="panel-bg" data-parallax="0.32" alt="A grandmother and young grandchildren laughing together on a sunlit porch at golden hour" width={2400} height={1350} loading="lazy" decoding="async"
          src="https://readdy.ai/api/search-image?query=Warm%20golden%20hour%20photograph%20of%20a%20Black%20grandmother%20laughing%20with%20two%20young%20grandchildren%20on%20a%20porch%2C%20main%20subject%20in%20the%20left%20third%20of%20the%20frame%2C%20the%20right%20half%20calm%20dark%20soft%20shadowed%20wall%2C%20terracotta%20and%20deep%20brown%20tones%2C%20cinematic%2C%20wide%20framing&width=2400&height=1350&seq=ndrs-gen-01&orientation=landscape" />
        <div className="panel-veil" />
        <div className="panel-copy panel-copy--list" data-parallax="-0.08">
          <p className="stamp" data-reveal>03 — Support for every generation</p>
          <h2 data-reveal dangerouslySetInnerHTML={html('Four generations,<br>one <em class="accent">welcome.</em>')} />
          <ul className="rule-list">
            {generations.map((g, i) => (
              <li key={g.t} data-reveal><span className="idx">0{i + 1}</span><h3>{g.t}</h3><p>{g.d}</p></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — Food, skills and opportunity */}
      <section className="panel" data-side="left" id="care">
        <img className="panel-bg" data-parallax="0.32" alt="Crates of fresh produce collected for the NDRS food drive" width={2400} height={1350} loading="lazy" decoding="async"
          src="https://res.cloudinary.com/hxhakwbe/image/upload/f_auto,q_auto,c_fill,g_auto,w_2400,h_1350/v1794348731/WhatsApp_Image_2026-11-08_at_19.01.58_2_omap8j.jpg" />
        <div className="panel-veil" />
        <span className="panel-accent" aria-hidden="true" data-parallax="0.55" style={{ right: '8vw', bottom: '10vh' }}>04</span>
        <div className="panel-copy" data-parallax="-0.08">
          <p className="stamp" data-reveal>04 — Food, skills &amp; opportunity</p>
          <h2 data-reveal dangerouslySetInnerHTML={html('Relief today,<br><em class="accent">pathways</em> tomorrow.')} />
          <p className="sub" data-reveal>From our food drive and hot lunches to skills training, job search support, and first aid and CPR training, our work responds to the realities people face every day.</p>
          <div className="chip-row" data-reveal>
            <span>Food drive</span><span>Hot lunch</span><span>Digital literacy</span><span>Job search</span><span>First aid &amp; CPR</span>
          </div>
        </div>
      </section>

      {/* 05 — Igbo Roots & Generations */}
      <section className="panel" data-side="bottom" id="igbo-roots">
        <img className="panel-bg" data-parallax="0.32" alt="Community members in traditional Igbo attire at an NDRS cultural celebration" width={2400} height={1350} loading="lazy" decoding="async"
          src="https://res.cloudinary.com/hxhakwbe/image/upload/f_auto,q_auto,c_fill,g_auto,w_2400,h_1350/v1793799588/WhatsApp_Image_2026-11-04_at_00.28.52_yyo1sr.jpg" />
        <div className="panel-veil" />
        <div className="panel-copy" data-parallax="-0.08">
          <p className="stamp" data-reveal>05 — An NDRS signature initiative · Proposed</p>
          <h2 data-reveal dangerouslySetInnerHTML={html('Igbo Roots &amp;<br><em class="accent">Generations.</em>')} />
          <p className="sub" data-reveal>Preserving Our Heritage, Connecting Generations, Empowering Our Future.</p>
          <div className="pull" data-reveal style={{ textAlign: 'left' }}>
            <p>Our heritage is our foundation. Our generations are our legacy. Our future is our shared responsibility.</p>
          </div>
          <a className="btn btn-accent" href="#contact" data-reveal>Express Interest <i className="ri-arrow-right-line" /></a>
        </div>
      </section>

      {/* 06 — Get involved */}
      <section className="panel" data-side="right" id="involved">
        <img className="panel-bg" data-parallax="0.32" alt="A multigenerational family walking together down a sunlit road" width={2400} height={1350} loading="lazy" decoding="async"
          src="https://readdy.ai/api/search-image?query=Multigenerational%20Black%20family%20walking%20together%20down%20a%20quiet%20tree%20lined%20road%20at%20sunset%2C%20grandfather%20with%20cane%2C%20main%20subject%20small%20in%20the%20left%20third%2C%20right%20half%20calm%20soft%20dusky%20sky%20and%20shadow%2C%20warm%20terracotta%20brown%20grade%2C%20cinematic%20wide&width=2400&height=1350&seq=ndrs-inv-01&orientation=landscape" />
        <div className="panel-veil" />
        <div className="panel-copy" data-parallax="-0.08">
          <p className="stamp" data-reveal>06 — Get involved</p>
          <h2 data-reveal dangerouslySetInnerHTML={html('Every connection<br><em class="accent">matters.</em>')} />
          <p className="sub" data-reveal>Every Opportunity Counts. Volunteer your time, partner with us, or give — every gift strengthens a neighbour&apos;s pathway toward stability.</p>
          <div className="flex flex-wrap gap-3" data-reveal>
            <a className="btn btn-ghost" href="#contact">Volunteer</a>
            <a className="btn btn-ghost" href="#contact">Partner With Us</a>
            {/* No online donation page yet: the button opens an email to NDRS about giving. */}
            <a className="btn btn-accent" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('I would like to donate')}`} id="donate">Donate <i className="ri-arrow-right-line" /></a>
          </div>
          <p className="text-sm" style={{ color: 'var(--muted)' }} data-reveal>
            To give or ask about donations, call <a className="underline" href={CONTACT.phones[0].href}>{CONTACT.phones[0].label}</a> or email <a className="underline break-all" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}