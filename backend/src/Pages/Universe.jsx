export default function Universe({ navigate }) {
  return (
    <>
      <div className="page-title">
        <div className="eyebrow">EXPLORAÇÃO</div>
        <h1>Mapa do Universo</h1>
        <p>Uma visão dos objetos catalogados pelo Cosmos.</p>
      </div>
      <section className="universe-map">
        <div className="map-sun" />
        <div className="map-orbit orbit-one" />
        <div className="map-orbit orbit-two" />
        <div className="map-label label-one">
          Sistema Solar <b>8 planetas</b>
        </div>
      </section>
      <button className="primary" onClick={() => navigate("sistemas")}>
        Ver sistemas →
      </button>
    </>
  );
}
