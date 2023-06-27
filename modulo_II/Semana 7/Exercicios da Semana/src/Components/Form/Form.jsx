import { useState } from "react";
import UserCard from "../Card/Card";

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

    setUsersList([...usersList, user]);
    console.log(usersList);
    setUser({
      nickname: "",
      age: "",
      email: "",
    });
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
          Adicionar usuário
        </button>
      </form>

      <div className="row mt-3">
        {usersList.map((u, i) => {
          return (
            <div className="col-3" key={i}>
              <UserCard nickname={u.nickname} age={u.age} email={u.email} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Form;
