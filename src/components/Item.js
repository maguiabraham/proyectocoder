import React from 'react';
import ".././style.css"



/*Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará
 luego para acceder a los detalles (los desarrollaremos más adelante)*/

 const Item = ({id, titulo, precio, imagen}) =>{

    return(

            
            <div className='info'>
                <img src={imagen} alt="" width='150px'/>
                <h3>{titulo}</h3>
                <h2>{precio}</h2>
            </div>



        

    )



 }
 export default Item