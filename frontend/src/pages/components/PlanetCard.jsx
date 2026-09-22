function PlanetCard({ imagem, nome, tipo, descricao, distancia, diametro }) {
  return (
    <article className="planet-card">
      <div className="planet-image-container">
        <img src={imagem} alt={nome} />
        <span className="planet-tag"><span /> Planeta</span>
      </div>

      <div className="planet-content">
        <h2>{nome}</h2>
        <p className="planet-category">{tipo}</p>
        <p className="planet-description">{descricao}</p>

        <div className="planet-information">
          <div>
            <span>DISTÂNCIA DO SOL</span>
            <strong>{distancia}</strong>
          </div>
          <div>
            <span>DIÂMETRO</span>
            <strong>{diametro}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PlanetCard;
