'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus({ type: 'ok', text: 'Thanks — we got your message and will reply soon.' });
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setStatus({ type: 'err', text: err.message || 'Could not send message' });
    } finally {
      setLoading(false);
    }
  }

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  return (
    <section className="section contact screen-section" id="contact">
      <div className="screen-section-inner">
        <div className="contact-panel" data-cursor="hover">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Start a conversation</h2>
            <p className="lede">
              Ready to see exactly what you&apos;ll get? Share a bit about your project and we&apos;ll
              map deliverables, timeline, and outcome.
            </p>
            <ul className="contact-points">
              <li>Response within 1–2 business days</li>
              <li>No-obligation scoping conversation</li>
              <li>Full source code ownership on delivery</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-row">
              <label>
                Name
                <input
                  name="name"
                  required
                  placeholder="Alex Rivera"
                  data-cursor="input"
                  value={form.name}
                  onChange={update('name')}
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  data-cursor="input"
                  value={form.email}
                  onChange={update('email')}
                />
              </label>
            </div>
            <label>
              Company
              <input
                name="company"
                placeholder="Company (optional)"
                data-cursor="input"
                value={form.company}
                onChange={update('company')}
              />
            </label>
            <label>
              Project notes
              <textarea
                name="message"
                rows={3}
                required
                placeholder="What are you building?"
                data-cursor="input"
                value={form.message}
                onChange={update('message')}
              />
            </label>
            <button type="submit" className="btn btn-primary" data-cursor="cta" disabled={loading}>
              {loading ? 'Sending…' : 'Send message'}
              <span className="btn-arrow">→</span>
            </button>
            {status.text ? (
              <p className={`contact-status ${status.type === 'ok' ? 'is-ok' : 'is-err'}`}>
                {status.text}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
