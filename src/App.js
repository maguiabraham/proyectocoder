import React from "react"   
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import CartProvider from './CartContext'
import Cart from './components/Cart'



const lista = [
        {
                id: 1,
                title: 'Cenicero', 
                description: 'Este es el detalle del cenicero', 
                price: 200, 
                categoria: 'ceniceros',
                pictureUrl: 'https://i.pinimg.com/564x/02/a3/9b/02a39bc103a1848c00f188d4e2322f51.jpg',
                stock: 7,
                initial: 1
        },
        {
               id: 2,
               title: 'Bandeja', 
               description: 'Este es el detalle de la Bandeja', 
               price: 400, 
               categoria: 'bandejas',
               pictureUrl: 'https://i.pinimg.com/564x/70/cc/9b/70cc9ba1dd4de26598a7416ea8a9bfa4.jpg',
               stock: 5,
               initial: 1
       },
       {
               id: 3,
               title: 'Joyero', 
               description: 'Este es el detalle del Joyero', 
               price: 600, 
               categoria: 'accesorios',
               pictureUrl: 'https://i.pinimg.com/564x/b6/d8/9c/b6d89ce13cb0d743ba29b529828b4df3.jpg',
               stock: 5,
               initial: 1
       },
       {
               id: 4,
               title: 'Aros', 
               description: 'Este es el detalle de Aros', 
               price: 600, 
               categoria: 'accesorios',
               pictureUrl: 'https://i.pinimg.com/564x/c6/f7/b9/c6f7b9fbdcf07981d613e25ebafb0db0.jpg',
               stock: 5,
               initial: 1
       },
       {
                id: 5,
                title: 'Cenicero', 
                description: 'Este es el detalle de cenicero 2', 
                price: 400, 
                categoria: 'ceniceros',
                pictureUrl: 'https://i.pinimg.com/236x/51/27/f6/5127f6e231c094ac4ffc9c9bc1cd07c3.jpg',
                stock: 5,
                initial: 1
    },
       
       ]


export default function App (){

        return( //solo puede retornar un elemento
           <>
        <CartProvider>
           <BrowserRouter>
                <NavBar/> 
                <Switch>
                <Route path="/" exact> <ItemListContainer greeting='Este es el catalogo' arrayItems={lista}/>  </Route>
                <Route path="/category/:categoria"> <ItemListContainer  arrayItems={lista}/></Route>
                <Route path="/item/:id"><ItemDetailContainer/></Route>
                <Route path="/:cart"><Cart/></Route>
                </Switch>
           </BrowserRouter>
        </CartProvider>
           </>
        )
    
    
}