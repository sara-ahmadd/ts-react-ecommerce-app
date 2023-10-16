import { useGetUser } from "./useGetUser";

export const useCheckUser = (id: string) => {
  const userRetreived = useGetUser(id);
  return userRetreived ? userRetreived : null;
};
