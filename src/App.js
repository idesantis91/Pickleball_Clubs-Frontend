import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle'
import { Switch, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div classname="App">
      <GlobalStyle />
      <Nav /> 
      <Routes>  
         
      </Routes>
    </div>
  );
}

export default App;
