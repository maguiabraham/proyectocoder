import { render } from "@testing-library/react"
import { CartContext } from ".././CartContext";
import { Link } from 'react-router-dom'
import React, { useState, useContext } from "react" 
import ".././style.css"


const ItemCount = ( {item, initial, stock, id}) => {

    const {addItem, cart} = useContext(CartContext)

    const [ open, setOpen ] = useState(false)
    const [ contador, setContador ] = useState(initial)

    function agregar(){
        if (contador < stock ){
            setContador(contador+1)
        }
    }

    
    function quitar() {
        if (contador > initial ){
            setContador(contador-1)
        }
    }

    function addAndOpen(){
        addItem(item, contador, item.id)
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
                
                  <button onClick={addAndOpen}> 
                  Agregar al carrito
                  </button>
                
                </div>)
                :(<div>
                <Link to='/:cart'>
                   Terminar la compra
                </Link>
            </div>)     
            }


        </div>

        
      
    
    )
}

export default ItemCount