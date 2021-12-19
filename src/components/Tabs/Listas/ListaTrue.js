import axios from "axios";
import React, { useEffect, useState } from "react";

const ListaTrue = () => {
    const [trueTutoring, setTrueTutoring] = useState([]);

  const getAllTutoring = () => {
    axios
      .get(`http://34.199.225.252:8080/tutoriaServicio/tutoria/list/activas`)
      .then((res) => {
        console.log(res.data);
        const respuesta = res.data
        setTrueTutoring(respuesta)
      });
  };
  useEffect(() => {
    getAllTutoring();
  }, []);
  return (
    <div>
      <table id="example" className="display" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Tema</th>
            <th>Categoria</th>
            <th>Fecha inicio</th>
            <th>Fecha fin</th>
          </tr>
        </thead>
        <tbody>
            {trueTutoring.map((tutoria)=>(
                <tr >
                    <td>{tutoria.id}</td>
                    <td>{tutoria.reason}</td>
                    <td>{tutoria.description}</td>
                    <td>{tutoria.lissubjets}</td>
                    <td>{tutoria.category}</td>
                    <td>{tutoria.dateStrat}</td>
                    <td>{tutoria.dateEnd}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTrue
