import { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    nickname: "",
    age: "",
    email: "",
  });

  const [usersList, setUsersList] = useState([]);

  function submit(e) {
    e.preventDefault();

    if (user.nickname.length() == 0) {
      alert("Digite um nickname");
    }

    if (user.age.length() == 0) {
      alert("Digite uma idade");
    }

    if (user.email.length() == 0) {
      alert("Digite um email");
    }

    setUsersList([...usersList, user]);
    setUser({
      nickname: "",
      age: "",
      email: "",
    });
  }

  return (
    <>
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
    </>
  );
}

export default Form;
