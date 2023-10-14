import Navbar from "./Navbar";
import ProductsSlider from "../../components/ProductsSlider";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-row gap-1 justify-stretch items-start">
        <Categories />
        <ProductsSlider />
      </div>
    </>
  );
};

export default Home;
