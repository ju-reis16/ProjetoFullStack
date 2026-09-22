import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginCadastro from "./pages/LoginCadastro";
import Home from "./pages/Home";
import Explorar from "./pages/Explorar";
import Planetas from "./pages/Planetas";
import SistemasEstelares from "./pages/SistemasEstelares";
import Perfil from "./pages/Perfil";

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;