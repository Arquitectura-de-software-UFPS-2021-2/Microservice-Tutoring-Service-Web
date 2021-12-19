import React, { useState } from "react";
import "./modales.css";
import { guardarTema } from "../services";

const TemaModal = (props) => {
 const [nameTema, setNameTema] = useState({name:""});

  const saveTema = () =>{
    guardarTema(nameTema)
    console.log(nameTema)
    props.onClose()
  }
  const handleChange = (e)=>{
    e.preventDefault()
    setNameTema({
      ...nameTema,
      [e.target.name]: e.target.value
    })
  }
const {name} = nameTema
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Crear Tema</h4>
        </div>
        <div className="modal-body">
          <input
             name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Crear tema"
          />
        </div>
        <div className="modal-footer">
          <button type="submit" onClick={()=>saveTema(nameTema)} className="button-submit">
            {" "}
            Guardar{" "}
          </button>
          <button onClick={props.onClose} className="button-close">
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemaModal;
