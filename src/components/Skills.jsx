const skillGroups = [
  {
    category: 'Front-end',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    category: 'Back-end',
    tags: ['Node.js', 'Python', 'REST APIs', 'SQL'],
  },
  {
    category: 'Ferramentas',
    tags: ['Git', 'GitHub', 'Figma', 'VS Code', 'Vite'],
  },
  {
    category: 'Soft skills',
    tags: ['Comunicação', 'Trabalho em equipe', 'Resolução de problemas'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <p className="section-label">Habilidades</p>
        <h2 className="section-title">O que eu faço</h2>
        <p className="section-subtitle">
          Tecnologias e ferramentas que uso no dia a dia para construir
          produtos de qualidade.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-category" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
