import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Projects.css'

const categories = ['Todos', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [active, setActive] = useState('Todos')

  const filtered =
    active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="projects-page">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="projects-hero container">
        <span className="tag-label fade-up">Trabalhos</span>
        <h1 className="projects-hero__heading fade-up-2">
          Meus <em className="accent">projetos</em>
        </h1>
        <p className="projects-hero__sub fade-up-3">
          Cada projeto aqui começou com uma pergunta. Veja como cheguei nas respostas.
        </p>
      </section>

      {/* ── Filters ──────────────────────────────────────────────── */}
      <div className="projects-filters container fade-up-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`projects-filter-btn ${active === c ? 'projects-filter-btn--active' : ''}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* ── Grid ─────────────────────────────────────────────────── */}
      <div className="projects-grid container">
        {filtered.map((project, i) => (
          <Link
            key={project.id}
            to={`/projetos/${project.id}`}
            className="proj-card"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div
              className="proj-card__cover"
              style={{ background: project.gradient }}
            >
              <div className="proj-card__overlay">
                <span className="proj-card__cta-overlay">Ver case study →</span>
              </div>
            </div>
            <div className="proj-card__body">
              <div className="proj-card__row">
                <span className="proj-card__cat">{project.category}</span>
                <span className="proj-card__year">{project.year}</span>
              </div>
              <h3 className="proj-card__title">{project.title}</h3>
              <p className="proj-card__sub">{project.subtitle}</p>
              <div className="proj-card__tags">
                {project.tags.map((t) => (
                  <span key={t} className="proj-card__tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
