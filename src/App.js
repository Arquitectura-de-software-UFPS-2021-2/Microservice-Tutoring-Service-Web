import { Fragment, useEffect } from 'react';
import './App.css';
import PublicarTutoria from './components/publicar/PublicarTutoria'; 
import SidebarTutorias from './components/sidebartutorias/SidebarTutorias';
import { iniciarSesion } from './components/services';

function App() {
    iniciarSesion()
  return (
    <Fragment>
    <div className="App">
      <SidebarTutorias></SidebarTutorias>
      <PublicarTutoria></PublicarTutoria>
    </div>
    <div className="App">
      
    </div>
    </Fragment>
  );
}

export default App;
