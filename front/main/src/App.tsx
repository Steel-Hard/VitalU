import React from 'react';
import './App.css';
import { Welcome } from './pages';

import {BrowserRouter,  Route,  Routes} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
      </Routes>    
    </BrowserRouter>
  );
  
}
