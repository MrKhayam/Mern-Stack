import React from "react";
import { useGetUsersQuery } from "./slices/apiSlice";
import Card from "./components/Card";

const App = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 p-32 flex flex-wrap gap-4">
        {data && data.map((user) => {
          return <Card key={user.id} user={user} />
        })}
      </div>
    </>
  );
};

export default App;
