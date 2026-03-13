import { useState } from 'react'

const links = [
  { icon: '✉️', label: 'vaniacristina@email.com', href: 'mailto:vaniacristina@email.com' },
  { icon: '💼', label: 'linkedin.com/in/vaniacristina', href: 'https://linkedin.com' },
  { icon: '🐙', label: 'github.com/vanniexp', href: 'https://github.com/vanniexp' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <p className="section-label">Contato</p>
        <h2 className="section-title">Vamos conversar?</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <p>
              Estou aberta a novas oportunidades, freelas e parcerias.
              Se você tem um projeto ou apenas quer trocar uma ideia, me manda uma mensagem!
            </p>
            <div className="contact-links">
              {links.map((l) => (
                <a className="contact-link" href={l.href} key={l.label} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-icon">{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {sent ? (
            <div className="form-success">
              ✅ Mensagem enviada! Entrarei em contato em breve.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" placeholder="Olá, gostaria de conversar sobre..." required />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Enviar mensagem
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
