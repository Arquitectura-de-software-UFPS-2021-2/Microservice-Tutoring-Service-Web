import React, { useEffect, useState } from 'react'
import './sidebarTutoria.css'
import CatalogoTematicas from '../catalogo/CatalogoTematicas'
import ufps1 from '../assets/ufps1.PNG'
import plus from '../assets/plus.png'
import axios from 'axios'

const SidebarTutorias = () => {
    const [temas, setTemas] = useState([''])
    useEffect(() => {
          axios.get(`http://34.199.225.252:8080/tutoriaServicio/tema/list`)
            .then(res => {
              const respuesta = res.data;
              console.log(respuesta);
              setTemas(respuesta);
              
            })
          
            console.log('STATEEE',temas);
      }, [])
    return (
        <div className="sidebarTutoria-container">
            <div className="buscador">
                <form>
                    <label>Buscar:</label>
                    <input />
                </form>
            </div>

            <div className="buscador">
                <button className="boton-publicar"  href="">
                    <p>Publicar Tutoria: </p> 
                    <img src={plus} style={{width:"30px", height:"30px"}}/> 
                </button>
            </div>
            <CatalogoTematicas temas={temas}/>
            <div>
                <img style={{width:'100%',boxShadow: '0px 6px 18px #00000034'}} src={ufps1} />
            </div>
        </div>
    )
}

export default SidebarTutorias
