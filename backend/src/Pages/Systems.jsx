const systems = ["Alpha Centauri", "Sirius", "TRAPPIST-1", "Kepler-452"];
export default function Systems() {
  return (
    <>
      <div className="page-title">
        <div className="eyebrow">CATÁLOGO</div>
        <h1>Sistemas Estelares</h1>
        <p>Descubra vizinhanças cósmicas e seus mundos.</p>
      </div>
      <div className="catalog-grid system-grid">
        {systems.map((system) => (
          <article className="catalog-card" key={system}>
            <div className="catalog-copy">
              <span className="tag">SISTEMA ESTELAR</span>
              <h2>{system}</h2>
              <p>Sistema catalogado pelo observatório Cosmos.</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
