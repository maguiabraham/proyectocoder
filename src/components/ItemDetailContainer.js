import React , { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ".././style.css"
import ItemDetail from './ItemDetail'
import {firestore} from ".././firebaseConfig"



const ItemDetailContainer = () =>{

    const [ fireBaseItem, setFireBaseItem ] = useState([])
    const {id} = useParams()


    useEffect(()=>{
        
        const database = firestore //inicializo el cliente
        const collection = database.collection('items').doc(id) //seteo la coleccion
        const query = collection.get()

        query
        .then((resultado)=>{
           setFireBaseItem({id: resultado.id,
                            ...resultado.data()})
            })
        .catch(()=>{
            console.log("no se pudo cargar")
            })
        }, [])

    return(
        <div className='item-container' >
            <div className='detail-container'>
             <ItemDetail item={fireBaseItem}/> 
            </div>

        </div>
        
    )


}
export default ItemDetailContainer