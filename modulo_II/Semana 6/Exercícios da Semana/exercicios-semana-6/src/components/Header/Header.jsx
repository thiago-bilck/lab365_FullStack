/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from 'prop-types'
import './Header.css'
import Logo from './logo.jpg'

const Header = () => {
    const menu = [
        {
            label: 'Produtos',
            path: '#'
        },
        {
            label: 'Contato',
            path: '#'
        },
        
    ];

    const renderMenuItem = (menuItem) => {
        return(
            <li><a href={menuItem.path}></a>{menuItem.label}</li>
        )
    }
    return (
        
        <nav className="menu-principal-wrapper">
            <div className="logo-wrapper">
                <img src={Logo} alt="logo" className="logo" />
                <h1><strong>Minha Empresa</strong></h1>
            </div>
            <ul className="menu-wrapper">
                {menu.map(renderMenuItem)}
                {/* <li><a href="#">Produtos</a></li>
                <li><a href="#">Contato</a></li> */}
            </ul>
        </nav>
        
    )
}

export default Header;