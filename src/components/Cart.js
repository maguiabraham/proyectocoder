
import React, { useContext, useState } from 'react'
import {CartContext} from '.././CartContext'
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import ".././style.css"
import firebase from "firebase"
import {firestore} from ".././firebaseConfig"



const Cart = () =>{

    const { cart, clear, calcularTotal} = useContext(CartContext) //cart context
    const [nombre,setNombre] = useState('')
    const [telefono,setTelefono] = useState('')
    const [email,setEmail] = useState('')
    const [compra, setCompra] = useState([])
    const [id, setId] = useState("")



    const confirmarCompra = (e) => {
        e.prevenDefault()
        const orden = {
            buyer: {nombre, telefono, email},
            items: cart.map((elem)=>{return {id:elem.item.id,
                                            price:elem.item.price,
                                            title:elem.item.title,
                                            quantity:elem.cantidad}}),
            date: firebase.firestore.Timestamp.fromDate(new Date()) ,
            total: calcularTotal()
        }
        setCompra(orden)

        const db = firestore
        const collection = db.collection("orders")
        collection.add(compra)
        .then((res)=>{  
            setId(res.id)
        })
        .catch(()=>{})
        alert(`Compra confirmada! numero de orden: ${id}`)
    }


    return(

        <div className='carrito'>
            { cart.length === 0 ? ( 
            <>
            <div>
            <h3>Tu carrito está vacio...</h3> 
            <Link to={"/"}><h5>Volver al catálogo</h5></Link>
            </div>
            </>
            )    
            :(
               <>
                <div className="cartItems">
            { cart.length > 0 && cart.map((product)=>
                <CartItem key={product.item.id} 
                        id={product.item.id} 
                        pictureUrl={product.item.pictureUrl}
                        title={product.item.title} 
                        price={product.item.price} 
                        cantidad={product.cantidad} />)
        }
        </div>
        <div className='boton-borrarcarrito' >
            <h4>Precio final: </h4>
            <h4>${calcularTotal()}</h4>
            <button  onClick={clear}>X Borrar carrito</button>
        </div>
        <div>
        <form onSubmit={confirmarCompra} >  
             <h2>Datos de compra</h2>
            <div>
            <input onChange={e=>setNombre(e.target.value)} type='text' placeholder='Nombre' value={nombre} ></input>
            </div>
            <div>
            <input onChange={e=>setTelefono(e.target.value)} type='tel' placeholder='Telefono' value={telefono}></input>
            </div>
            <div>
            <input onChange={e=>setEmail(e.target.value)}type='email' placeholder='Email' value={email}></input>
            </div>
            <button >Terminar Compra</button>
        </form>
        </div>
               </>
            )
            }

           
            



        </div>

    )

}

export default Cart