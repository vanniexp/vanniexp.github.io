export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Sobre mim</p>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Quem sou eu</h2>
            <div className="divider"></div>
            <p>
              Sou desenvolvedora com foco em criar soluções web modernas, acessíveis
              e com ótima experiência de uso. Gosto de trabalhar em projetos que
              combinam design e tecnologia.
            </p>
            <p>
              Tenho experiência em desenvolvimento front-end e back-end, sempre
              buscando boas práticas, código limpo e resultados que façam diferença
              para as pessoas.
            </p>
            <p>
              Quando não estou codando, gosto de aprender novas ferramentas,
              contribuir com a comunidade tech e explorar novas ideias.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact-card">
              <div className="fact-number">3+</div>
              <div className="fact-desc">Anos de experiência</div>
            </div>
            <div className="fact-card">
              <div className="fact-number">20+</div>
              <div className="fact-desc">Projetos entregues</div>
            </div>
            <div className="fact-card">
              <div className="fact-number">10+</div>
              <div className="fact-desc">Tecnologias dominadas</div>
            </div>
            <div className="fact-card">
              <div className="fact-number">∞</div>
              <div className="fact-desc">Vontade de aprender</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
