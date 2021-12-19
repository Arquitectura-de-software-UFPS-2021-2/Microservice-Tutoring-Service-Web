import React from 'react'
import './publicarTutoria.css'
import FormularioTutoria from '../formulario/FormularioTutoria'

const PublicarTutoria = () => {
    return (
        <div className="postTutoria-container">
            <div className="posttutoria-innercontainer">
                <h2>Publicar Tutoria</h2>
                <div className="formulario">
                    <FormularioTutoria/>
                </div>
            </div>
        </div>
    )
}

export default PublicarTutoria
