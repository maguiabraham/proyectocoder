import React, { useContext } from 'react'
import {CartContext} from '.././CartContext'
import CartItem from './CartItem'
import ".././style.css"


const CartList = () =>{

    const { cart, clear } = useContext(CartContext)

    return(


        <div className='cart-list'>
        {                       
        cart.map((product)=>
        <CartItem key={product.item.id} 
                id={product.item.id} 
                title={product.item.title} 
                price={product.item.price} 
                cantidad={product.cantidad} />)
        }

    </div>


)
    


}
export default CartList