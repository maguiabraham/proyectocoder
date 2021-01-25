import React, { useContext } from 'react';
import { CartContext } from '.././CartContext'

const CartItem = (id, title, price, cantidad)=>{

    return(
        <div>
            <h3>{title}</h3>
            <h2>${price}</h2>
            <h3>{cantidad}</h3>
        </div>
       



    )





}

export default CartItem