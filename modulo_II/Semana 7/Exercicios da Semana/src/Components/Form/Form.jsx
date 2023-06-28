import { useState } from "react";
import UserCard from "../Card/Card";
import SearchInput from "../SearchInput/SearchInput";

function Form() {
  const [user, setUser] = useState({
    nickname: "",
    age: "",
    email: "",
  });

  const [usersList, setUsersList] = useState([]);

  function submit(e) {
    e.preventDefault();

    if (user.nickname.length == 0) {
      alert("Digite um nickname");
    }

    if (user.age.length == 0) {
      alert("Digite uma idade");
    }

    if (user.email.length == 0) {
      alert("Digite um email");
    }

    //craido para editar o usuario
    if(editingUserIndex !== null) {
      usersList[editingUserIndex] = user;
      setUsersList(usersList)
      setEditingUserIndex(null)
    } else {
      setUsersList([...usersList, user]);
    }

    console.log(usersList);
    setUser({
      nickname: "",
      age: "",
      email: "",
    });
  }

//craido para editar o usuario
  const [editingUserIndex, setEditingUserIndex] = useState(null)
 
  //craido para editar o usuario
  function editUser(i) {

    setEditingUserIndex(i) 

    setUser(usersList[i])


  }

  return (
    <>
      <form>
        <input
          placeholder="Nickname"
          type="text"
          onChange={(e) => setUser({ ...user, nickname: e.target.value })}
          value={user.nickname}
        ></input>
        <input
          placeholder="Idade"
          type="text"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          value={user.age}
        ></input>

        <input
          placeholder="Email"
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        ></input>

        <button type="submit" onClick={submit}>
          {editingUserIndex == null ? 'Adicionar usuário' : 'Editar usuário'}
        </button>
      </form>

      <div className="row mt-3">
        {usersList.map((u, i) => {
          return (
            <div className="col-3" key={i}>
              <UserCard nickname={u.nickname} age={u.age} email={u.email} onEditUser={() => editUser(i)} />
            </div>
          );
        })}
      </div>

      <SearchInput usersList={usersList}></SearchInput>
    </>
  );
}

export default Form;
