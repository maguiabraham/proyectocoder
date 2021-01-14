import React from "react"   
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import ItemDetail from "./components/ItemDetail"


const lista = [
        {
                id: 1,
                title: 'Cenicero', 
                description: 'Este es el detalle del cenicero', 
                price: 200, 
                categoria: 'ceniceros',
                pictureUrl: 'https://i.pinimg.com/originals/8a/fc/48/8afc48c94a4713f3024f348a2a2253d9.jpg'
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
       }
       
       ]
    


export default function App (){

        return( //solo puede retornar un elemento
           <>
        <BrowserRouter>
          <NavBar/> 
            <Switch>

                <Route path="/" exact> <ItemListContainer greeting='Este es el catalogo' arrayItems={lista}/>  </Route>
                <Route path="/category/:categoria"> <ItemListContainer/></Route>
                <Route path="/item/:id"><ItemDetailContainer/></Route>

            </Switch>
        </BrowserRouter>
           </>
        )
    
    
}