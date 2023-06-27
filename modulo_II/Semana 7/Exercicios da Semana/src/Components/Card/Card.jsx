function UserCard({ nickname, age, email }) {
  console.log(nickname);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nickname: {nickname}</h5>
        <p className="card-text">Idade: {age}</p>
        <p className="card-text">Email: {email}</p>
      </div>
    </div>
  );
}

export default UserCard;
