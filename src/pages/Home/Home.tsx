import ProductsSlider from "../../components/ProductsSlider";
import Categories from "../../components/Categories";
import Button from "../../components/Button";
import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

const Home = () => {
  const { setCategory } = useContext(CategoryContext);
  const getAllProducts = () => {
    setCategory("");
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <Button text="No Filters" action={getAllProducts} />
      <div className="w-full flex flex-row gap-1 justify-stretch items-start">
        <Categories />
        <ProductsSlider />
      </div>
    </div>
  );
};

export default Home;
