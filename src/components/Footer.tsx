function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className=" border-t-2 border-gray-400 pt-2 flex justify-center items-center">
      Made by Sara &copy;{date}
    </div>
  );
}

export default Footer;
