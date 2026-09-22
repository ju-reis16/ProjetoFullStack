import { Link, useNavigate } from "react-router-dom";
import "./SistemasEstelares.css";

function SistemasEstelares() {
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login", { replace: true });
  }

  const sistemas = [
    {
      nome: "Alpha Centauri",
      tipo: "3 estrelas",
      descricao:
        "Sistema estelar triplo formado por duas estrelas semelhantes ao Sol e uma anã vermelha. Proxima Centauri abriga apenas Proxima Centauri b.",
      tipoEstelar: "Anã Amarela (G2V)",
      distancia: "4,37 anos-luz",
      idade: "5 bilhões de anos",
      objetos: (
        <>
          Alpha Centauri A
          <br />
          Alpha Centauri B
          <br />
          Proxima Centauri
        </>
      ),
      constelacao: (
        <>
          3 estrelas
        </>
      ),
      imagem:
        "https://img.odcdn.com.br/wp-content/uploads/2025/02/alfa-centauri-1920x1080.jpg",
    },

    {
      nome: "Sistema Sirius",
      tipo: "0 planetas confirmados",
      descricao:
        "Sistema formado por duas estrelas que orbitam entre si. Sirius A é uma estrela branca muito brilhante, enquanto Sirius B é uma anã branca.",
      tipoEstelar: (
        <>
          Sirius A: A1V
          <br />
          Sirius B: Anã branca
        </>
      ),
      distancia: "8,6 anos-luz",
      idade: "Aproximadamente 242 milhões de anos",
      objetos: (
        <>
          Sirius A – estrela branca e a mais brilhante do sistema.
          <br />
          Sirius B – anã branca que orbita Sirius A.
        </>
      ),
      constelacao: (
        <>
          Canis Major
          <br />
          2 estrelas
        </>
      ),
      imagem:
        "https://www.espacotempo.com.br/wp-content/uploads/2024/08/sirius-997x1280.jpg",
    },

    {
      nome: "Sistema Procyon",
      tipo: "0 planetas confirmados",
      descricao:
        "Procyon é um sistema formado por duas estrelas. Procyon A é uma estrela branca e brilhante, enquanto Procyon B é uma anã branca, que é o núcleo remanescente de uma estrela que já evoluiu.",
      tipoEstelar: (
        <>
          Procyon A: F5IV-V
          <br />
          Procyon B: Anã branca
        </>
      ),
      distancia: "11,46 anos-luz",
      idade: "Aproximadamente 1,7 bilhão de anos",
      objetos: (
        <>
          Procyon A: estrela branca e mais brilhante do sistema.
          <br />
          Procyon B: anã branca que orbita Procyon A.
        </>
      ),
      constelacao: (
        <>
          Canis Minor
          <br />
          2 estrelas
        </>
      ),
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoh7655OshAeuMuhhf2YAt4j3doaby7whpIviGUijDoHr39vWFzm7Z9Pq&s=10",
    },

    {
      nome: "Epsilon Eridani",
      tipo: "1 planeta confirmado",
      descricao:
        "Epsilon Eridani é um sistema relativamente próximo formado por uma estrela semelhante ao Sol. Ela possui o planeta Epsilon Eridani b, que orbita a estrela a uma grande distância.",
      tipoEstelar: "Anã Laranja (K2V)",
      distancia: "10,5 anos-luz",
      idade: "Aproximadamente 800 milhões de anos",
      objetos: (
        <>
          Epsilon Eridani, estrela principal do sistema.
        </>
      ),
      constelacao: (
        <>
          Eridanus
          <br />
          1 estrela
        </>
      ),
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-h08FLCLKDjTVNU6VHM7HCleMti77-59UWHl2VdLLjTb63mWAKdrfunk&s=10",
    },
  ];
  return (
    <div className="sistemas-page">

      <header className="sistemas-header">

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
          <Link to="/explorar">Explorar</Link>
          <Link to="/planetas">Planetas</Link>

          <Link to="/sistemas" className="menu-ativo">
            Sistemas
          </Link>

          <Link to="/perfil">Meu Perfil</Link>
        </nav>

        <div className="usuario">
          <div className="usuario-icon">
            EC
          </div>

          <span>Elena Costa</span>

          <span className="separador">|</span>

          <button type="button" onClick={sair}>Sair</button>
        </div>

      </header>

      <main className="sistemas-conteudo">

        <div className="sistemas-titulo">

          <span>MAPEAMENTO ESTELAR</span>

          <h1>Sistemas Estelares</h1>

          <p>4 sistemas catalogados na base de dados</p>

        </div>

        <section className="sistemas-grid">

          {sistemas.map((sistema) => (

            <article
              className="sistema-card"
              key={sistema.nome}
            >

              <div className="sistema-imagem">

                <img
                  src={sistema.imagem}
                  alt={sistema.nome}
                />

                <span className="sistema-tipo">
                  {sistema.tipo}
                </span>

              </div>

              <div className="sistema-info">

                <h2>{sistema.nome}</h2>

                <p className="sistema-descricao">
                  {sistema.descricao}
                </p>

                <div className="sistema-dados">

                  <div>
                    <span>TIPO ESTELAR</span>
                    <p>{sistema.tipoEstelar}</p>
                  </div>

                  <div>
                    <span>DISTÂNCIA</span>
                    <p>{sistema.distancia}</p>
                  </div>

                  <div>
                    <span>IDADE</span>
                    <p>{sistema.idade}</p>
                  </div>

                </div>

                <div className="sistema-inferior">

                  <div className="bloco-objetos">

                    <span className="titulo-bloco">
                      OBJETOS NESTE SISTEMA
                    </span>

                    <p>{sistema.objetos}</p>

                  </div>

                  <div className="bloco-constelacao">

                    <span className="titulo-bloco">
                      CONSTELAÇÃO
                    </span>

                    <p>{sistema.constelacao}</p>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </section>

      </main>

      <footer className="sistemas-footer">
        © 2026 Cosmos. Todos os direitos reservados.
      </footer>

    </div>
  );
}

export default SistemasEstelares;
