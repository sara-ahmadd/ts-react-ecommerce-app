import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import signUp from "/sign-up.svg";
import { UsersDatabaseContext } from "../../context/UsersDatabaseContext";
import { useNavigate } from "react-router-dom";
import { useCheckUser } from "../../Hooks/useCheckUser";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const { users, UpdateUsersDB } = useContext(UsersDatabaseContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const checkUser = useCheckUser(form.email, form.password);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (checkUser !== null) {
      Swal.fire({
        title: "Warning",
        text: "The user already exists!",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      navigate("/login");
    } else {
      UpdateUsersDB({ ...form, cart: [] });
    }
  };

  //update the users-database saved in the local storage with every new sign up
  useEffect(() => {
    if (form.email !== "" && form.password !== "") {
      localStorage.setItem("UsersDatabase", JSON.stringify(users));
      navigate("/login");
    }
  }, [users, navigate]);

  return (
    <div className="flex flex-row w-full h-max gap-5 items-center p-0">
      <form
        className="flex flex-col justify-start items-start gap-3 border-2 border-gray-200 rounded-md w-2/4 h-fit"
        onSubmit={(e: FormEvent) => {
          handleSubmit(e);
        }}
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
        <img src={signUp} className=" w-4/5 h-4/5 p-0 object-contain" />
      </div>
    </div>
  );
};

export default SignUp;
