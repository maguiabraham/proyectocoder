
import React, { useContext } from 'react'
import {CartContext} from '.././CartContext'
import CartItem from './CartItem'
import ".././style.css"


const Cart = () =>{

    const { cart, clear} = useContext(CartContext)


    return(

        <div className='carrito'>


            <div className="cartItems">
                {cart.length > 0 ? cart.map( product =>
                <CartItem key={product.id} 
                id={product.id} 
                title={product.title} 
                price={product.price} 
                cantidad={product.cantidad} />):<h3>tu carrito esta vacio</h3>}
            </div>

        </div>

    )

}

export default Cart