import SiteGallery from '@/components/feature/SiteGallery';

// NDRS photo gallery: real photos from src/content/gallery.json, square grid in the site's terracotta palette.
export default function GallerySection() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="px-5 md:px-10 py-20 md:py-28" style={{ background: 'var(--surface)', color: 'var(--text)' }}>
      <div className="max-w-[1240px] mx-auto">
        <header className="food-head mb-12" data-reveal>
          <p className="stamp">Gallery</p>
          <h2 id="gallery-title">In <em className="accent">pictures.</em></h2>
          <p className="sub">Real moments from our food drive and community work in Brampton. Tap any photo to see it full size.</p>
        </header>
        <SiteGallery
          theme={{ layout: 'grid', ink: 'var(--text)', muted: 'var(--muted)', accent: 'var(--accent)', accentInk: 'var(--bg)', tabBg: 'var(--bg)', radius: '4px' }}
        />
      </div>
    </section>
  );
}
