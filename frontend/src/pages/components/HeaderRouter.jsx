import Header from "./Header";
import AdminHeader from "./AdminHeader";

function HeaderRouter() {
  const usuario = JSON.parse(
    localStorage.getItem("usuario") || "{}"
  );

  if (usuario.tipo === "admin") {
    return <AdminHeader />;
  }

  return <Header />;
}

export default HeaderRouter;