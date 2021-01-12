import React from 'react';
import ".././style.css"



/*Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará
 luego para acceder a los detalles (los desarrollaremos más adelante)*/

 const Item = ({ id, title, description, price, pictureUrl}) =>{
    return(
        <div className='info'>
                <img src={pictureUrl} alt="" width='150px'/>
                <h3>{title}</h3>
                <p>{description}</p>
                <h2>${price}</h2>
                <a href="/itemDetail/">Ver detalle</a>
        </div>
    )



 }
 export default Item