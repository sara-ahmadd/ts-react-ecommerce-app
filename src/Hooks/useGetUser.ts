import { User } from "../context/UserContext";

export const useGetUser = (email: string, password: string) => {
  const data: string = localStorage.getItem("UsersDatabase") ?? "";
  const usersArray: User[] = data ? JSON.parse(data) : [];
  const user = usersArray.filter(
    (x) => x.email === email && x.password === password
  )[0];
  return user;
};
