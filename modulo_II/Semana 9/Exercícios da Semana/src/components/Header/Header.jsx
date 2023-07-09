/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from 'prop-types'
import './Header.css'
import Logo from './logo.jpg'
import { Link } from "react-router-dom"

const Header = () => {
    // const menu = [
    //     {
    //         label: 'Produtos',
    //         path: '#'
    //     },
    //     {
    //         label: 'Contato',
    //         path: '#'
    //     },
        
    // ];

    // const renderMenuItem = (menuItem) => {
    //     return(
    //         <li><a href={menuItem.path}></a>{menuItem.label}</li>
    //     )
    // }
    return (
        
        <nav className="menu-principal-wrapper">
            <div className="logo-wrapper">
                <img src={Logo} alt="logo" className="logo" />
                <h1><strong>RUMO CERTO </strong></h1>
            </div>
            {/* <ul className="menu-wrapper">
                {menu.map(renderMenuItem)}
            </ul> */}
            <ul>
                <li>
                    <Link to='/'>Home</Link>  
                </li>
                <li>
                    <Link to='/contact'>Contato</Link>
                </li>
                <li>
                    <Link to='/faq'>FAQ</Link>
                </li>
            </ul>
        </nav>
        
    )
}

export default Header;