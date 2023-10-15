import { useReducer } from "react";
import { User } from "../context/UserContext";
import { ACTION_NAME, userReducer } from "../ReducerFunctions/userReducer";



export const useUserReducerHook = (initUserState: User) => {
  const [user, dispatch] = useReducer(userReducer, initUserState);
  const setUser = (state: User) =>
    dispatch({ type: ACTION_NAME.UPDATE_USER, payload: state });
  return { user, setUser };
};
