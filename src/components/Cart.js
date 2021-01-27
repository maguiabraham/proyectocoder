
import React, { useContext } from 'react'
import {CartContext} from '.././CartContext'
import CartItem from './CartItem'
import ".././style.css"


const Cart = () =>{

    const { cart, clear} = useContext(CartContext)
    return(

        <div className='carrito'>
            <div className="cart-list">
            {                       
            cart.map((product)=>
            <CartItem key={product.item.id} 
                    id={product.item.id} 
                    title={product.item.title} 
                    price={product.item.price} 
                    cantidad={product.cantidad} />)
                
            }
            
            </div>

            <button onClick={clear}>X Borrar carrito</button>


            





        </div>

    )

}

export default Cart