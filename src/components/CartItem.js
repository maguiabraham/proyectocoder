import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '.././CartContext'

const CartItem = (id, title, price, cantidad)=>{
   
        const { cart, removeItem } = useContext(CartContext)
    return(



        <div className='cart-item'>
            <h3>{title}</h3>
            <h2>${price}</h2>
            <h3>Cantidad:{cantidad}</h3>
            <Link onClick={removeItem(id)}>
                Eliminar
            </Link>
        </div>
       



    )





}

export default CartItem