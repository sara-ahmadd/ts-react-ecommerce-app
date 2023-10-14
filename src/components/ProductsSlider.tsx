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
import { ReactElement } from "react";
import ProductCard from "./ProductCard";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const ProductsSlider = () => {
  const { data } = useProducts();

  return (
    <div className="container-box">
      <div className="small-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={3}
          spaceBetween={10}
          navigation
          className=" flex justify-center items-center"
        >
          <>
            {data?.map((item, index): ReactElement => {
              return (
                <SwiperSlide
                  key={`${item.id ?? index}`}
                  className="w-full flex justify-center h-full items-center"
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
