export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <p>© {year} Vânia Cristina — Feito com React & ☕</p>
      </div>
    </footer>
  )
}
