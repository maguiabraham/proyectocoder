/*ItemList.js Es un agrupador de un set de componentes Item.js (Deberías
incluirlo dentro de ItemListContainer del desafío 3)*/

import React , { useEffect, useState } from 'react'
import ".././style.css"
import Item from './Item'



const ItemList = ({arrayItems}) =>{
    return(
        <div className='product-container'>
            {                       
            arrayItems.map((item)=>
            <Item  
            key={item.id} //key marca la identidad del objeto
            id={item.id} 
            title={item.title} 
            price={item.price} 
            pictureUrl={item.pictureUrl}/>)
            }
        </div>
    )
}




export default ItemList