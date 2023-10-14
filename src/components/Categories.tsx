import { useCategories } from "../Hooks/useCategories";
import Category from "./Category";

const Categories = () => {
  const { categories }: { categories: string[] } = useCategories();

  return (
    <div className="flex flex-col gap-4 justify-center items-stretch pt-5 w-52">
      <>
        {categories?.map((x, ind) => (
          <Category title={x} key={`category-${ind}`} />
        ))}
      </>
    </div>
  );
};

export default Categories;
