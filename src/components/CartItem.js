import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '.././CartContext'
import { Button } from '@material-ui/core';

const CartItem = ({id, title, price, cantidad, pictureUrl})=>{
   
    const {removeItem } = useContext(CartContext)
    return(



        <div className="cart-item">

            <div className='item-imagen' >
            <img src={pictureUrl} alt="" width='100px'/>
            </div>
            <div className='item-info'>
            <div><h4>{title}</h4> </div>
            <div> <p>${price}</p></div>
            <div><h5>Cantidad: {cantidad}</h5></div>
            <div><h4>Total: ${cantidad*price}</h4> </div>
            <a className='boton-remove' onClick={ () => removeItem(id)} variant="contained" color="primary">
                Eliminar
            </a>
            </div>
            
        </div>
       



    )





}

export default CartItem