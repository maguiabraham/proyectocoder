import React, { useContext } from 'react'
import CartItem from './CartItem'
import ".././style.css"


const CartList = (listaCarrito) =>{


    return(


        <div className='cart-list'>
        {                       
        listaCarrito.map((product)=>
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