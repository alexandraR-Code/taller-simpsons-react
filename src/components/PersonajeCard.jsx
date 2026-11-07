function PersonajeCard({ personaje }) {
  const imagenUrl = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`

  return (
    <article className="personaje-card">
      <img className="personaje-imagen" src={imagenUrl} alt={personaje.name} loading="lazy" />
      <div className="personaje-info">
        <h2>{personaje.name}</h2>
        <p><strong>Ocupación:</strong> {personaje.occupation}</p>
        <p><strong>Estado:</strong> {personaje.status}</p>
      </div>
    </article>
  )
}

export default PersonajeCard;