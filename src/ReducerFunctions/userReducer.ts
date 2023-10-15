import { User } from "../context/UserContext";

export const enum ACTION_NAME {
  UPDATE_USER,
}

interface ACTINOn_TYPE {
  type: ACTION_NAME;
  payload?: User;
}

export const initUserState: User = {
  email: "",
  password: "",
  cart: [
    {
      id: "",
      title: "",
      image: "",
      price: 0,
      rating: { rate: 0, count: 0 },
      description: "",
    },
  ],
};

export const userReducer = (
  initUserState: User,
  action: ACTINOn_TYPE
): User => {
  switch (action.type) {
    case ACTION_NAME.UPDATE_USER:
      return {
        email: action.payload?.email ?? "",
        password: action.payload?.password ?? "",
        cart: action.payload?.cart ?? [],
      };
    default:
      return initUserState;
  }
};
