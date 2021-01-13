import React from 'react';
import ".././style.css"





const ItemDetail = ({item}) =>{
     
    return(
        <div className='info'>
                <img src={item.pictureUrl} alt="" width='150px'/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h2>${item.price}</h2>
        </div>
    )

}




export default ItemDetail