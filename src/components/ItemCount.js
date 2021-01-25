import { render } from "@testing-library/react"
import { CartContext } from ".././CartContext";
import { Link } from 'react-router-dom'
import React, { useState, useContext } from "react" 
import ".././style.css"


const ItemCount = ( {item, initial, stock}) => {

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


    function addAndOpen(item, contador){
        addItem(item, contador)
        setOpen(true)
        console.log(cart);
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
                
                  <button onClick={addAndOpen({item}, {contador})}> //recibe lo que hay en el contador y el item
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