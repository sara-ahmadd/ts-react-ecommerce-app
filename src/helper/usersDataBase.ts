import { User } from "../context/UserContext";

export const usersDatabase = (array: User[]) => {
  localStorage.removeItem("UsersDatabase");
  localStorage.setItem("UsersDatabase", JSON.stringify(array));
};

