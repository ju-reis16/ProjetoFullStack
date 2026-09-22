import "./landing.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="cosmos-page">
      <header className="header">
        <div className="cosmos-logo">
          <div className="cosmos-logo-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="cosmos-logo-text">
            <strong>COSMOS</strong>
            <small>OBSERVATORY</small>
          </div>
        </div>

        <nav className="nav">
          <Link to="/login">Entrar</Link>
          <Link to="/login" className="nav-button">Criar Conta</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="badge">
          PLATAFORMA DE EXPLORAÇÃO ASTRONÔMICA
        </div>

        <h1>
          Explore
          <br />
          <span>O Universo</span>
        </h1>

        <p>
          Catalogue planetas, galáxias e nebulosas. Navegue por
          <br />
          sistemas estelares e expanda os limites do conhecimento astronômico.
        </p>

        <div className="buttons">
          <Link to="/login" className="primary-button">
            Iniciar Exploração
          </Link>

          <Link to="/login" className="secondary-button">
            Já tenho conta
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <strong>8</strong>
          <span>Objetos Catalogados</span>
        </div>

        <div className="stat">
          <strong>4</strong>
          <span>Sistemas Estelares</span>
        </div>

        <div className="stat">
          <strong>2,5M</strong>
          <span>Anos-luz de Alcance</span>
        </div>
      </section>
    </main>
  );
}

export default App;