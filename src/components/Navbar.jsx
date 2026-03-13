export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="navbar-logo">VC<span>.</span></a>
        <ul className="navbar-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}
