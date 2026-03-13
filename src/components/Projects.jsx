const projects = [
  {
    icon: '🛒',
    title: 'E-commerce App',
    description:
      'Plataforma de compras online com catálogo de produtos, carrinho e checkout completo.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    icon: '📊',
    title: 'Dashboard Analytics',
    description:
      'Painel interativo para visualização de métricas e dados em tempo real.',
    tech: ['React', 'TypeScript', 'Chart.js'],
    github: '#',
    demo: '#',
  },
  {
    icon: '📝',
    title: 'Task Manager',
    description:
      'Aplicativo de gerenciamento de tarefas com arrastar e soltar e colaboração em equipe.',
    tech: ['React', 'Firebase', 'CSS'],
    github: '#',
    demo: '#',
  },
  {
    icon: '🌐',
    title: 'Blog Pessoal',
    description:
      'Blog com CMS headless, suporte a Markdown e otimização para SEO.',
    tech: ['Astro', 'Markdown', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    icon: '🔐',
    title: 'API de Autenticação',
    description:
      'API REST com autenticação JWT, refresh tokens e controle de permissões.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    icon: '🎨',
    title: 'Design System',
    description:
      'Biblioteca de componentes React reutilizáveis com Storybook e testes automatizados.',
    tech: ['React', 'Storybook', 'Jest'],
    github: '#',
    demo: '#',
  },
]

function LinkIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projetos</p>
        <h2 className="section-title">Trabalhos em destaque</h2>
        <p className="section-subtitle">
          Uma seleção de projetos que desenvolvi, explorando diferentes
          tecnologias e desafios.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <LinkIcon /> GitHub
                </a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  <LinkIcon /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
