/* eslint-disable react/prop-types */
import './Header.css'

function Header(props) {
    return (  
        <div className="header p-3">
            <h1>Bem vindo {props.nome}</h1>
        </div>
    );
}

export default Header;