import { useState } from 'react'
import './Contact.css'

const contactLinks = [
  {
    icon: '✉',
    label: 'E-mail',
    value: 'vaniacristina.s@live.com',
    href: 'mailto:vaniacristina.s@live.com',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/vanniexp',
    href: 'https://linkedin.com/in/vanniexp',
  },
  {
    icon: 'Be',
    label: 'Behance',
    value: 'behance.net/vaniacristina',
    href: 'https://behance.net/vaniacristina',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="contact-hero container">
        <span className="tag-label fade-up">Contato</span>
        <h1 className="contact-hero__heading fade-up-2">
          Vamos criar
          <br />
          algo <em className="accent">juntos?</em>
        </h1>
        <p className="contact-hero__sub fade-up-3">
          Estou disponível para projetos freelance, oportunidades full-time e
          colaborações. Respondo em até 24h.
        </p>
      </section>

      {/* ── Content ──────────────────────────────────────────────── */}
      <section className="contact-content container">
        {/* Links */}
        <div className="contact-links">
          <h2 className="contact-links__title">Onde me encontrar</h2>
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-link-item"
            >
              <span className="contact-link-item__icon">{l.icon}</span>
              <div>
                <span className="contact-link-item__label">{l.label}</span>
                <span className="contact-link-item__value">{l.value}</span>
              </div>
              <span className="contact-link-item__arrow">→</span>
            </a>
          ))}

          <div className="contact-availability">
            <span className="contact-availability__dot" />
            <div>
              <strong>Disponível para projetos</strong>
              <p>Abertura para novos trabalhos a partir de Julho 2025</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          <h2 className="contact-form-wrap__title">Envie uma mensagem</h2>
          {/* To activate the form: sign up at formspree.io, create a form and replace YOUR_FORM_ID above */}

          {status === 'success' ? (
            <div className="contact-success">
              <span className="contact-success__icon">✓</span>
              <h3>Mensagem enviada!</h3>
              <p>Obrigada pelo contato. Responderei em breve.</p>
              <button
                className="btn-outline"
                onClick={() => setStatus('idle')}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__group">
                <label htmlFor="name">Nome *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Conta um pouco sobre o seu projeto ou oportunidade..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="contact-form__error">
                  Ops, algo deu errado. Tente novamente ou me envie um e-mail
                  diretamente.
                </p>
              )}

              <button
                type="submit"
                className="btn-primary contact-form__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensagem →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
