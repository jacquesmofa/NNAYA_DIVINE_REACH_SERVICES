import { useEffect, useState } from 'react';
import { CONTACT } from '../../../lib/contact';

const links = [
  { label: 'About', href: '#overview', progress: '0' },
  { label: 'Heritage', href: '#heritage', progress: '.2857' },
  { label: 'Programs', href: '#programs', progress: '.5714' },
  { label: 'Igbo Roots', href: '#igbo-roots' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <>
    <header className="nav" style={open ? { background: 'var(--bg)', backdropFilter: 'none' } : undefined}>
      <nav aria-label="Main" className="flex items-center justify-between px-4 md:px-10 h-16 md:h-20">
        <a href="#overview" data-progress="0" onClick={() => setOpen(false)} className="flex items-center gap-3 cursor-pointer" aria-label="NDRS home">
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
          <a href="#contact" className="btn btn-ghost max-md:!hidden !py-2.5 !px-4 !text-sm">Get Support</a>
          <a href="#donate" onClick={() => setOpen(false)} className="btn btn-accent !py-2.5 !px-4 !text-sm">Donate</a>
          <button type="button" className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} />
          </button>
        </div>
      </nav>
    </header>
      {/* Phone menu: a full-screen panel outside the header (the header's blur would trap a
          fixed panel inside its own bar), on a solid background so the page never shows through. */}
      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 bottom-0 top-16 md:top-20 z-[49] overflow-y-auto px-6 pt-6 pb-10 flex flex-col" style={{ background: 'var(--bg)' }}>
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-4 text-2xl font-semibold tracking-tight" style={{ color: 'var(--text)', borderBottom: '1px solid color-mix(in srgb, var(--text) 12%, transparent)' }}>{l.label}</a>
            ))}
          </nav>
          <div className="flex gap-3 pt-8">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-ghost flex-1 justify-center">Get Support</a>
            <a href="#donate" onClick={() => setOpen(false)} className="btn btn-accent flex-1 justify-center">Donate</a>
          </div>
          <div className="mt-auto pt-10 flex flex-col gap-2 text-sm" style={{ color: 'var(--muted)' }}>
            <a href={CONTACT.phones[0].href} className="inline-flex items-center gap-2"><i className="ri-phone-line" style={{ color: 'var(--accent)' }} aria-hidden="true" />{CONTACT.phones[0].label}</a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 break-all"><i className="ri-mail-line" style={{ color: 'var(--accent)' }} aria-hidden="true" />{CONTACT.email}</a>
          </div>
        </div>
      )}
    </>
  );
}