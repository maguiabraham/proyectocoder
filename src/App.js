import React, {useState} from "react"   
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"
import NavBar from "./components/NavBar"



export default function App (){

        //SOLO APP PUEDE CAMBIAR EL STATE
        

    
        return( //solo puede retornar un elemento
           <>
           <NavBar/>
           <ItemListContainer greeting='Este es el catálogo'/>
           <ItemCount stock={10} initial={1} />
           </>
        );
    
    
}