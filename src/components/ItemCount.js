import { render } from "@testing-library/react"
import { Link } from 'react-router-dom'
import React, { useState } from "react" 
import ".././style.css"


const ItemCount = ( {item, agregar, quitar, contador }) => {

    const [ open, setOpen ] = useState(false)

    function addAndOpen(item, contador){
        setOpen(true)
    }

    return (
        <div className="contador">
            <p>Stock: {item.stock}</p>
        <div className="controles">
            <button className="botones" onClick={agregar} >
                    <i>+</i>
            </button>
                <p className="cantidad" >{contador}</p>
            <button className="botones" onClick={quitar} >
                    <i>-</i>
            </button>
        </div>

            {!open ? (<div>
                
                  <button onClick={ () => addAndOpen(item, contador)}>
                  <h3>Agregar al carrito </h3>
                  </button>
                
                </div>)
                :(<div>
                <Link to="/cart">
                    <button>
                    <h3>Terminar la compra</h3>
                    </button>
                </Link>
            </div>)     
            }


        </div>

        
      
    
    )
}

export default ItemCount