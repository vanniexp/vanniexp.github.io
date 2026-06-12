import './About.css'

const personalExperiences = [
  {
    period: '2019 – hoje',
    title: 'Praticante de yoga e meditação',
    desc: 'A prática constante me ensinou empatia e a importância de entender o estado emocional das pessoas — habilidades que trago diretamente para o design.',
  },
  {
    period: '2018',
    title: 'Intercâmbio em Lisboa',
    desc: 'Viver em outra cultura expandiu minha visão de mundo e aprimorou minha capacidade de criar designs inclusivos para diferentes contextos culturais.',
  },
  {
    period: '2016',
    title: 'Voluntariado em educação',
    desc: 'Trabalhei com tecnologia educacional para comunidades carentes, o que solidificou minha crença no design como ferramenta de transformação social.',
  },
]

const professionalExperiences = [
  {
    period: '2023 – hoje',
    company: 'Empresa Atual',
    role: 'Senior UX Designer',
    desc: 'Liderando o design de produtos digitais para milhões de usuários. Mentoria de designers júniors e gestão do design system.',
  },
  {
    period: '2021 – 2023',
    company: 'Agência XYZ',
    role: 'UX/UI Designer',
    desc: 'Projeto e entrega de interfaces para clientes de e-commerce, fintech e saúde. Condução de pesquisas e testes de usabilidade.',
  },
  {
    period: '2019 – 2021',
    company: 'Startup ABC',
    role: 'UI Designer',
    desc: 'Primeiro designer da empresa. Criação do design system do zero e implementação de um processo de design em uma startup de alto crescimento.',
  },
]

const skills = [
  { category: 'Research', items: ['Entrevistas', 'Testes de usabilidade', 'Pesquisa contextual', 'Surveys', 'Analytics'] },
  { category: 'Design', items: ['Figma', 'Prototipagem', 'Design System', 'Motion Design', 'Acessibilidade'] },
  { category: 'Processo', items: ['Design Thinking', 'Jobs to Be Done', 'Atomic Design', 'Agile/Scrum', 'Design Sprint'] },
  { category: 'Soft Skills', items: ['Storytelling', 'Facilitação', 'Apresentação para stakeholders', 'Mentoria', 'Pensamento crítico'] },
]

export default function About() {
  return (
    <div className="about">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="about-hero container">
        <div className="about-hero__text">
          <div className="about-hero__tag tag-label fade-up">Sobre mim</div>
          <h1 className="about-hero__heading display fade-up-2">
            Prazer, sou a <em className="accent">Vânia</em>
          </h1>
          <p className="about-hero__intro fade-up-3">
            UX Designer com mais de 4 anos de experiência criando produtos
            digitais centrados nas pessoas. Acredito que o bom design é
            invisível — quando funciona perfeitamente, o usuário nem percebe.
          </p>
        </div>
        <div className="about-photo fade-up-3">
          <div className="photo-arch">
            <div className="photo-arch__inner">
              <span>✦</span>
              <p>sua foto aqui</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trajetória Pessoal ────────────────────────────────────── */}
      <section className="about-story container">
        <div className="section-divider">
          <h2>Trajetória Pessoal</h2>
        </div>
        <div className="about-story__grid">
          <div className="about-story__text">
            <p>
              Cresci em uma família que valorizava a criatividade e a curiosidade. Desde
              pequena, me fascinava entender <em>por que</em> as coisas eram feitas de
              determinada forma — e como poderiam ser feitas melhor.
            </p>
            <p>
              Formada em Design Gráfico, fiz a transição para UX quando percebi que o
              que mais me movia não era apenas criar algo bonito, mas criar algo que
              realmente fizesse diferença na vida das pessoas.
            </p>
            <p>
              Fora do trabalho, sou apaixonada por yoga, leitura e fotografia analógica.
              Acredito que essas práticas me tornam uma designer melhor: a atenção plena
              do yoga me ensina a observar, os livros expandem minha empatia, e a
              fotografia analógica me lembra que cada decisão importa.
            </p>
          </div>
          <div className="about-story__timeline">
            {personalExperiences.map((e) => (
              <div key={e.title} className="timeline-item">
                <span className="timeline-item__period">{e.period}</span>
                <h4 className="timeline-item__title">{e.title}</h4>
                <p className="timeline-item__desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trajetória Profissional ────────────────────────────────── */}
      <section className="about-career container">
        <div className="section-divider">
          <h2>Trajetória Profissional</h2>
        </div>
        <div className="about-story__grid">
          <div className="about-story__text">
            <p>
              Minha carreira em design começou explorando o design gráfico e a
              comunicação visual, antes de encontrar minha verdadeira paixão: entender
              pessoas e criar experiências digitais que resolvam seus problemas reais.
            </p>
            <p>
              Hoje trabalho na interseção entre pesquisa, estratégia e execução de
              design. Colaboro com times de produto, engenharia e negócios para garantir
              que o usuário esteja sempre no centro das decisões.
            </p>
            <p>
              Já atuei em startups early-stage, agências e empresas de médio porte —
              cada contexto me ensinou algo diferente sobre como criar valor real com design.
            </p>
          </div>
          <div className="about-story__timeline">
            {professionalExperiences.map((e) => (
              <div key={e.company} className="timeline-item">
                <span className="timeline-item__period">{e.period}</span>
                <h4 className="timeline-item__title">
                  {e.role}
                  <span className="timeline-item__company"> · {e.company}</span>
                </h4>
                <p className="timeline-item__desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────── */}
      <section className="about-skills container">
        <div className="section-divider">
          <h2>Habilidades</h2>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.category} className="skills-card">
              <h4 className="skills-card__cat">{s.category}</h4>
              <ul>
                {s.items.map((item) => (
                  <li key={item} className="skills-card__item">
                    <span className="skills-card__dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
