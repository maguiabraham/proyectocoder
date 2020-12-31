import React from "react"   
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
    return( //solo puede retornar un elemetno
       <>
       <NavBar/>
       <ItemListContainer greeting='Este es el catálogo'/>
       </>
    );
}

export default App