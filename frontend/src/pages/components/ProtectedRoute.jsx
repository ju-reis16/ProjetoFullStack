import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute({ adminOnly = false }) {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const usuarioSalvo = localStorage.getItem("usuario");

  if (!token || !usuarioSalvo) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  let usuario;

  try {
    usuario = JSON.parse(usuarioSalvo);
  } catch {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    return <Navigate to="/login" replace />;
  }

  if (adminOnly && usuario.tipo !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;