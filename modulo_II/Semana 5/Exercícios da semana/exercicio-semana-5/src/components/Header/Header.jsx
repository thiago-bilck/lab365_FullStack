import './Header.css'

function Header(props) {
    return (  
        <div className="header">
            <h1>Bem vindo {props.nome}</h1>
        </div>
    );
}

export default Header;