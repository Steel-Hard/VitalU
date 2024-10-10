import {
  Welcome,
  Login,
  Cadastro,
  PerfilConfig,
  Pesquisa,
  Perfil,
  CadastroAlimento,
} from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfil/config" element={<PerfilConfig />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/cadastro/alimento" element={<CadastroAlimento />} />
      </Routes>
    </BrowserRouter>
  );
}
