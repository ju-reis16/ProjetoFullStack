import './home.css'

const catalogo = [
  {
    nome: 'Kepler-452b',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Kepler-452b_artist_concept.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original&#39'
  },
  {
    nome: 'HD 189733b',
    imagem: 'https://s2-oglobo.glbimg.com/TilppykMTZI_YY06G0yTWmwIDUs=/0x0:1200x900/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/k/G/ANvMrnTWCKiKiA1HaBRw/planeta-nasa.webp'
  },
  {
    nome: 'Proxima Centauri b',
    imagem: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=100&q=80&#39'
  },
  {
    nome: 'TRAPPIST-1e',
    imagem: 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=100&q=80&#39'
  },
  {
    nome: 'Nebulosa do Caranguejo',
    imagem: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=100&q=80&#39'
  }
]
function Home() {
  return (
    <div className="pagina">

      <header className="cabecalho">

        <div className="logo">
          <div className="logoIcon">
            ◎
          </div>

          <div>
            <h1>COSMOS</h1>
            <span>OBSERVATORY</span>
          </div>
        </div>

        <nav>
          <a className="ativo">Início</a>
          <a>Explorar</a>
          <a>Planetas</a>
          <a>Sistemas</a>
          <a>Meu Perfil</a>
        </nav>

        <div className="perfil">
          <b>EC</b>
          <span>Elena Costa</span>
          <i>|</i>
          <a>Sair</a>
        </div>

      </header>

      <main>

        <section className="boasVindas">
          <small>MISSÃO ATIVA · 8 DE SETEMBRO DE 2026</small>

          <h2>
            Bem - Vinda, <span>Elena</span>
          </h2>
        </section>

        <section className="estatisticas">

          <div>
            <small>Objetivos catalogados</small>
            <strong>8</strong>
            <span>NO REPOSITÓRIO</span>
          </div>

          <div>
            <small>Objetivos catalogados</small>
            <strong>4</strong>
            <span>MAPEADOS</span>
          </div>

          <div>
            <small>Objetivos catalogados</small>
            <strong>2,4 mil</strong>
            <span>DO SISTEMA SOLAR</span>
          </div>

          <div>
            <small>Objetivos catalogados</small>
            <strong>3</strong>
            <span>CANDIDATOS</span>
          </div>

        </section>

        <section className="principal">

          <div className="planeta">

            <div className="etiquetas">
              <span>✦ Exoplaneta</span>
              <span>Destaque</span>
            </div>

            <img
              src="https://www.tupi.fm/wp-content/uploads/2026/08/Planet_orbiting_Sun-like_star_202608090015-1024x572.jpeg"
              alt="Kepler-452b"
            />

            <div className="infoPlaneta">

              <h3>Kepler-452b</h3>

              <p>
                Conhecido como o “primo da Terra”, Kepler-452b orbita uma estrela
                do tipo G2 a 1.400 anos-luz. Com 60% maior que a Terra, é um dos
                candidatos mais estudados à presença de vida extraterrestre.
              </p>

              <div className="dados">

                <div>
                  <small>DISTÂNCIA</small>
                  <b>1.400 anos-luz</b>
                </div>

                <div>
                  <small>DIÂMETRO</small>
                  <b>17.280 km</b>
                </div>

                <div>
                  <small>PERÍODO ORBITAL</small>
                  <b>384,8 dias</b>
                </div>

              </div>

            </div>

          </div>
          <div className="catalogo">

            <div className="tituloCatalogo">
              <h3>Catálogo Recente</h3>
              <a>Ver</a>
            </div>

            {catalogo.map((item) => (
              <div className="itemCatalogo" key={item.nome}>
                <img src={item.imagem} alt={item.nome} />
                <span>{item.nome}</span>
                <a>Ver</a>
              </div>
            ))}

          </div>

        </section>

        <section className="exploracao">

          <div className="imagemEspaco"></div>

          <div className="conteudoExploracao">

            <small>Modo Exploração</small>

            <h2>Navegar pelo Universo</h2>

            <p>
              Entre estrelas e constelações, o universo revela sua imensidão.
              Explore o céu noturno, descubra diferentes formações celestes e
              aproxime-se dos mistérios que tornam o cosmos tão fascinante.
            </p>

            <a>Ver</a>

            <h3>Sistemas Estelares</h3>

            <p>
              Um sistema estelar é formado por duas ou mais estrelas que
              permanecem ligadas pela gravidade, podendo também abrigar planetas,
              luas, asteroides e outros corpos celestes. Esses sistemas revelam
              a complexidade e a diversidade do universo.
            </p>

            <a>Ver</a>

            <span className="sistemas">
              4 sistemas disponíveis
            </span>

          </div>

        </section>

      </main>

      <footer>
        © 2026 Cosmos. Todos os direitos reservados.
      </footer>

    </div>
  )
}

export default Home