import { Welcome, Login, Perfil} from './pages';

import {BrowserRouter,  Route,  Routes} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>    
    </BrowserRouter>
  );
  
}
