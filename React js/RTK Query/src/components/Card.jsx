const Card = ({user}) => {
  return (
    <div className="w-52 h-52 bg-white border border-blue-300 rounded-lg flex flex-col">
      <img className="h-[80%] object-cover rounded-t-lg" src={user.avatar_url} alt="" />
      <h1 className="h-[20%] text-center capitalize font-semibold flex items-center justify-center">{user.login}</h1>
    </div>
  );
};

export default Card;
