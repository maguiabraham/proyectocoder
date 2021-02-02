
import React, { createContext, useState} from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])
    const [ total, setTotal] = useState([])
    const [ cantidadTotal, setCantidadTotal] = useState([])
    
    
    function addItem(product, counter, id) {
        if (isInCart(id)){ //me fijo si esta en el carrito, si esta solo cambia la cantidad
            const productoExistente = cart.find(product => product.item.id === id)
            productoExistente.cantidad = productoExistente.cantidad + counter           
        } else { //si no esta guardo el nuevo item
            const newItem = { item : {id: product.id, 
                              title: product.title, 
                              pictureUrl: product.pictureUrl, 
                              price: product.price,}
                              ,
                              cantidad: counter}
            setCart(cart=>([...cart, newItem])) 
        }
    }
    const isInCart = id => {  //me fijo si esta para no aceptar duplicados
        const item = cart.find(producto => producto.item.id === parseInt(id))
        if (item === undefined){
            return false
        }
        else {
            return true
        }
        
    }

    const calcularTotal = () =>{
        var t = 0
        const totals = cart.map( product => product.item.price * product.cantidad)
        totals.map( product => t = t + product)
        setTotal(t)
    }
    
    function calcularCantidad(){
        let t = 0
        cart.forEach(element => {
            t = t + element.amount
        })     
        return t
    }

    const cartCantidad =  cart.map( product => product.cantidad* cart.length)
    setCantidadTotal(cartCantidad)

       



    const removeItem = id => {
        const nuevoCart = cart.filter(producto => producto.item.id !== id)
        setCart(nuevoCart)
    }
    const clear = () =>{
        setCart([])
    }
    

  
    return (
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clear, total, cantidadTotal, calcularCantidad}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;