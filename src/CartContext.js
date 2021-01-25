import React, { createContext, useState} from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cantItems, setCantItems] = useState(0)
    
    function addItem(product, counter) {
          if(isInCart(product.id)===true){
            return product.amount + counter           
          }else{
            const newItem = {
                id: product.id, 
                name: product.title, 
                image: product.pictureUrl, 
                price: product.price, 
                amount: counter }
           setCart([...cart, newItem]) ; //desp cambio la cantidad
          }
    }

  
    
    const isInCart = id => {  //no acepta duplicados
        const item = cart.find(producto => producto.id === parseInt(id))
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