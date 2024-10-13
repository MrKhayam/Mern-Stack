import React from 'react'

const Card = ({ user }) => {
  return (
    <div className="w-40 h-40 bg-white rounded-lg flex flex-col gap-3 p-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 rounded-full"
      />
      <p className="text-sm font-semibold">{user.login}</p>
    </div>
  );
};

export default Card
