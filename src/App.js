import { Fragment, useEffect } from 'react';
import './App.css';
import PublicarTutoria from './components/publicar/PublicarTutoria'; 
import SidebarTutorias from './components/sidebartutorias/SidebarTutorias';
import { iniciarSesion } from './components/services';
import Tabs from './components/Tabs/Tabs';

function App() {
    iniciarSesion()
  return (
    <Fragment>
    <div className="App">
      <SidebarTutorias></SidebarTutorias>
      <PublicarTutoria></PublicarTutoria>
    </div>
    <div className="listados">
      <Tabs/>
    </div>
    </Fragment>
  );
}

export default App;
