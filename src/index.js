import React from "react"    //va de la mano con react-dom
import ReactDom from "react-dom"
import App from "./App"
/*A EJECUCION DE UNA FUNCION EN JSX ES:
  App() --> <App/>
  si no hay nada en medio solo va el cierre
*/

ReactDom.render(<App/> ,document.getElementById('root'));