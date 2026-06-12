import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import './CaseStudy.css'

export default function CaseStudy() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="case-notfound container">
        <h2>Projeto não encontrado.</h2>
        <Link to="/projetos" className="btn-outline">← Voltar para projetos</Link>
      </div>
    )
  }

  const next = getProjectById(project.nextProject)

  return (
    <div className="case">
      {/* ── Back ─────────────────────────────────────────────────── */}
      <div className="case-back container">
        <button onClick={() => navigate(-1)} className="case-back__btn">
          ← Voltar
        </button>
        <Link to="/projetos" className="case-back__all">Ver todos os projetos</Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="case-hero">
        <div
          className="case-hero__cover"
          style={{ background: project.gradient }}
        >
          <div className="case-hero__cover-inner container">
            <span className="case-hero__cat">{project.category}</span>
            <h1 className="case-hero__title">{project.title}</h1>
            <p className="case-hero__sub">{project.subtitle}</p>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <section className="case-overview container">
        <div className="case-meta">
          {[
            { label: 'Desafio', value: project.overview.challenge },
            { label: 'Meu papel', value: project.overview.role },
            { label: 'Timeline', value: project.overview.timeline },
            { label: 'Ferramentas', value: project.overview.tools },
          ].map((m) => (
            <div key={m.label} className="case-meta__item">
              <span className="case-meta__label">{m.label}</span>
              <p className="case-meta__value">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tags ─────────────────────────────────────────────────── */}
      <div className="case-tags container">
        {project.tags.map((t) => (
          <span key={t} className="case-tag">{t}</span>
        ))}
      </div>

      {/* ── Content Sections ─────────────────────────────────────── */}
      <div className="case-body container">
        {project.sections.map((section, i) => (
          <section key={i} className="case-section">
            <h2 className="case-section__title">{section.title}</h2>
            <p className="case-section__text">{section.content}</p>
          </section>
        ))}
      </div>

      {/* ── Results ──────────────────────────────────────────────── */}
      <section className="case-results">
        <div className="case-results__inner container">
          <h2 className="case-results__heading">Resultados</h2>
          <div className="case-results__grid">
            {project.results.map((r) => (
              <div key={r} className="case-result-item">
                <span className="case-result-item__dot">✦</span>
                <p>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next project ─────────────────────────────────────────── */}
      {next && (
        <section className="case-next container">
          <span className="case-next__label tag-label">Próximo projeto</span>
          <Link to={`/projetos/${next.id}`} className="case-next__card">
            <div
              className="case-next__cover"
              style={{ background: next.gradient }}
            />
            <div className="case-next__info">
              <span className="case-next__cat">{next.category}</span>
              <h3 className="case-next__title">{next.title}</h3>
              <p className="case-next__sub">{next.subtitle}</p>
              <span className="case-next__cta">Ver case study →</span>
            </div>
          </Link>
        </section>
      )}
    </div>
  )
}
