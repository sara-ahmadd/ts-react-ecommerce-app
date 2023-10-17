import { useGetUser } from "./useGetUser";

export const useCheckUser = (email: string, password: string) => {
  const userRetreived = useGetUser(email, password);
  return !userRetreived ? null : userRetreived;
};
