import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("home");


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>PAPEL A.Ş.</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("home")}><Link to="/"><p>Home</p></Link>{menu === "home" ? <hr /> : null}</li>
                <li onClick={() => setMenu("mens")}><Link to="/mens">Men</Link>{menu === "mens" ? <hr /> : null}</li>
                <li onClick={() => setMenu("womens")}><Link to="/womens">Women</Link>{menu === "womens" ? <hr /> : null}</li>
                <li onClick={() => setMenu("kids")}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar