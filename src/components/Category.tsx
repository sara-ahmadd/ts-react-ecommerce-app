import { useContext } from "react";
import Button from "./Button";
import { CategoryContext } from "../context/CategoryContext";

const Category = ({ title }: { title: string }) => {
  const { handleCategory } = useContext(CategoryContext);
  const handleClick = () => {
    handleCategory(`/category/${title}`);
  };

  return <Button text={title.toUpperCase()} action={handleClick} />;
};

export default Category;
