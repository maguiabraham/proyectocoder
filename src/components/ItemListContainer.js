import React , { useEffect, useState } from 'react'
import ItemList from './ItemList'
import ".././style.css"
import Item from './Item'








const ItemListContainer = ({greeting, arrayItems}) => {

    const [items, setItems] = useState([])
    
    useEffect(()=>{ 
        
    //promise
    let listado = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(arrayItems)}, 2000) //recibe una funcion y el tiempo
    })
    listado.
    then(result => setItems(arrayItems) // ese resultado va a items
    )
    .catch((err) =>
        console.log('No se pudo cargar'))
    },[])
    






    return(
        <>
        <div className='item-container'>
        <h3>{greeting}</h3>
        <div className='list'>{items ? <ItemList arrayItems={items}/> : <h3>'Cargando...'</h3>}</div>
        </div>
        
        </>
    )
}
export default ItemListContainer