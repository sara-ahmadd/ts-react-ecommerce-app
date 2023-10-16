import { User } from "../context/UserContext";

export const useGetUsers = () => {
  const data: string = localStorage.getItem("UsersDatabase") ?? "";
  const usersArray: User[] = data ? JSON.parse(data) : [];
  return usersArray;
};

