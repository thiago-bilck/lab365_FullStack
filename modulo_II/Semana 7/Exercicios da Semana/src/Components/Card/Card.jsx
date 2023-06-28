import LikesButton from "../LikesButton/LikesButton";

function UserCard({ nickname, age, email, onEditUser }) {
  console.log(nickname);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nickname: {nickname}</h5>
        <p className="card-text">Idade: {age}</p>
        <p className="card-text">Email: {email}</p>
        <LikesButton></LikesButton>
        <button onClick={onEditUser}><img src="./edit-icon.svg"/></button>
      </div>
    </div>
  );
}

export default UserCard;
