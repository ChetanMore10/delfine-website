function Brand({ footer = false }) {
  return (
    <span className={`brand-wordmark${footer ? ' footer-wordmark' : ''}`} aria-label="Delfine India Technology">
      <span className="brand-word">Delfine</span>
      <span className="brand-subtitle">INDIA TECHNOLOGY</span>
    </span>
  )
}

export default Brand
