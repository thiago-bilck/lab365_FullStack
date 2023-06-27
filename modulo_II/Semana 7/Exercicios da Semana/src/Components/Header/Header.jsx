import { useState } from "react";

function Header() {
    const [name, setName] = useState('Insira seu nome:')
        
        function changeName() {
            let newName = prompt('Insira o seu nome: ')
            if(newName) {
                setName(newName)
            } else {
                setName('Clique aqui para inserir um nome')
            }
        }

    return (  
        <>
            <div className="p-3 mb-2 bg-warning">
                <nav className="navbar navbar-light bt-light text-center rounded">
                    <a href="#" className="navbar-brand" onClick={changeName}>{name}</a>
                </nav>



            </div>
        </>
    );
}

export default Header;