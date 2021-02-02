import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ".././style.css"
import ItemDetail from './ItemDetail'
import {firestore} from ".././firebaseConfig"




const ItemDetailContainer = () =>{

    const [ fireBaseItem, setFireBaseItem ] = useState([])
    //const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(() => {
        const db = firestore
        const collection = db.collection('products') 
        const item = collection.doc(id)
   
        item.get()
         .then( (item) => {
           setFireBaseItem({ id: item.id, ...item.data()})
         })
   
     },[id]);

    return(
        <div className='item-container' >
            <div className='detail-container'>
            {fireBaseItem
            ? <ItemDetail item={fireBaseItem}/> 
            : <h3>Cargando...</h3>}
            </div>

        </div>
        
    )


}
export default ItemDetailContainer