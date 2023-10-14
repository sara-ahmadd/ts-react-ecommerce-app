// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiSolidRightArrowSquare } from "react-icons/bi";
// import { BiSolidLeftArrowSquare } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useProducts } from "../Hooks/useProducts";
import { ReactElement, useContext } from "react";
import ProductCard from "./ProductCard";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { CategoryContext } from "../context/CategoryContext";

const ProductsSlider = () => {
  const { category } = useContext(CategoryContext);
  const { data } = useProducts(category);
  return (
    <div className="container-box p-0">
      <div className="small-container p-0">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={3}
          spaceBetween={10}
          navigation
        >
          <>
            {data?.map((item, index): ReactElement => {
              return (
                <SwiperSlide
                  key={`${item.id ?? index}`}
                  className="w-full flex justify-center h-full items-center pt-0"
                >
                  <ProductCard
                    imgUrl={item.image}
                    name={item.title}
                    price={item.price}
                  />
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      </div>
    </div>
  );
};
export default ProductsSlider;
