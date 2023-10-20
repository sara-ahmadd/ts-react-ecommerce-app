import ProductsSlider from "../../components/ProductsSlider";
import Categories from "../../components/Categories";
import GridImages from "../../components/GridImages";
import Intro from "./Intro";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <>
      <Intro />
      <div className="flex flex-col gap-3 justify-center items-center pt-10">
        <div className="w-full flex flex-row gap-1 justify-stretch items-start">
          <Categories />
          <ProductsSlider />
        </div>
        <GridImages />
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
