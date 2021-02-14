import React , { useEffect, useState, setLoading } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import ".././style.css"
import {firestore} from ".././firebaseConfig"








const ItemListContainer = ({greeting, arrayItems}) => {


    const [items,setItems] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        const db = firestore
        const collection = categoryId != undefined ? db.collection("items").where('categoryId','==',categoryId) : db.collection("items")
        const query = collection.get()
        .then(({docs})=>{setItems(docs.map(doc=>({id:doc.id,...doc.data()})))})
        .catch(()=>{
          console.log("Algo salio mal!")
        })
      }, [categoryId])
    /*const [ fireBaseItem, setFireBaseItem ] = useState([])
    


    useEffect(()=>{
        setLoading(true)
        const database = firestore //inicializo el cliente

        const collection = database.collection('items') //seteo la coleccion
        const categoria = collection.where('categoryId', '==', 'ceniceros')
                          //collection.where('categoryId', '==', 'bandejas')
                         // collection.where('categoryId', '==', 'accesorios')
        categoria.get().then((querySnapshot)=>{
            if(querySnapshot.size===0){
                console.log('No hay resultados');
            }
            setFireBaseItem(querySnapshot.docs.map(doc=>doc.data()))
        })


    },[])

*/
    return(
        <>
        <div className='item-container'>
        <h3>{greeting}</h3>
        <div className='list'> <ItemList arrayItems={items} /></div>
        </div>
        
        </>
    )














    /*
    const [items, setItems] = useState([])
    const {categoria} = useParams()

    useEffect(()=>{ 
        
    //promise
    let listado = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(arrayItems)}, 2000) //recibe una funcion y el tiempo
    })
    listado.
    then(result => categoria?setItems(result.filter(item=>item.categoria==categoria)): setItems(result) // ese resultado va a items
    )
    .catch((err) =>
        console.log('No se pudo cargar'))
    },[categoria])
    */

 
}
export default ItemListContainer