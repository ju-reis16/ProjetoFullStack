import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const usuario = JSON.parse(
    localStorage.getItem("usuario") || "{}"
  );

  const nome = usuario.nome || "Explorador";

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login", { replace: true });
  }


  return (
    <header className="site-header">
      <div className="site-logo">
        <div className="site-logo-icon">◎</div>

        <div>
          <strong>COSMOS</strong>
          <span>OBSERVATORY</span>
        </div>
      </div>

      <nav aria-label="Navegação principal">
        <Link className={location.pathname === "/home" ? "ativo" : ""} to="/home">
          Início
        </Link>

        <Link className={location.pathname === "/explorar" ? "ativo" : ""} to="/explorar">
          Explorar
        </Link>

        <Link className={location.pathname === "/planetas" ? "ativo" : ""} to="/planetas">
          Planetas
        </Link>

        <Link className={location.pathname === "/sistemas" ? "ativo" : ""} to="/sistemas">
          Sistemas
        </Link>

        <Link className={location.pathname === "/perfil" ? "ativo" : ""} to="/perfil">
          Meu Perfil
        </Link>
      </nav>
      <div className="usuario">
        <span>👤</span>
        <p>{nome}</p>

        <button
          type="button"
          onClick={sair}
        >
          Sair
        </button>
      </div>
    </header>
  );
}

export default Header;