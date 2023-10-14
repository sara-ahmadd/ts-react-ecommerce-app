import { useContext } from "react";
import Button from "./Button";
import { CategoryContext } from "../context/CategoryContext";

const Category = ({ title }: { title: string }) => {
  const { setCategory } = useContext(CategoryContext);
  const handleClick = () => {
    setCategory(`/category/${title}`);
  };

  return <Button text={title} action={handleClick} />;
};

export default Category;
