import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Reclamation } from './pages/Reclamation/Reclamation';
import { useForm, FormProvider } from "react-hook-form";
import './styles/index.css'


function App() {

  const methods = useForm({
    mode: 'onBlur'
  })


  return (
    <div className="App">
      <FormProvider {...methods}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="reclamation" element={<Reclamation/>}/>
          </Route>
        </Routes>
      </FormProvider>
    </div>
  );
}

export default App;
