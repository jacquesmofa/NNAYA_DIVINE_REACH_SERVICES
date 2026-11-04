export default function SiteFooter() {
  return (
    <footer className="px-4 md:px-[8vw] pt-20 pb-10" style={{ background: 'color-mix(in srgb, var(--bg) 70%, black)', borderTop: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)' }}>
      <p className="text-3xl md:text-5xl font-semibold tracking-tight max-w-[18ch] mb-14" data-reveal>
        Supporting Growth, Inspiring <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: 'var(--accent)' }}>Change.</em>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div data-reveal>
          <h4 className="font-semibold mb-3">Nnaya Divine Reach Services</h4>
          <p style={{ color: 'var(--muted)' }} className="leading-relaxed">Empowering youth, seniors, families, newcomers and individuals through accessible, culturally responsive programs.</p>
        </div>
        <div data-reveal>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="flex flex-col gap-2">
            {[['About', '#overview'], ['Programs', '#care'], ['Igbo Roots & Generations', '#igbo-roots'], ['Get Involved', '#involved']].map(([l, h]) => (
              <li key={l}><a href={h} className="nav-link" style={{ color: 'var(--muted)' }}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <h4 className="font-semibold mb-3">Contact</h4>
          {/* CONTENT: confirm with client before launch */}
          <ul className="flex flex-col gap-2" style={{ color: 'var(--muted)' }}>
            <li>Brampton, Ontario</li><li>[Telephone: to be added]</li><li>[Email: to be added]</li><li>[Social media: approved links]</li>
          </ul>
        </div>
        <div data-reveal>
          <h4 className="font-semibold mb-3">Policies</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#contact" className="nav-link" style={{ color: 'var(--muted)' }}>Privacy</a></li>
            <li><a href="#contact" className="nav-link" style={{ color: 'var(--muted)' }}>Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs" style={{ color: 'var(--muted)', borderTop: '1px solid color-mix(in srgb, var(--text) 10%, transparent)' }}>
        <span>© Nnaya Divine Reach Services. All rights reserved.</span>
        <span>[Registered charity number: to be added if applicable]</span>
      </div>
    </footer>
  );
}