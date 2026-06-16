import { Link } from 'react-router-dom'
import { getFeaturedProjects } from '../data/projects'
import { Sparkle } from '../components/Brand'
import './Home.css'

const marqueeItems = ['Vannie', 'Design Systems', 'UX Strategy', 'Product Design']

function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee container" aria-hidden="true">
      <div className="marquee__inner">
        <div className="marquee__track">
          {[...row, ...row].map((item, i) => (
            <span key={i} className="marquee__item">
              {item} <Sparkle className="marquee__star" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <div className="home">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__inner container">
          <div className="hero__left">
            <span className="tag-label fade-up">Portfolio — Product Design</span>

            <h1 className="hero__heading fade-up-2">
              <span className="hero__intro">Olá, eu sou</span>
              <span className="hero__logo-text">Vânia Cristina</span>
            </h1>

            <p className="hero__body fade-up-3">
              Product designer que transforma problemas complexos em interfaces
              simples, com pesquisa de verdade e design com intenção.
            </p>

            <div className="hero__actions fade-up-4">
              <Link to="/projetos" className="btn-primary">Ver projetos ↗</Link>
              <Link to="/sobre" className="btn-outline">Sobre mim</Link>
            </div>
          </div>

          <div className="hero__right fade-up-3">
            <Sparkle className="hero__star hero__star--1" />
            <Sparkle className="hero__star hero__star--2" />
            <div className="photo-arch">
              <div className="photo-arch__inner">
                <span>✦</span>
                <p>sua foto aqui</p>
              </div>
            </div>
            <Link to="/contato" className="hero__sticker">
              Let's connect ✦
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────────── */}
      <Marquee />

      {/* ── Featured Projects ────────────────────────────────────── */}
      <section className="home-projects">
        <div className="container">
          <div className="home-projects__head">
            <h2 className="section-title">
              Projetos em <em className="accent">destaque</em>
            </h2>
            <Link to="/projetos" className="home-projects__all">
              ver todos ↗
            </Link>
          </div>

          <div className="home-projects__grid">
            {featured.map((p, i) => (
              <Link key={p.id} to={`/projetos/${p.id}`} className="home-card">
                <div className="home-card__cover" style={{ background: p.gradient }}>
                  <span className="home-card__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="home-card__body">
                  <div className="home-card__meta">
                    <span className="home-card__tag">{p.category}</span>
                    <span className="home-card__year">{p.year}</span>
                  </div>
                  <h3 className="home-card__title display">{p.title}</h3>
                  <p className="home-card__sub">{p.subtitle}</p>
                  <span className="home-card__cta">ver case study ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="home-cta__inner container">
          <span className="tag-label">Tem um projeto em mente?</span>
          <h2 className="home-cta__script script">Vamos conversar?</h2>
          <Link to="/contato" className="btn-primary">Entrar em contato ↗</Link>
        </div>
      </section>
    </div>
  )
}
