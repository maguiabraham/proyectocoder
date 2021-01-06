import React, {useState} from "react"   
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Item from "./components/Item"




export default function App (){

        //SOLO APP PUEDE CAMBIAR EL STATE
        

    
        return( //solo puede retornar un elemento
           <>
           <NavBar/>
           <ItemListContainer greeting='Este es el catálogo'/>
           
           </>
        );
    
    
}