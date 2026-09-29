import { Link, useLocation, useNavigate } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
  const nome = usuario.nome || "Admin";

  const iniciais = nome
    .split(" ")
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login", { replace: true });
  }

  return (
    <header className="admin-site-header">
      <div className="admin-site-logo">
        <div className="admin-site-logo-icon">◎</div>

        <div>
          <strong>COSMOS</strong>
          <span>OBSERVATORY</span>
        </div>
      </div>

      <nav aria-label="Navegação administrativa">
        <Link
          className={location.pathname === "/admin" ? "ativo" : ""}
          to="/admin"
        >
          Início
        </Link>

        <Link
          className={location.pathname === "/explorar" ? "ativo" : ""}
          to="/explorar"
        >
          Explorar
        </Link>

        <Link
          className={location.pathname === "/planetas" ? "ativo" : ""}
          to="/planetas"
        >
          Planetas
        </Link>

        <Link
          className={location.pathname === "/sistemas" ? "ativo" : ""}
          to="/sistemas"
        >
          Sistemas
        </Link>

        <Link
          className={location.pathname === "/card" ? "ativo" : ""}
          to="/card"
        >
          Administração
        </Link>
      </nav>

      <div className="admin-site-profile">
        <b>{iniciais}</b>

        <span>{nome}</span>

        <i>|</i>

        <button type="button" onClick={sair}>
          Sair
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;