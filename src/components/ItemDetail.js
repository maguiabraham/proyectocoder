
import React, { useState, useContext } from "react" 
import { CartContext } from ".././CartContext";
import ".././style.css"
import ItemCount from './ItemCount'



const ItemDetail = ({item}) =>{

   








    
    return(
        <div className='info'>
                <img src={item.pictureUrl} alt="" width='150px'/>
                <h3>{item.title}</h3>
                <p>{item.descripcion}</p>
                <h2>${item.price}</h2>
                <ItemCount stock={item.stock} initial={1 }item={item} id={item.id}/>
        </div>
    )

}




export default ItemDetail