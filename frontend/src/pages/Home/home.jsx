import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderRouter from '../components/HeaderRouter'
import './home.css'

function Home() {
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}')
  const nome = usuario.nome || 'Explorador'

  const [catalogo, setCatalogo] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/cards/explorar')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar o catálogo.')
        }

        return response.json()
      })
      .then((data) => {
        setCatalogo(data.slice(0, 5))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="pagina">

      <HeaderRouter />

      <main>

        <section className="boasVindas">
          <small>MISSÃO ATIVA · 8 DE SETEMBRO DE 2026</small>

          <h2>
            Bem-vindo, <span>{nome}</span>
          </h2>
        </section>

        <section className="estatisticas">

          <div>
            <small>Objetos catalogados</small>
            <strong>8</strong>
            <span>NO REPOSITÓRIO</span>
          </div>

          <div>
            <small>Objetos catalogados</small>
            <strong>4</strong>
            <span>MAPEADOS</span>
          </div>

          <div>
            <small>Objetos catalogados</small>
            <strong>2,4 mil</strong>
            <span>DO SISTEMA SOLAR</span>
          </div>

          <div>
            <small>Objetos catalogados</small>
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
              <Link to="/explorar">Ver</Link>
            </div>

            {catalogo.map((item) => (
              <div className="itemCatalogo" key={item.id_card}>

                <img
                  src={item.imagem_url}
                  alt={item.titulo}
                />

                <span>{item.titulo}</span>

                <Link to="/explorar">Ver</Link>

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

            <Link to="/explorar">Ver</Link>

            <h3>Sistemas Estelares</h3>

            <p>
              Um sistema estelar é formado por duas ou mais estrelas que
              permanecem ligadas pela gravidade, podendo também abrigar planetas,
              luas, asteroides e outros corpos celestes. Esses sistemas revelam
              a complexidade e a diversidade do universo.
            </p>

            <Link to="/sistemas">Ver</Link>

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