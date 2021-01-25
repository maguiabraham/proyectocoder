
import React, { useState } from "react" 
import ".././style.css"
import ItemCount from './ItemCount'



const ItemDetail = ({item}) =>{




    
    return(
        <div className='info'>
                <img src={item.pictureUrl} alt="" width='150px'/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h2>${item.price}</h2>
                <ItemCount initial={item.initial} stock={item.stock} item={item}/>
        </div>
    )

}




export default ItemDetail