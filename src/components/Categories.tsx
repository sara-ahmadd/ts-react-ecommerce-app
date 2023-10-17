import { useCategories } from "../Hooks/useCategories";
import Category from "./Category";
import { BsFilterSquareFill } from "react-icons/bs";

const Categories = () => {
  const { categories }: { categories: string[] } = useCategories();

  return (
    <div className="flex flex-col gap-4 justify-center items-stretch pt-5 w-52">
      <>
        <div className="p-0 flex gap-5 items-center">
          <h1 className="p-0 w-full h-fit text-2xl text-sky-500 font-semibold">
            Filters
          </h1>
          <BsFilterSquareFill className=" w-14 h-14 text-xl p-0 object-cover text-sky-500" />
        </div>

        {categories ? (
          categories.map((x, ind) => (
            <Category title={x} key={`category-${ind}`} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    </div>
  );
};

export default Categories;
