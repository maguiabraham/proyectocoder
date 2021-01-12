import React , { useEffect, useState, useParams } from 'react'
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
           pictureUrl: 'https://i.pinimg.com/originals/8a/fc/48/8afc48c94a4713f3024f348a2a2253d9.jpg'
   },
   {
           id: 3,
           title: 'Joyero', 
           description: 'Este es el detalle del Joyero', 
           price: 600, 
           pictureUrl: 'https://i.pinimg.com/originals/8a/fc/48/8afc48c94a4713f3024f348a2a2253d9.jpg'
   }
   
   ]

const ItemDetailContainer = () =>{

    const [item, setItem] = useState()
    const {idDetalle} = useParams()

    useEffect(()=>{

        const detalle = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const i = lista.find(item = item.id==idDetalle) 
                resolve(i)
            }, 2000)
        })
        detalle.then(result => setItem(result))
        detalle.catch(console.log("No se puede ver el detalle"))
    },[idDetalle])

    return(
        
        <ItemDetail item={item}/>
        
    )


}
export default ItemDetailContainer