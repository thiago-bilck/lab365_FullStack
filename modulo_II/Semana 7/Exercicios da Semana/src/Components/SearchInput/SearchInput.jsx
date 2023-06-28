import { useState } from "react";
import UserCard from "../Card/Card";

function SearchInput({usersList}) {
    
    const [searchValue, setSearchValue] = useState('')

    const [foundUser, setFoundUser] = useState(null)

    function searchUser() {

        setFoundUser(usersList.find((u) => u.email === searchValue || u.nickname === searchValue)) 

    }
    
    return (  
        <div>
            <input type="text" placeholder="Digite o nickname ou email do usuário" onChange={(e) => setSearchValue(e.target.value)}/>
            <button onClick={searchUser}>Buscar usuário</button>
            {foundUser !== null && (
                foundUser === undefined ?
                'Nenhum usuário foi encontrado' : <UserCard nickname={foundUser.nickname} age={foundUser.age} email={foundUser.email}></UserCard>
            ) }
        </div>

    );
}

export default SearchInput;