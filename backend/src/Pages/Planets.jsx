const planets = ["Terra", "Marte", "Júpiter", "Saturno"];
export default function Planets() {
  return (
    <>
      <div className="page-title">
        <div className="eyebrow">CATÁLOGO</div>
        <h1>Planetas</h1>
        <p>Mundos conhecidos pelo observatório Cosmos.</p>
      </div>
      <div className="catalog-grid">
        {planets.map((planet) => (
          <article className="catalog-card" key={planet}>
            <div className="catalog-copy">
              <span className="tag">SISTEMA SOLAR</span>
              <h2>{planet}</h2>
              <p>Dados catalogados sobre este mundo.</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
