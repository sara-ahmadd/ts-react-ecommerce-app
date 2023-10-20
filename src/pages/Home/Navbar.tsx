import Logo from "./Logo";
import Options from "./Options";

const Navbar = () => {
  return (
    <div className="flex justify-between w-11/12 h-16 px-2 py-1 border-sky-500 border-b-2  text-sky-500 font-bold fixed left-20 z-30 bg-slate-50/50">
      <Logo />
      <Options />
    </div>
  );
};

export default Navbar;
