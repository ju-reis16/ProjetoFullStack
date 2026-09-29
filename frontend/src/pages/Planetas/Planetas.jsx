import { useEffect, useState } from "react";
import HeaderRouter from "../components/HeaderRouter";
import PlanetCard from "../components/PlanetCard";
import "./Planetas.css";

function Planetas() {
  const [planetas, setPlanetas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/cards/planetas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível carregar os planetas.");
        }

        return response.json();
      })
      .then((data) => {
        setPlanetas(data);
      })
      .catch((error) => {
        setErro(error.message);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <div className="page">
      <HeaderRouter />

      <main className="main-content">
        <section className="page-introduction">
          <p className="small-title">COSMOS OBSERVATORY</p>

          <h1>
            Os <span>8 planetas</span>
          </h1>

          <p>
            Explore os planetas do Sistema Solar e conheça suas principais
            características.
          </p>
        </section>

        {carregando && <p>Carregando planetas...</p>}

        {erro && <p>{erro}</p>}

        {!carregando && !erro && (
          <section className="planet-grid">
            {planetas.map((planeta) => (
              <PlanetCard
                key={planeta.id_card}
                imagem={planeta.imagem_url}
                nome={planeta.titulo}
                descricao={planeta.descricao}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default Planetas;