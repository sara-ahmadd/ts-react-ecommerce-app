import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import signUp from "/sign-up.svg";
import { UsersDatabaseContext } from "../../context/UsersDatabaseContext";
import { useNavigate } from "react-router-dom";
// import { useUserReducerHook } from "./../../Hooks/useUserReducerHook";
import { UserContext } from "../../context/UserContext";
import { usersDatabase } from "../../helper/usersDataBase";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { users, setUsers } = useContext(UsersDatabaseContext);

  //   const { user, setUser } = useUserReducerHook(form);
  const { user, setUser } = useContext(UserContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email !== "" && form.password !== "") {
      setUser(form);
      setUsers([...users, user]);
      usersDatabase(users);
    }
    navigate("/login");
  };

  return (
    <div className="flex flex-row w-full h-max gap-5 items-center p-0">
      <form
        className="flex flex-col justify-start items-start gap-3 border-2 border-gray-200 rounded-md w-2/4 h-fit"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="p-0 pb-1">
          Email
        </label>
        <input
          required
          id="email"
          type="email"
          placeholder="example@gmail.com"
          className="border-2 rounded-sm p-1"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="password" className="p-0 pb-1">
          Password
        </label>
        <input
          required
          id="password"
          type="password"
          placeholder="Password"
          className="border-2 rounded-sm p-1"
          value={form.password}
          onChange={handleChange}
        />
        <input
          className="border-2 rounded-md min-h-14 w-28 p-4 text-white bg-sky-500 cursor-pointer"
          type="submit"
          value={"Sign Up"}
        />
      </form>
      <div className=" w-1/2 h-3/4 p-0">
        <img src={signUp} className=" w-full h-full p-0 object-contain" />
      </div>
    </div>
  );
};

export default SignUp;
