import useScrollFilm from '@/hooks/useScrollFilm';
import usePanelMotion from '@/hooks/usePanelMotion';
import usePageMeta from '@/seo/usePageMeta';
import { HOME_META } from '@/seo/site';
import SiteNav from './components/SiteNav';
import FilmChapter from './components/FilmChapter';
import Panels from './components/Panels';
import FoodSecurity from './components/FoodSecurity';
import ContactPanel from './components/ContactPanel';
import GallerySection from './components/GallerySection';
import SiteFooter from './components/SiteFooter';

export default function Home() {
  useScrollFilm();
  usePanelMotion();
  usePageMeta(HOME_META);
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteNav />
      <main id="main">
        <FilmChapter />
        <Panels />
        <FoodSecurity />
        <GallerySection />
        <ContactPanel />
      </main>
      <SiteFooter />
      <a href="#contact" className="btn btn-accent md:hidden fixed bottom-4 right-4 z-40 !py-3 !px-5 shadow-lg">Get Support</a>
    </>
  );
}