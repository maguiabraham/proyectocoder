import React , { useEffect, useState } from 'react'
import ItemList from './ItemList'
import ".././style.css"
import Item from './Item'

const ItemListContainer = ({greeting, arrayItems}) => {

    const [items, setItems] = useState([])
    useEffect(()=>{ 
        
    //promise
    let listado = new Promise((resolve, reject)=>{
        setTimeout(resolve(arrayItems), 2000) //recibe una funcion y el tiempo
    })
    listado.
    then((result) => setItems(result)
    )
    .catch((err) =>
        console.log('No se pudo cargar'))
    },[])
    

    return(
        <>
        <h3>{greeting}</h3>
        <div className='item-container'>
        {arrayItems.lenght > 1 ? <ItemList arrayItems={items}/> : <h3>'Cargando...'</h3>}
        </div>
        </>
    )
}
export default ItemListContainer