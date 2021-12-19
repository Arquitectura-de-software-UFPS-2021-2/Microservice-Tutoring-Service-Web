import React from 'react'
import './catalogo.css'

const CatalogoTematicas = ({temas}) => {
   
    return (
        <div className="catalogo" >
            <div className="item-container">
                <h2> Catalogo de Temáticas </h2>
                {temas.map((tema)=>(
                    <div className="item-catalogo" > 
                        <p>{tema.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CatalogoTematicas
