import React, { createContext, useState} from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cantItems, setCantItems] = useState(0)
    
    function addItem(product, counter, id) {
         
       
        if (isInCart(id)==false){    
            const newItem = {
                id: product.id, 
                name: product.name, 
                image: product.image, 
                price: product.price, 
                amount: counter }
           setCart([...cart, newItem]) 
        } 
    }

  
    
    const isInCart = id => {  //no acepta duplicados
        let existe = cart.find(producto => producto.id == id)
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
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;