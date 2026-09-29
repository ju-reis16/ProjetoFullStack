import { useEffect, useState } from "react";
import HeaderRouter from "../components/HeaderRouter";
import "./SistemasEstelares.css";

function SistemasEstelares() {
  const [sistemas, setSistemas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/cards/sistemas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível carregar os sistemas.");
        }

        return response.json();
      })
      .then((data) => {
        setSistemas(data);
      })
      .catch((error) => {
        setErro(error.message);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <div className="sistemas-page">
      <HeaderRouter />

      <main className="sistemas-conteudo">
        <div className="sistemas-titulo">
          <span>MAPEAMENTO ESTELAR</span>

          <h1>Sistemas Estelares</h1>

          <p>{sistemas.length} sistemas catalogados na base de dados</p>
        </div>

        {carregando && (
          <p>Carregando sistemas...</p>
        )}

        {erro && (
          <p>{erro}</p>
        )}

        {!carregando && !erro && (
          <section className="sistemas-grid">
            {sistemas.map((sistema) => (
              <article
                className="sistema-card"
                key={sistema.id_card}
              >
                <div className="sistema-imagem">
                  <img
                    src={sistema.imagem_url}
                    alt={sistema.titulo}
                  />
                </div>

                <div className="sistema-info">
                  <h2>{sistema.titulo}</h2>

                  <p className="sistema-descricao">
                    {sistema.descricao}
                  </p>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>

      <footer className="sistemas-footer">
        © 2026 Cosmos. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default SistemasEstelares;