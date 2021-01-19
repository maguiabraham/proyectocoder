
import React, { useState } from "react" 
import ".././style.css"
import ItemCount from './ItemCount'





const ItemDetail = ({item, stock, initial}) =>{
     
    
    const [ contador, setContador ] = useState(initial)

    
    function agregar(){
        if (contador < stock ){
            setContador(contador+1)
        }
    }

    
    function quitar() {
        if (contador > initial ){
            setContador(contador-1)
        }
    }





    return(
        <div className='info'>
                <img src={item.pictureUrl} alt="" width='150px'/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h2>${item.price}</h2>
                <ItemCount initial={initial} stock={item.stock} item={item} agregar={agregar} quitar={quitar} contador={contador}/>
        </div>
    )

}




export default ItemDetail