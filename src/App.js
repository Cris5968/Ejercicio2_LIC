
import './App.css';
import NavBar from "./Componentes/NavBar";
import Home from './Componentes/Home';
import Conversor from './Componentes/Conversor';
import { Component } from 'react';
import Instrucciones from './Componentes/Instrucciones';



function App() {
  let component
 switch(window.location.pathname){
  case "/home":
    component = <Home/>
    break
  
    case "/conversor":
      component = <Conversor/>
    break
    case "/instrucciones":
      component = <Instrucciones/>
      break

 }
  return (
    <div className="App">
     <NavBar/>
     {component}
     
     
     
    </div>
  );
}

export default App;
