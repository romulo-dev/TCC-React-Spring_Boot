import { Component } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header';

import Janela from './components/Janela/Janela'
import Login from './components/Login/Login';
import Lider from './components/Lider/Lider'
import Atleta from './components/Atleta/Atleta';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import CadastroAtleta from './components/CadastroAtleta/CadastroAtleta';
import InfoAtleta from './components/InfoAtleta/InfoAtleta';
import LoginLider from './components/LoginLider/LoginLider';
import Tabela from './components/Tabela/Tabela';

const PrivateRoute = ({ children, redirectTo }) => {
  var isAuthenticated = localStorage.getItem("token");
  console.log("isAuth: ", isAuthenticated);
  //return isAuthenticated ? children : <Navigate to={redirectTo} />;
  if(isAuthenticated === "true"){
    //console.log("Ok");
    //console.log("filho" + children);
    return children;
  }
  else{
    //alert("não foi")
    return <Navigate to={redirectTo} />
  }
}




function App() {
  return (
    <BrowserRouter>
      <Routes>
        * <Route
            path="/lider"
            element={
              <PrivateRoute redirectTo="/">
                <Lider />
              </PrivateRoute>
            }
          /> 
          <Route
            path="/atleta"
            element={
              <PrivateRoute redirectTo="/">
                <Atleta />
              </PrivateRoute>
            }
          />
          <Route
            path="/time/:id"
            element={
              // <PrivateRoute redirectTo="/">
              //   <Tabela />
              // </PrivateRoute>
              <Tabela />
            }
          /> 
          <Route
            path="/info-atleta/:id"
            element={
              <PrivateRoute redirectTo="/">
                <InfoAtleta />
              </PrivateRoute>
              // <InfoAtleta />
            }
          /> 
        <Route path="/" element={<Login />} />
        <Route path="/login_lider" element={<LoginLider />} />
        <Route path="/cadastro-atleta" element={<CadastroAtleta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
