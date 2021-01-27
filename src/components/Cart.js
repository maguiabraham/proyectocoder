
import React, { useContext } from 'react'
import {CartContext} from '.././CartContext'
import CartList from './CartList'
import ".././style.css"


const Cart = () =>{

    const { cart, clear } = useContext(CartContext)


    return(

        <div className='carrito'>
            <div className="cart-list">
                <CartList listaCarrito={cart}/>
                <button onClick={clear}>X Borrar carrito</button>
            </div>
        </div>

    )

}

export default Cart