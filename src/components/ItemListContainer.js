import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import ".././style.css"
import Item from './Item'








const ItemListContainer = ({greeting, arrayItems}) => {


    const [items, setItems] = useState([])
    const {categoria} = useParams()

    useEffect(()=>{ 
        
    //promise
    let listado = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(arrayItems)}, 2000) //recibe una funcion y el tiempo
    })
    listado.
    then(result=>{
        if(categoria){
            setItems(result.filter(item=>item.categoria===categoria))
        }else{
            setItems(result)
        }
    })
    .catch((err) =>
        console.log('No se pudo cargar'))
    },[categoria])
    






    return(
        <>
        <div className='item-container'>
        <h3>{greeting}</h3>
        <div className='list'> <ItemList arrayItems={items}/></div>
        </div>
        
        </>
    )
}
export default ItemListContainer