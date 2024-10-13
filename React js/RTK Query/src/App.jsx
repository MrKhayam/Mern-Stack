import { useGetUsersQuery } from "./slices/apiSlice";
import Card from "./components/Card";

const App = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 border border-zinc-900 p-32 flex items-center gap-5 flex-wrap">
        {data && data.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </>
  );
};

export default App;