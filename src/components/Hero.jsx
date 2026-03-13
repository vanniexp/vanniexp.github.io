export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-tag">Disponível para projetos</span>
          <h1>
            Olá, sou<br />
            <em>Vânia Cristina</em>
          </h1>
          <p className="hero-desc">
            Desenvolvedora apaixonada por criar experiências digitais
            elegantes e funcionais. Transformo ideias em produtos reais.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Ver projetos
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
