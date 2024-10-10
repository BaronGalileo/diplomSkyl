import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Test } from './components/test/Test';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Reclamation } from './pages/Reclamation/Reclamation';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="reclamation" element={<Reclamation/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
