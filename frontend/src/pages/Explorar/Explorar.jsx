import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Explorar.css";

function Explorar() {
  const navigate = useNavigate();
  const [filtroSelecionado, setFiltroSelecionado] = useState("Todos");

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login", { replace: true });
  }

  const objetos = [
    {
      nome: "Kepler-452b",
      tipo: "Exoplaneta",
      distancia: "1.400 anos-luz",
      categoria: "Exoplaneta",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Kepler-452b_artist_concept.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    },
    {
      nome: "HD 189733b",
      tipo: "Exoplaneta",
      distancia: "63 anos-luz",
      categoria: "Gigante Gasoso",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Artist%E2%80%99s_impression_of_the_deep_blue_planet_HD_189733b.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    },
    {
      nome: "Proxima Centauri b",
      tipo: "Exoplaneta",
      distancia: "4,24 anos-luz",
      categoria: "Planeta Terrestre",
      imagem:
        "https://s2.glbimg.com/AwZbHRpIVjtalqmwR9_TksthVIw=/e.glbimg.com/og/ed/f/original/2016/09/12/proxima-b-habitable-zone-exoplanet-illustration-2x1-phl-upl.png",
    },
    {
      nome: "TRAPPIST-1e",
      tipo: "Exoplaneta",
      distancia: "39 anos-luz",
      categoria: "Planeta Terrestre",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/TRAPPIST-1e_Artist%27s_Impression.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    },
    {
      nome: "Nebulosa do Caranguejo",
      tipo: "Nebulosa",
      distancia: "6.500 anos-luz",
      categoria: "Nebulosa",
      imagem:
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/960px-Crab_Nebula.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      nome: "Galáxia de Andrômeda",
      tipo: "Galáxia",
      distancia: "2,537 milhões de anos-luz",
      categoria: "Galáxia",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGT9ZXtsg9b8XoKD1WfNGx5xxXJHBXBQHzs1ewyZTNw&s=10",
    },
    {
      nome: "55 Cancri e",
      tipo: "Exoplaneta",
      distancia: "41 anos-luz",
      categoria: "Super-Terra",
      imagem:
        "https://live-production.wcms.abc-cdn.net.au/517b569c883c94e18a8100c9136c337b?impolicy=wcms_crop_resize&cropH=438&cropW=659&xPos=7&yPos=0&width=862&height=575",
    },
    {
      nome: "GJ 1214b",
      tipo: "Exoplaneta",
      distancia: "48 anos-luz",
      categoria: "Super-Terra",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1U22HINDUiy59EqSlo6CrKMLVBkANjmdaT0OB1dtcnSF777z-KovXg0&s=10",
    },
  ];
const filtros = [
    "Todos",
    "Exoplaneta",
    "Super-Terra",
    "Gigante Gasoso",
    "Planeta Terrestre",
    "Galáxia",
    "Nebulosa",
  ];

  const objetosFiltrados =
    filtroSelecionado === "Todos"
      ? objetos
      : objetos.filter((objeto) => objeto.categoria === filtroSelecionado);

return (
    <div className="explorar-page">
      <header className="explorar-header">
        <div className="logo-area">
          <div className="logo-icon">
            <div className="logo-circle"></div>
          </div>

          <div className="logo-text">
            <strong>COSMOS</strong>
            <span>OBSERVATORY</span>
          </div>
        </div>

        <nav className="menu">
          <Link to="/home">Início</Link>
          <Link to="/explorar" className="menu-ativo">
            Explorar
          </Link>
          <Link to="/planetas">Planetas</Link>
          <Link to="/sistemas">Sistemas</Link>
          <Link to="/perfil">Meu Perfil</Link>
        </nav>

        <div className="usuario">
          <div className="usuario-icon">EC</div>
          <span>Elena Costa</span>
          <span className="separador">|</span>
          <button type="button" onClick={sair}>Sair</button>
        </div>
      </header>

      <section className="explorar-hero">
        <div className="hero-overlay"></div>

        <div className="hero-text">
          <span>Modo Exploração Ativo</span>

          <h1>Mapa do Universo</h1>

          <p>
            Explore planetas, estrelas, galáxias e outros objetos fascinantes
            do universo.
          </p>
        </div>
      </section>
      <div className="explorar-filtros">
        {filtros.map((filtro) => (
          <button
            key={filtro}
            className={
              filtroSelecionado === filtro
                ? "filtro selecionado"
                : "filtro"
            }
            onClick={() => setFiltroSelecionado(filtro)}
          >
            {filtro}
          </button>
        ))}
      </div>

      <section className="objetos-grid">
        {objetosFiltrados.map((objeto) => (
          <div className="objeto-card" key={objeto.nome}>
            <img src={objeto.imagem} alt={objeto.nome} />

            <div className="card-overlay"></div>

            <span className="objeto-categoria">
              {objeto.categoria}
            </span>

            <div className="objeto-info">
              <h2>{objeto.nome}</h2>

              <p>{objeto.tipo}</p>

              <small>{objeto.distancia}</small>

              <button className="ver-btn">Ver →</button>
            </div>
          </div>
        ))}
      </section>

      <footer className="explorar-footer">
        © 2026 Cosmos Observatory
      </footer>
    </div>
  );
}

export default Explorar;