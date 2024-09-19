import { Welcome, Login,Cadastro, PerfilConfig} from './pages';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import Perfil from './pages/Perfil';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/perfil/config' element={<PerfilConfig/>}/>
      </Routes>    
    </BrowserRouter>
  );
  
}
