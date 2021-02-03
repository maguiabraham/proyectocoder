
import React, { useContext } from 'react'
import {CartContext} from '.././CartContext'
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import ".././style.css"


const Cart = () =>{

    const { cart, clear, calcularTotal} = useContext(CartContext)

    return(

        <div className='carrito'>

     
            
            { cart.length === 0 ? ( 
            <>
            <div>
            <h3>Tu carrito está vacio...</h3> 
            <Link to={"/"}><h5>Volver al catálogo</h5></Link>
            </div>
            </>
            )    
            :(
               <>
                <div className="cartItems">
            { cart.length > 0 && cart.map((product)=>
                <CartItem key={product.item.id} 
                        id={product.item.id} 
                        pictureUrl={product.item.pictureUrl}
                        title={product.item.title} 
                        price={product.item.price} 
                        cantidad={product.cantidad} />)
        }
        </div>
        <div className='boton-borrarcarrito' >
            <h4>Precio final: ${calcularTotal()}</h4>
            <button  onClick={clear}>X Borrar carrito</button>
        </div>
               </>
            )
            }

           
            



        </div>

    )

}

export default Cart