import React, { useState } from "react";
import "./modales.css";
import { guardarCategoria } from "../services";

const CategoriaModal = (props) => {
  const [nameCategoria, setCategoria] = useState({name:""});
  const saveCategoria = () =>{
    guardarCategoria(nameCategoria)
    console.log(nameCategoria)
    props.onClose()
  }
  const handleChange = (e)=>{
    e.preventDefault()
    setCategoria({
      ...nameCategoria,
      [e.target.name]: e.target.value
    })
  }
  const {name} = nameCategoria
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Crear Categoría</h4>
        </div>
        <div className="modal-body">
        <input
             name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Crear Categoria"
          />
        </div>
        <div className="modal-footer">
          <button type="submit"  onClick={()=>saveCategoria(nameCategoria)} className="button-submit">
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

export default CategoriaModal;
