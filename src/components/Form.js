import React , {  useState, useContext } from 'react'
import {CartContext} from '.././CartContext'
import firebase from "firebase"
import {firestore} from ".././firebaseConfig"


const Form = () =>{

    const {cart, calcularTotal} = useContext(CartContext)
    const [nombre,setNombre] = useState('')
    const [telefono,setTelefono] = useState('')
    const [email,setEmail] = useState('')
    const [compra, setCompra] = useState([])
    const [id, setId] = useState("")


    //chequear datos de nombre, mail y numeros



    const datosDeCompra = (e) => {
        e.prevenDefault()
        const orden = {
            buyer: {nombre, telefono, email},
            items: [{id: cart.item.id,
                     title: cart.item.title,
                     price: cart.item.price}],
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
        alert('guardado')
    }

    return(

       <>
      
        <form onSubmit={datosDeCompra} >
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
       
       
       
       </>
    )


}
export default Form