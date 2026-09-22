import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="site-logo">
        <strong>COSMOS</strong>
        <span>OBSERVATORY</span>
      </div>

      <nav aria-label="Navegação principal">
        <Link to="/home">Início</Link>
        <Link to="/explorar">Explorar</Link>
        <Link to="/planetas" aria-current="page">Planetas</Link>
        <Link to="/sistemas">Sistemas</Link>
        <Link to="/perfil">Meu Perfil</Link>
      </nav>
    </header>
  );
}

export default Header;
