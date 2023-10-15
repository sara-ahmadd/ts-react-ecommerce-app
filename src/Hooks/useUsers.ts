import { User } from "../context/UserContext";

export const useUsers = () => {
  const data: string = localStorage.getItem("UsersDatabase") ?? "";
  const usersArray: User[] = data ? JSON.parse(data) : [];
  return usersArray;
};

