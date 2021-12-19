import { useState } from "react";
import "../../App.css";
import ListaAll from "./Listas/ListaAll";
import ListaFalse from "./Listas/ListaFalse";
import ListaTrue from "./Listas/ListaTrue";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-tabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tutorias
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tutorias Activas
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tutorias inactivas
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Tutorias</h2>
          <ListaAll/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Tutorias Activas</h2>
          <ListaTrue/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Tutorias Terminadas</h2>
          <ListaFalse/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
