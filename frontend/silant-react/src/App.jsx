import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Notfoundpage } from './pages/NotFoundPage/Notfoundpage';
import { useForm, FormProvider } from "react-hook-form";
import './styles/index.css'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Test } from './pages/test/test';
import { ExaminationExpires } from './components/Examination/ExaminationExpires';
import { TemplateElement } from './pages/TemplateElements/TemlateElement';
import { MachinePage } from './pages/MachinePage/MachinePage';



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
              <Route path="carmodel/:id" element={<TemplateElement path={"carmodel"}/>}/>
              <Route path="enginemodel/:id" element={<TemplateElement path={"enginemodel"}/>}/>
              <Route path="transmissionmodel/:id" element={<TemplateElement path={"transmissionmodel"}/>}/>
              <Route path="drivingaxlemodel/:id" element={<TemplateElement path={"drivingaxlemodel"}/>}/>
              <Route path="modelofacontrolledbridge/:id" element={<TemplateElement path={"modelofacontrolledbridge"}/>}/>
              <Route path="typeofservice/:id" element={<TemplateElement path={"typeofservice"}/>}/>
              <Route path="failurenode/:id" element={<TemplateElement path={"failurenode"}/>}/>
              <Route path="recoverymethod/:id" element={<TemplateElement path={"recoverymethod"}/>}/>
              <Route path="machine/:id" element={<MachinePage path={"machine"}/>}/>
              <Route path="*" element={<Notfoundpage/>}/>
            </Route>
          </Routes>
      </FormProvider>
    </div>
  );
}

export default App;
