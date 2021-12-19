import React, { useEffect, useState } from "react";
import "./formTutoria.css";
import CategoriaModal from "../modales/CategoriaModal";
import TemaModal from "../modales/TemaModal";
import axios from "axios";
import { guardarTutoria } from "../services";

const FormularioTutoria = () => {
  const [showTema, setshowTema] = useState(false);
  const [showCategoria, setshowCategoria] = useState(false);
  const [listaTemas, setListaTema] = useState([]);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [listSubjects, setListSubjects] = useState([]);
  const [formu, setFormu] = useState({
    dateEnd: "",
    dateStrat: "",
    description: "",
    id: 0,
    idcategory: 0,
    lissubjets: listSubjects,
    reason: "",
    state: true,
    userCreator: 1151698,
    userTutor: 1151698,
  });

  const listarTemas = () => {
    axios
      .get(`http://34.199.225.252:8080/tutoriaServicio/tema/list`)
      .then((res) => {
        const respuesta = res.data;
        setListaTema(respuesta);
        return respuesta;
      });
  };

  const listarCategorias = () => {
    axios
      .get(`http://34.199.225.252:8080/tutoriaServicio/categoria/list`)
      .then((res) => {
        const respuesta = res.data;
        setListaCategorias(respuesta);
        return respuesta;
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormu({
      ...formu,
      [e.target.name]: e.target.value,
    });
    console.log(formu);
  };
  const handleChangeSelects = (e) => {
    e.preventDefault();
    setFormu({
      ...formu,
      [e.target.name]: parseInt(e.target.value),
    });
    console.log(formu);
  };
  const handleChangeListSbjects = (e) => {
    e.preventDefault();
    setListSubjects(...listSubjects, listSubjects.push(parseInt(e.target.value)))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    guardarTutoria(formu);
    console.log(JSON.stringify(localStorage.getItem('token')))
  };

  useEffect(() => {}, []);

  return (
    <div id="formulario" className="container-formulario">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-first-row">
          <div className="form-input">
            <label>Titulo:</label>
            <input onChange={handleChange} type="text" name="reason" />
          </div>
          <div className="form-input">
            <label>Tema:</label>
            <select
              name="lissubjets"
              onChange={handleChangeListSbjects}
              onClick={() => listarTemas()}
              multiple-
            >
              {listaTemas.map((tema) => (
                <option value={parseInt(tema.id, 10)}> {tema.name} </option>
              ))}
            </select>
            <a
              className="form-modal-button"
              onClick={() => {
                setshowTema(true);
                console.log("hola");
              }}
            >
              Crear tema
            </a>
          </div>
          <div className="form-input">
            <label>Categoria:</label>
            <select
              name="idcategory"
              onChange={handleChangeSelects}
              onClick={() => listarCategorias()}
            >
              {listaCategorias.map((categoria) => (
                <option value={categoria.id}> {categoria.name} </option>
              ))}
            </select>

            <a
              className="form-modal-button"
              onClick={() => {
                setshowCategoria(true);
                console.log("hola");
              }}
            >
              Crear categoria
            </a>
          </div>
        </div>
        <div className="form-second-row">
          <div className="form-input">
            <label>Fecha de inicio::</label>
            <input
              onChange={handleChange}
              name="dateStrat"
              type="datetime-local"
            />
          </div>
          <div className="form-input">
            <label>Fecha de terminacion::</label>
            <input
              onChange={handleChange}
              name="dateEnd"
              type="datetime-local"
            />
          </div>
        </div>
        <div className="form-input">
          <label>Descripción:</label>
          <textarea
            onChange={handleChange}
            name="description"
            className="form-textarea"
          />
        </div>
        <div className="form-submit">
          <input
            type="submit"
            className="submit-button"
            value="Publicar Tutoria"
          />
        </div>
      </form>
      {showTema ? (
        <TemaModal onClose={() => setshowTema(false)} show={showTema} />
      ) : null}
      {showCategoria ? (
        <CategoriaModal
          onClose={() => setshowCategoria(false)}
          show={showCategoria}
        />
      ) : null}
    </div>
  );
};

export default FormularioTutoria;
