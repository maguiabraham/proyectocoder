import React from "react" 
import ".././style.css"

const NavBar = () => {
    return (
        <nav className='navBar'>
            <h1 className='logo'>fresh</h1>
            <ul className= 'menu'>
                <li className='productos'><a href="#">productos</a>
                    <ul className='categorias'>
                        <li><a href="#">Ceniceros</a></li>
                        <li><a href="#">Bandejas</a></li>
                        <li><a href="#">Accesorios</a></li>
                    </ul>
                </li>
                <li style={{listStyle: 'none'}}> <a href="#">info</a> </li>
            </ul>
        </nav>
    )
}

export default NavBar