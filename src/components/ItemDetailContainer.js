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
            categoria: 'ceniceros',
            pictureUrl: 'https://i.pinimg.com/564x/02/a3/9b/02a39bc103a1848c00f188d4e2322f51.jpg'
    },
    {
           id: 2,
           title: 'Bandeja', 
           description: 'Este es el detalle de la Bandeja', 
           price: 400, 
           categoria: 'bandejas',
           pictureUrl: 'https://i.pinimg.com/564x/70/cc/9b/70cc9ba1dd4de26598a7416ea8a9bfa4.jpg'
   },
   {
           id: 3,
           title: 'Joyero', 
           description: 'Este es el detalle del Joyero', 
           price: 600, 
           categoria: 'accesorios',
           pictureUrl: 'https://i.pinimg.com/564x/b6/d8/9c/b6d89ce13cb0d743ba29b529828b4df3.jpg'
   },
   {
           id: 4,
           title: 'Aros', 
           description: 'Este es el detalle de Aros', 
           price: 600, 
           categoria: 'accesorios',
           pictureUrl: 'https://i.pinimg.com/564x/c6/f7/b9/c6f7b9fbdcf07981d613e25ebafb0db0.jpg'
   },
   {
            id: 5,
            title: 'Cenicero', 
            description: 'Este es el detalle de cenicero 2', 
            price: 400, 
            categoria: 'ceniceros',
            pictureUrl: 'https://i.pinimg.com/236x/51/27/f6/5127f6e231c094ac4ffc9c9bc1cd07c3.jpg'
},
   
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
        <div className='item-container' >
            <div className='detail-container'>
            {item
            ? <ItemDetail item={item}/> 
            : <h3>Cargando...</h3>}
            </div>

        </div>
        
    )


}
export default ItemDetailContainer