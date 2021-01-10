import React, {useState, useEffect} from "react"   
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Item from "./components/Item"

const lista = [
        {
                id: 1,
                title: 'Cenicero', 
                description: 'Este es el cenicero', 
                price: 200, 
                pictureUrl: 'https://i.pinimg.com/originals/8a/fc/48/8afc48c94a4713f3024f348a2a2253d9.jpg'
        },
        {
               id: 2,
               title: 'Bandeja', 
               description: 'Este es la Bandeja', 
               price: 400, 
               pictureUrl: 'https://i.pinimg.com/originals/8a/fc/48/8afc48c94a4713f3024f348a2a2253d9.jpg'
       },
       {
               id: 3,
               title: 'Joyero', 
               description: 'Este es el Joyero', 
               price: 600, 
               pictureUrl: 'https://i.pinimg.com/originals/8a/fc/48/8afc48c94a4713f3024f348a2a2253d9.jpg'
       }
       
       ]


export default function App (){


    
        return( //solo puede retornar un elemento
           <>
           <NavBar/>
           <ItemListContainer greeting="Este es el catalogo" arrayItems={lista}/>
           </>
        );
    
    
}