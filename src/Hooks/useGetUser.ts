import { User } from "../context/UserContext";

export const useGetUser = (id: string) => {
  const data: string = localStorage.getItem("UsersDatabase") ?? "";
  const usersArray: User[] = data ? JSON.parse(data) : [];
  const user = usersArray.filter((x) => x.id === id);
  return user;
};
