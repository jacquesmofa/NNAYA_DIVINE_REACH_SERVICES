import { useState, type FormEvent } from 'react';

const SUBMIT_URL = 'https://readdy.ai/api/form/dbli8gmbe8r9umpno26g';

export default function ContactPanel() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [count, setCount] = useState(0);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get('website_alt') || '').trim()) { setStatus('success'); return; }
    fd.delete('website_alt');
    const message = String(fd.get('message') || '');
    if (message.length > 500) { setFormError('Please keep your message under 500 characters.'); setStatus('error'); return; }
    setStatus('loading'); setFormError('');
    const params = new URLSearchParams();
    fd.forEach((v, k) => params.append(k, String(v)));
    try {
      const response = await fetch(SUBMIT_URL, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString() });
      const responseText = await response.text();
      let parsed: any = null;
      try { parsed = JSON.parse(responseText); } catch { parsed = null; }
      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const spam = /spam/i.test(String(serverMsg));
      if (response.ok && parsed?.code === 'OK' && !spam) {
        setStatus('success'); form.reset(); setCount(0);
      } else {
        setFormError(serverMsg ? String(serverMsg) : 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setFormError('We could not send your message. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section className="panel" data-side="full" id="contact">
      <img className="panel-bg" data-parallax="0.32" alt="Quiet warm landscape of red earth at dusk"
        src="https://readdy.ai/api/search-image?query=Wide%20quiet%20landscape%20of%20red%20earth%20field%20at%20dusk%20with%20distant%20palm%20silhouettes%2C%20no%20single%20subject%2C%20soft%20haze%2C%20deep%20terracotta%20and%20warm%20brown%20tones%2C%20calm%20even%20texture%20across%20the%20frame%2C%20cinematic%20minimal&width=2400&height=1350&seq=ndrs-contact-01&orientation=landscape" />
      <div className="panel-veil" />
      <div className="panel-copy w-full !max-w-[1100px] flex lg:!flex-row gap-10 lg:items-start" data-parallax="-0.08">
        <div className="flex flex-col gap-4 lg:w-[42%]">
          <p className="stamp" data-reveal>07 — Contact &amp; get support</p>
          <h2 data-reveal dangerouslySetInnerHTML={{ __html: 'We would love to<br>hear from <em class="accent">you.</em>' }} />
          <p className="sub" data-reveal>Whether you need support, want to volunteer, or are interested in a partnership, please reach out.</p>
          {/* CONTENT: confirm with client before launch */}
          <ul className="text-sm flex flex-col gap-2" style={{ color: 'var(--muted)' }} data-reveal>
            <li><i className="ri-map-pin-line mr-2" />Brampton, Ontario, and surrounding communities [confirm coverage]</li>
            <li><i className="ri-phone-line mr-2" />[Telephone: to be added]</li>
            <li><i className="ri-mail-line mr-2" />[Email: to be added]</li>
            <li><i className="ri-time-line mr-2" />[Office hours: to be added]</li>
          </ul>
        </div>
        <div className="form-card card" data-reveal>
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center gap-4 py-10" role="status">
              <span className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', color: 'var(--bg)' }}><i className="ri-check-line text-2xl" /></span>
              <p className="text-lg">Thank you. Your message has been received. Our team will be in touch.</p>
              <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>Send another message</button>
            </div>
          ) : (
            <form id="ndrs-contact" data-readdy-form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate={false}>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Please do not submit sensitive medical, immigration, or financial documents through this form.</p>
              <input className="fld-aux" type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly onFocus={(e) => e.currentTarget.removeAttribute('readonly')} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="field"><label htmlFor="c-name">Full name *</label><input id="c-name" name="name" required placeholder="Your name" /></div>
                <div className="field"><label htmlFor="c-email">Email *</label><input id="c-email" type="email" name="email" required placeholder="you@example.com" /></div>
                <div className="field"><label htmlFor="c-phone">Phone (optional)</label><input id="c-phone" type="tel" name="phone" placeholder="Phone number" /></div>
                <div className="field"><label htmlFor="c-reason">Reason *</label>
                  <select id="c-reason" name="reason" required defaultValue="Support">
                    {['Support', 'Volunteer', 'Partnership', 'Igbo Roots & Generations', 'Media', 'Donation', 'Other'].map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <div className="field"><label htmlFor="c-msg">Message *</label>
                <textarea id="c-msg" name="message" required rows={4} maxLength={500} placeholder="How can we help?" onChange={(e) => setCount(e.target.value.length)} />
                <span className="text-xs self-end" style={{ color: 'var(--muted)' }}>{count}/500</span>
              </div>
              <label className="flex items-start gap-3 text-sm cursor-pointer">
                <input type="checkbox" name="consent" value="Yes, I consent to be contacted" required className="mt-1 w-4 h-4" style={{ accentColor: 'var(--accent)' }} />
                <span>I consent to NDRS contacting me about this request. *</span>
              </label>
              {status === 'error' && <p className="text-sm" role="alert" style={{ color: 'var(--accent2)' }}>{formError} Please try again.</p>}
              <button type="submit" className="btn btn-accent justify-center w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send Message'} <i className="ri-arrow-right-line" />
              </button>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>We use your information only to respond to your request.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}