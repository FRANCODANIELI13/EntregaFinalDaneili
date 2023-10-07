import React from "react";
import Cartwidget from "../CartWidget";
export const Navbar = () =>{
    return(
        <header>
            
            <Link to="/">
                <div className="logo">
                    <img src={joyeria} alt="logo" width="150 px"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="#">INICIO</Link>
                </li>
                <li>
                    <Link to="#">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart">
                <a className="cart" href="#"> <Cartwidget/></a>
                <span className="item-total">0</span>
            </div>
        </header>
    );
}
export default Navbar;