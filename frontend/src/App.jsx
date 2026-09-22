import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginCadastro from "./pages/login/login";
import Home from "./pages/Home/home";
import Explorar from "./pages/Explorar/Explorar";
import Planetas from "./pages/Planetas/Planetas";
import SistemasEstelares from "./pages/Sistemas/SistemasEstelares";
import Perfil from "./pages/Admin/admin";
import Card from "./pages/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCadastro />} />
        <Route path="/login" element={<LoginCadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/planetas" element={<Planetas />} />
        <Route path="/sistemas" element={<SistemasEstelares />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;