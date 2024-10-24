import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Reclamation } from './pages/Reclamation/Reclamation';
import { Notfoundpage } from './pages/NotFoundPage/Notfoundpage';
import { useForm, FormProvider } from "react-hook-form";
import './styles/index.css'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Test } from './pages/test/test';
import { ExaminationExpires } from './components/Examination/ExaminationExpires';



function App() {

  const methods = useForm({
    mode: 'onBlur'
  })


  return (
    <div className="App">
      <FormProvider {...methods}>
        <ExaminationExpires/>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="reclamation" element={<Reclamation/>}/>
              <Route path="test" element={<Test/>}/>
              <Route path="*" element={<Notfoundpage/>}/>
            </Route>
          </Routes>
      </FormProvider>
    </div>
  );
}

export default App;
