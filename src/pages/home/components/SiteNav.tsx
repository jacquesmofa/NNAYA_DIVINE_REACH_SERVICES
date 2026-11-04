import { useState } from 'react';

const links = [
  { label: 'About', href: '#overview', progress: '0' },
  { label: 'Heritage', href: '#heritage', progress: '.2857' },
  { label: 'Programs', href: '#programs', progress: '.5714' },
  { label: 'Igbo Roots', href: '#igbo-roots' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <nav aria-label="Main" className="flex items-center justify-between px-4 md:px-10 h-16 md:h-20">
        <a href="#overview" data-progress="0" className="flex items-center gap-3 cursor-pointer" aria-label="NDRS home">
          <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: '1px solid var(--accent)' }}>
            <i className="ri-sun-line text-lg" style={{ color: 'var(--accent)' }} />
          </span>
          <span className="leading-tight">
            <span className="block font-semibold tracking-wide text-sm md:text-base">NDRS</span>
            <span className="hidden sm:block text-[11px]" style={{ color: 'var(--muted)' }}>Nnaya Divine Reach Services</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.label} href={l.href} data-progress={l.progress} className="nav-link cursor-pointer">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-ghost hidden md:inline-flex !py-2.5 !px-4 !text-sm">Get Support</a>
          {/* TODO: connect secure donation link */}
          <a href="#donate" className="btn btn-accent !py-2.5 !px-4 !text-sm">Donate</a>
          <button type="button" className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden px-4 pb-6 flex flex-col gap-4" style={{ background: 'var(--bg)' }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="nav-link py-1 text-base">{l.label}</a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-ghost flex-1 justify-center">Get Support</a>
            <a href="#donate" onClick={() => setOpen(false)} className="btn btn-accent flex-1 justify-center">Donate</a>
          </div>
        </div>
      )}
    </header>
  );
}