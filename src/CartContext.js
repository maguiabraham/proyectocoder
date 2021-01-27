import React, { createContext, useState} from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
    

    
    function addItem(product, counter, id) {
        if (isInCart(id)){ //me fijo si esta en el carrito, si esta solo cambia la cantidad
            const productoExistente = cart.find(product => product.item.id === id)
            productoExistente.cantidad = productoExistente.cantidad + counter           
        } else { //si no esta guardo el nuevo item
            const newItem = { item : {id: product.id, 
                              title: product.title, 
                              imagen: product.pictureUrl, 
                              price: product.price,}
                              ,
                              cantidad: counter}
            setCart([...cart, newItem]) 
        }
        console.log(cart);
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
    const removeItem = id => {
        const nuevoCart = cart.filter(producto => producto.item.id !== id)
        setCart(nuevoCart)
        console.log(cart);
    }
    const clear = () =>{
        setCart([])
        console.log(cart);
    }
    

  
    return (
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;