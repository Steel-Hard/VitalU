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
import { GlobalProvider } from "./context/globalContext";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={
          <GlobalProvider>
            <Perfil />
          </GlobalProvider>
      } />
        <Route path="/perfil/config" element={
          <GlobalProvider>
            <PerfilConfig />
          </GlobalProvider>
        
        } />
        <Route path="/pesquisa" element={
          <GlobalProvider>
            <Pesquisa />
          </GlobalProvider>}
        />
        <Route path="/cadastro/alimento" element={
          <GlobalProvider>            
            <CadastroAlimento />
          </GlobalProvider>}
          />
      </Routes>
    </BrowserRouter>
  );
}
