import { useUserContext } from "../contexts/UserContext";

const Test7 = () => {
  const { users } = useUserContext();
  return (
    <div>
      {users.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </div>
  );
};

export default Test7;
