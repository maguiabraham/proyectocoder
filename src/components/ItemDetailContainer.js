import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ".././style.css"
import ItemDetail from './ItemDetail'

const lista = [
    {
            id: 1,
            title: 'Cenicero', 
            description: 'Este es el detalle del cenicero', 
            price: 200, 
            pictureUrl: 'https://i.pinimg.com/originals/8a/fc/48/8afc48c94a4713f3024f348a2a2253d9.jpg'
    },
    {
           id: 2,
           title: 'Bandeja', 
           description: 'Este es el detalle de la Bandeja', 
           price: 400, 
           pictureUrl: 'https://i.pinimg.com/564x/70/cc/9b/70cc9ba1dd4de26598a7416ea8a9bfa4.jpg'
   },
   {
           id: 3,
           title: 'Joyero', 
           description: 'Este es el detalle del Joyero', 
           price: 600, 
           pictureUrl: 'https://i.pinimg.com/564x/b6/d8/9c/b6d89ce13cb0d743ba29b529828b4df3.jpg'
   }
   
   ]

const ItemDetailContainer = () =>{

    const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{

        let pedido = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(lista)
            },2000)
        })

        pedido
        .then(result=>{
            if(id){
                setItem(result.filter(item=>item.id==id)[0])
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])

    return(
        <div className='item-container'>
            
            {item
            ? <ItemDetail item={item}/> 
            : <h3>Cargando...</h3>}

        </div>
        
    )


}
export default ItemDetailContainer