import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import login from "/login.svg";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full h-max gap-5 items-center p-0">
      <div className=" w-2/4 p-0">
        <img src={login} className=" w-full h-full p-0 object-cover" />
      </div>
      <form className="flex flex-col justify-start items-start gap-3 border-2 border-gray-200 rounded-md w-2/4 h-fit">
        <label htmlFor="email" className="p-0 pb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          className="border-2 rounded-sm p-1"
        />
        <label htmlFor="password" className="p-0 pb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="border-2 rounded-sm p-1"
        />
        <input
          className="border-2 rounded-md min-h-14 w-28 p-4 text-white bg-sky-500 cursor-pointer"
          type="submit"
          value={"Login"}
        />
        <span className="p-1 ">Don't have an acount?</span>
        <Button action={() => navigate("/signUp")} text="Sign Up" />
      </form>
    </div>
  );
};

export default Login;
