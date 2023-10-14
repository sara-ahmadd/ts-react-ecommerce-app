import Logo from "./Logo";
import Options from "./Options";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-4 border-sky-500 border-2 rounded-md text-sky-500 font-bold">
      <Logo />
      <Options />
    </div>
  );
};

export default Navbar;
