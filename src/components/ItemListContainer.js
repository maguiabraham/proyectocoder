import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import ".././style.css"
import {firestore} from ".././firebaseConfig"








const ItemListContainer = ({greeting, arrayItems}) => {


    const [ items, setItems ] = useState([])
    const {id} = useParams()

    useEffect(()=>{ 
        
        if(id){
            const baseDatos = firestore
            const collection = baseDatos.collection('items')
            const query = collection.where('categoryId', "==", id).get()

            query
            .then((result) =>{
                setItems(result.docs.map(item => ({id: item.id, ...item.data()})))
            })
            .catch((error) => {
                console.log('No se puede cargar el catalogo');
            })
        }else{
            setItems(items)
        }

    },[id, items])
    






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