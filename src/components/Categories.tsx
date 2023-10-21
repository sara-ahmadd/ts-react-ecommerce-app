import { useContext } from "react";
import { useCategories } from "../Hooks/useCategories";
import Category from "./Category";
import { BsFilterSquareFill } from "react-icons/bs";
import { CategoryContext } from "../context/CategoryContext";
import Button from "./Button";

const Categories = () => {
  const { categories }: { categories: string[] } = useCategories();
  const { handleCategory } = useContext(CategoryContext);
  const getAllProducts = () => {
    handleCategory("");
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-stretch p-0 w-52">
      <>
        <div className="p-0 flex gap-5 items-center">
          <h1 className="p-0 w-full h-fit text-2xl text-sky-500 font-semibold">
            Categories
          </h1>
          <BsFilterSquareFill className=" w-14 h-14 text-xl p-0 object-cover text-sky-500 " />
        </div>

        {categories ? (
          categories.map((x, ind) => (
            <Category title={x} key={`category-${ind}`} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
        <Button text="No Filters" action={getAllProducts} />
      </>
    </div>
  );
};

export default Categories;
