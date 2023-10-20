import intro from "/intro.jpg";
function Intro() {
  return (
    <div className="intro w-screen h-fit p-0 relative">
      <img src={intro} className="p-0" />
      <a
        href="#container-box"
        className=" absolute top-2/3 left-44 btn rounded-md text-lg text-white"
      >
        Shop Now
      </a>
    </div>
  );
}

export default Intro;
