import { Welcome, Login,Cadastro, PerfilConfig} from './pages';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/perfil/config' element={<PerfilConfig/>}/>
      </Routes>    
    </BrowserRouter>
  );
  
}
