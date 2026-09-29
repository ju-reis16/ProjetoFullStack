import { useEffect, useState } from "react";
import HeaderRouter from "../components/HeaderRouter";
import "./Explorar.css";

function Explorar() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("Todos");
  const [objetos, setObjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/cards/explorar")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível carregar os objetos.");
        }

        return response.json();
      })
      .then((data) => {
        setObjetos(data);
      })
      .catch((error) => {
        setErro(error.message);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

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
      : objetos.filter(
          (objeto) => objeto.categoria === filtroSelecionado
        );

  return (
    <div className="explorar-page">

      <HeaderRouter />

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

      {carregando && (
        <p>Carregando objetos...</p>
      )}

      {erro && (
        <p>{erro}</p>
      )}

      {!carregando && !erro && (
        <section className="objetos-grid">
          {objetosFiltrados.map((objeto) => (
            <div
              className="objeto-card"
              key={objeto.id_card}
            >
              <img
                src={objeto.imagem_url}
                alt={objeto.titulo}
              />

              <div className="card-overlay"></div>

              <span className="objeto-categoria">
                {objeto.categoria}
              </span>

              <div className="objeto-info">
                <h2>{objeto.titulo}</h2>

                <p>{objeto.categoria}</p>

                <small>
                  {objeto.descricao}
                </small>

                <button className="ver-btn">
                  Ver →
                </button>
              </div>
            </div>
          ))}
        </section>
      )}

      <footer className="explorar-footer">
        © 2026 Cosmos Observatory
      </footer>

    </div>
  );
}

export default Explorar;