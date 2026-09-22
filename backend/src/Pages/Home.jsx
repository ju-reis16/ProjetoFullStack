export default function Home({ navigate }) {
  return (
    <section className="home-hero">
      <div>
        <div className="eyebrow">MODO EXPLORAÇÃO ATIVO</div>
        <h1>Mapa do Universo</h1>
        <p>Explore estrelas, planetas e sistemas além do nosso horizonte.</p>
        <button className="primary" onClick={() => navigate("universo")}>
          Explorar o universo →
        </button>
      </div>
      <div className="hero-orbit">
        <span className="hero-planet" />
      </div>
    </section>
  );
}
