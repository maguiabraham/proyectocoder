import React, { createContext, useState, useEffect } from 'react'


const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cantItems, setCantItems] = useState(0)
    
    const addItem=({item, cantidad})=>{
        setCart([
			...cart,
			{
                item: item,
   				cantidad: cantidad
			}
        ])
    }



    
    const isInCart = id => {  //no acepta duplicados
        let existe = cart.find(producto => producto.item.id === id)
        return existe?true:false
    }
    const removeItem = id => {
        const nuevoCart = cart.filter(producto => producto.item.id !== id)
        setCart(nuevoCart)
    }
    const clear = () =>{
        setCart([])
    }
    

  
    return (
        <CartContext.CartProvider value={{addItem, isInCart, removeItem, clear}}>
            {children}
        </CartContext.CartProvider>
    )
}




export default CartProvider;