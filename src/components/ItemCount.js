import { render } from "@testing-library/react"
import React, { useState } from "react" 
import ".././style.css"


const ItemCount = ( {stock,initial }) => {

    const [cantidad,setCantidad] = useState(initial)

    const aumentarCantidad = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const disminuirCantidad = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    const onAdd = () => {
        if(cantidad>0){
            alert(`Agrega ${cantidad}`)
        }
       
    }

    return (
        <div className="contador">
            <p>Stock disponible : {stock}</p>
        <div className="controles">
            <button className="botones" onClick={aumentarCantidad} >
                    <i>+</i>
            </button>
                <p className="cantidad" >{cantidad}</p>
            <button className="botones" onClick={disminuirCantidad} >
                    <i>-</i>
            </button>
        </div>
        <div>
            <button onClick={onAdd}><i>Agregar al carrito</i></button>
        </div>
                    
        </div>
    )
}

export default ItemCount