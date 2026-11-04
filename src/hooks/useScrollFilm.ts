import { useEffect } from 'react';

type Beat = { el: HTMLElement; from: number; to: number; parts: HTMLElement[]; lines: HTMLElement[]; chips: HTMLElement[] };
type Chapter = {
  el: HTMLElement; stage: HTMLElement; beats: Beat[]; src: string; tIn: number; tOut: number;
  video: HTMLVideoElement | null; current: number; rolling?: boolean;
};

/** Scroll-scrubbed film chapter + pointer parallax driver. */
export default function useScrollFilm() {
  useEffect(() => {
    const TOUCH = matchMedia('(pointer: coarse)').matches;
    const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LERP = TOUCH ? 0.03 : 0.02;
    const FADE = 0.10;
    const STAGGER = 0.035;
    const EPS = 1 / 60;
    const CREEP = TOUCH ? 0.012 : 0.010;
    const cleanups: (() => void)[] = [];

    const chapterEls = [...document.querySelectorAll<HTMLElement>('.chapter')];
    if (!chapterEls.length) return undefined;
    if (REDUCED) { chapterEls.forEach((el) => el.classList.add('is-static')); return undefined; }
    if (TOUCH) chapterEls.forEach((el) => el.classList.add('is-touch'));

    document.querySelectorAll<HTMLElement>('.beat [data-split="lines"]').forEach((h) => {
      if (h.dataset.splitDone) return;
      const lines = h.innerHTML.split(/<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean);
      h.innerHTML = lines.map((l) => `<span class="line"><span class="line-in">${l}</span></span>`).join('');
      h.dataset.splitDone = '1';
    });

    const chapters: Chapter[] = chapterEls.map((el) => ({
      el,
      stage: el.querySelector('.stage') as HTMLElement,
      beats: [...el.querySelectorAll<HTMLElement>('.beat')].map((b) => ({
        el: b,
        from: parseFloat(b.dataset.from || '0') || 0,
        to: b.dataset.to ? parseFloat(b.dataset.to) : 1,
        parts: ([...b.children] as HTMLElement[]).filter((c) => !c.classList.contains('chips')),
        lines: [...b.querySelectorAll<HTMLElement>('.line-in')],
        chips: [...b.querySelectorAll<HTMLElement>('.chips li')],
      })),
      src: el.dataset.video || '',
      tIn: parseFloat(el.dataset.in || '0') || 0,
      tOut: parseFloat(el.dataset.out || '0') || 0,
      video: null,
      current: 0,
    }));

    const afterLCP = new Promise<void>((res) => {
      if (document.readyState === 'complete') res(); else window.addEventListener('load', () => res(), { once: true });
    }).then(() => new Promise<void>((res) => {
      if ('requestIdleCallback' in window) (window as any).requestIdleCallback(() => res(), { timeout: 1500 });
      else setTimeout(res, 300);
    }));

    function detach(c: Chapter) {
      if (!c.video) return;
      c.stage.classList.remove('is-live');
      c.video.removeAttribute('src');
      c.video.load();
      c.video.remove();
      c.video = null;
    }

    function warmUp(c: Chapter, v: HTMLVideoElement) {
      const roll = () => {
        if (c.video !== v || c.rolling || v.readyState >= 2) return;
        c.rolling = true; v.loop = true;
        v.play().catch(() => { c.el.classList.add('is-static'); detach(c); });
      };
      const started = v.play();
      if (started && started.then) started.then(() => { if (!c.rolling) v.pause(); }).catch(roll);
      setTimeout(roll, 4000);
    }

    async function attach(c?: Chapter) {
      if (!c || c.video) return;
      await afterLCP;
      if (c.video || !c.el.isConnected) return;
      const v = document.createElement('video');
      v.muted = true; v.playsInline = true; v.preload = 'auto';
      (v as any).disablePictureInPicture = true; v.tabIndex = -1;
      v.setAttribute('aria-hidden', 'true');
      v.src = c.src;
      v.addEventListener('loadeddata', () => c.stage.classList.add('is-live'), { once: true });
      c.stage.insertBefore(v, c.stage.querySelector('.veil'));
      c.video = v;
      if (TOUCH) warmUp(c, v);
    }

    const find = (t: Element) => chapters.find((c) => c.el === t);
    const near = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && attach(find(e.target))), { rootMargin: '120% 0px' });
    const far = new IntersectionObserver((es) => es.forEach((e) => { const c = find(e.target); if (!e.isIntersecting && c) detach(c); }), { rootMargin: '260% 0px' });
    chapters.forEach((c) => { near.observe(c.el); far.observe(c.el); });

    function applyVideo(v: HTMLVideoElement | null, t: number) {
      if (!v || !Number.isFinite(v.duration) || v.seeking) return;
      if (Math.abs(v.currentTime - t) < EPS) return;
      v.currentTime = t;
    }
    const progressOf = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      return travel <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / travel));
    };
    const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
    const ease = (x: number) => 1 - (1 - x) ** 3;
    function setState(el: HTMLElement, o: number, leaving: boolean) {
      el.style.setProperty('--o', o.toFixed(3));
      el.style.setProperty('--o-inv', (1 - o).toFixed(3));
      el.style.setProperty('--dir', leaving ? '1' : '-1');
    }
    function drive(el: HTMLElement, local: number, i: number, n: number, first: boolean, last: boolean) {
      const tIn = first ? 1 : clamp01((local - i * STAGGER) / FADE);
      const tOut = last ? 1 : clamp01((1 - local - (n - 1 - i) * STAGGER) / FADE);
      setState(el, ease(Math.min(tIn, tOut)), tOut < 1);
    }
    function applyBeats(c: Chapter) {
      c.beats.forEach((b) => {
        const span = b.to - b.from;
        const local = span > 0 ? (c.current - b.from) / span : 0;
        const inside = local >= 0 && local <= 1;
        const first = b.from <= 0; const last = b.to >= 1;
        const held = (local < 0 && first) || (local > 1 && last);
        b.el.style.setProperty('--local', clamp01(local).toFixed(3));
        if (!inside) {
          [...b.parts, ...b.lines, ...b.chips].forEach((el) => setState(el, held ? 1 : 0, local > 1));
        } else {
          b.parts.forEach((el, i) => drive(el, local, i, b.parts.length, first, last));
          b.lines.forEach((el, i) => drive(el, local, i * 0.8, b.lines.length * 0.8, first, last));
          b.chips.forEach((el, i) => drive(el, local, 2 + i, 2 + b.chips.length, first, last));
        }
        const edge = inside ? Math.min(first ? 1 : clamp01(local / FADE), last ? 1 : clamp01((1 - local) / FADE)) : 0;
        b.el.classList.toggle('is-on', held || edge > 0.5);
        b.el.classList.toggle('is-leaving', inside && !last && 1 - local < FADE + STAGGER * 4);
      });
    }

    const onProgressClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const c = chapters[0];
      const p = parseFloat(a.dataset.progress || '0') || 0;
      const top = c.el.getBoundingClientRect().top + window.scrollY;
      const travel = c.el.offsetHeight - window.innerHeight;
      e.preventDefault();
      window.scrollTo({ top: top + travel * Math.min(p + 0.02, 1), behavior: 'smooth' });
    };
    const progLinks = [...document.querySelectorAll<HTMLAnchorElement>('a[data-progress]')];
    progLinks.forEach((a) => a.addEventListener('click', onProgressClick));
    cleanups.push(() => progLinks.forEach((a) => a.removeEventListener('click', onProgressClick)));

    let raf = 0;
    const inView = new Set<Element>();
    function glide(c: Chapter, span: number) {
      const gap = progressOf(c.el) - c.current;
      let step = gap * LERP;
      if (span > 0) {
        const rest = Math.abs(gap) * span;
        const floor = CREEP / span;
        if (rest < EPS) step = gap;
        else if (Math.abs(step) < floor) step = Math.sign(gap) * Math.min(floor, Math.abs(gap));
      }
      c.current += step;
    }
    function tick() {
      chapters.forEach((c) => {
        const out = c.video && !c.rolling ? (c.tOut || c.video.duration || 0) : 0;
        const span = Math.max(0, out - c.tIn);
        glide(c, span);
        const r = c.el.getBoundingClientRect();
        if (!(r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5)) return;
        applyBeats(c);
        c.el.style.setProperty('--t', clamp01(c.current).toFixed(4));
        if (span > 0) applyVideo(c.video, c.tIn + c.current * span);
      });
      raf = requestAnimationFrame(tick);
    }
    const run = new IntersectionObserver((es) => {
      es.forEach((e) => (e.isIntersecting ? inView.add(e.target) : inView.delete(e.target)));
      if (inView.size && !raf) raf = requestAnimationFrame(tick);
      if (!inView.size && raf) { cancelAnimationFrame(raf); raf = 0; }
    });
    chapters.forEach((c) => run.observe(c.el));

    // POINTER PARALLAX
    if (matchMedia('(pointer: fine)').matches) {
      const root = document.documentElement;
      const MLERP = 0.08;
      let tx = 0; let ty = 0; let mx = 0; let my = 0; let mraf = 0;
      const settle = () => {
        mx += (tx - mx) * MLERP; my += (ty - my) * MLERP;
        root.style.setProperty('--mx', mx.toFixed(3));
        root.style.setProperty('--my', my.toFixed(3));
        mraf = Math.abs(tx - mx) + Math.abs(ty - my) > 0.002 ? requestAnimationFrame(settle) : 0;
      };
      const aim = (x: number, y: number) => { tx = x; ty = y; if (!mraf) mraf = requestAnimationFrame(settle); };
      const onMove = (e: PointerEvent) => aim((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
      const onLeave = () => aim(0, 0);
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('mouseleave', onLeave);
      cleanups.push(() => { window.removeEventListener('pointermove', onMove); document.removeEventListener('mouseleave', onLeave); cancelAnimationFrame(mraf); });
    }

    return () => {
      near.disconnect(); far.disconnect(); run.disconnect();
      if (raf) cancelAnimationFrame(raf);
      chapters.forEach(detach);
      cleanups.forEach((f) => f());
    };
  }, []);
}