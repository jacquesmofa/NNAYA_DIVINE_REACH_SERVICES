const VIDEO = 'https://storage.helloreaddy.io/project_files/72257bf7-aff4-4ed6-aac2-e42d65c5ad1a/40068193-0b40-4a75-885a-d8ddea578902_scrub.mp4';
const COVER = 'https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/91ea2b91c29d5289fdac14ce3a7b029a.jpeg';

const html = (s: string) => ({ __html: s });

export default function FilmChapter() {
  return (
    <section className="chapter" data-video={VIDEO} data-label="NDRS film" style={{ ['--beat-count' as string]: 5 }}>
      <div className="stage">
        <img className="plate" src={COVER} width={1920} height={1080} fetchPriority="high" decoding="async"
          alt="A line of young women in beaded coral headdresses and printed wrappers dance across a red-earth field as a community crowd watches." />
        <div className="veil" aria-hidden="true" />
        <div className="beat" data-from="0" data-to=".2857" data-pos="bottom" data-depth="soft" data-tone="light" data-motion="track" id="overview">
          <p className="stamp">01 · Nnaya Divine Reach Services · Brampton</p>
          <h1 data-split="lines" dangerouslySetInnerHTML={html('Empowering People. Strengthening <em class="accent">Families.</em><br>Building Connected Communities.')} />
          <p className="sub">Every person deserves dignity, belonging, practical support, and an opportunity to thrive.</p>
          <div className="cta-row justify-center">
            <a className="btn btn-accent" href="#programs" data-progress=".5714">Explore Our Programs <i className="ri-arrow-right-line" /></a>
            <a className="btn btn-ghost" href="#contact">Get Support</a>
          </div>
        </div>
        <div className="veil veil-light" aria-hidden="true" />
        <div className="beat" data-from=".2857" data-to=".4286" data-pos="left" data-depth="soft" data-tone="light" data-motion="drift" id="heritage">
          <p className="stamp">02 · Cultural belonging</p>
          <h2 data-split="lines" dangerouslySetInnerHTML={html('Heritage is a<br><em class="accent">living</em> treasure.')} />
          <p className="sub">Igbo Roots &amp; Generations connects elders, parents, youth and children through language, story, music and food.</p>
          <ul className="chips" data-side="right">
            <li>Storytelling</li>
            <li>Asụsụ Igbo</li>
            <li>Music &amp; dance</li>
          </ul>
        </div>
        <div className="beat" data-from=".4286" data-to=".5714" data-pos="center" data-depth="soft" data-tone="light" data-motion="rise" id="promise">
          <p className="stamp">03 · Our promise</p>
          <h2 data-split="lines" dangerouslySetInnerHTML={html('Supporting Growth,<br>Inspiring <em class="accent">Change.</em>')} />
        </div>
        <div className="beat" data-from=".5714" data-to=".7857" data-pos="left" data-depth="soft" data-tone="light" data-motion="zoom" id="programs">
          <p className="stamp">04 · Programs &amp; community</p>
          <h2 data-split="lines" dangerouslySetInnerHTML={html('We meet people<br>where they <em class="accent">are.</em>')} />
          <ul className="points">
            <li>Food drive and hot lunches</li>
            <li>Youth mental wellness and summer camp</li>
            <li>Skills, employment readiness, first aid and CPR</li>
            <li>Senior engagement and newcomer support</li>
          </ul>
        </div>
        <div className="beat" data-from=".7857" data-to="1" data-pos="left" data-depth="soft" data-tone="light" data-motion="rise" id="support">
          <p className="stamp">05 · Get support</p>
          <h2 data-split="lines" dangerouslySetInnerHTML={html('Move forward with<br><em class="accent">confidence.</em>')} />
          <p className="sub">Tell us what support you are seeking. We will explain current programs, eligibility, availability and referrals.</p>
          <div className="cta-row">
            <a className="btn btn-accent" href="#contact">Get Support <i className="ri-arrow-right-line" /></a>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span className="mouse" />Scroll to explore</div>
      </div>
    </section>
  );
}