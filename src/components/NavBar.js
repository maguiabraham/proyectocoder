import React from "react" 
import ".././style.css"

const NavBar = () => {
    return (
        <nav className='navBar'>
            <h3 className='logo'>FRESH</h3>
            <p className= 'menu'>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
                <a href="#">About us</a>
            </p>
        </nav>
    )
}

export default NavBar