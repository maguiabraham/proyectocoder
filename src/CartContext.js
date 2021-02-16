
import React, { createContext, useState} from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])
    
    



    const calcularCantidad = () =>{
        return cart.reduce((prev, next) => prev + next.cantidad, 0)
       }
    


    function addItem(product, counter, id) {
        if (isInCart(id)){ //me fijo si esta en el carrito, si esta solo cambia la cantidad
            const productoExistente = cart.find(p => p.item.id === id)
            const nuevaCantidad = productoExistente.cantidad + counter           
            const nuevoProducto = { item: {id: productoExistente.item.id, 
                                        title: productoExistente.item.title, 
                                        pictureUrl: productoExistente.item.pictureUrl, 
                                        price: productoExistente.item.price,}
                                        ,
                                    cantidad: nuevaCantidad}
            const cartSinExistente = cart.filter(product => product.item.id != id) //borro el anterior
            const cartConNuevo = [...cartSinExistente, nuevoProducto]
            setCart(cartConNuevo)            
        

        } else { //si no esta guardo el nuevo item
            const newItem = { item : {id: product.id, 
                              title: product.title, 
                              pictureUrl: product.pictureUrl, 
                              price: product.price,}
                              ,
                              cantidad: counter}
            setCart([...cart, newItem]) 
            console.log(cart);
            
        }
        
    }

   
    

function isInCart(id){
    const item = cart.find(p => p.item.id === id)
    if (item === undefined){
        console.log("no esta");
        return false
    }
    else {
        return true
        console.log('si esta');
    }
}


    const calcularTotal = () =>{
        return cart.reduce((prev, next) =>
            (prev + (next.cantidad * next.item.price)), 0)

    }
    
   

    const removeItem = id => {
        const nuevoCart = cart.filter(producto => producto.item.id !== id)
        setCart(nuevoCart)
    }
    const clear = () =>{
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{cart, quantity: cart.length, addItem, isInCart, removeItem, clear, calcularCantidad, calcularTotal}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;