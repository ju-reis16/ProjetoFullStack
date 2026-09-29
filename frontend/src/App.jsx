import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./pages/components/ProtectedRoute";

import Laing from "./pages/Laing/laing";
import LoginCadastro from "./pages/login/login";

import Home from "./pages/Home/home";
import Explorar from "./pages/Explorar/Explorar";
import Planetas from "./pages/Planetas/Planetas";
import SistemasEstelares from "./pages/Sistemas/SistemasEstelares";

import Admin from "./pages/Admin/admin";
import Profile from "./pages/Profile/Profile";
import Card from "./pages/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Laing />} />
        <Route path="/login" element={<LoginCadastro />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/planetas" element={<Planetas />} />
          <Route path="/sistemas" element={<SistemasEstelares />} />
          <Route path="/card" element={<Card />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>

        <Route element={<ProtectedRoute adminOnly />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;