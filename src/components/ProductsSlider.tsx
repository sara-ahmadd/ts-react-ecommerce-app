import { Swiper, SwiperSlide } from "swiper/react";
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
import { UserContext } from "../context/UserContext";
// import Swal from "sweetalert2";
import { UsersDatabaseContext } from "../context/UsersDatabaseContext";
import { useGetUser } from "../Hooks/useGetUser";
import { updateUserCart } from "../functions/updateUserCart";

const ProductsSlider = () => {
  const { category } = useContext(CategoryContext);
  const { data } = useProducts(category);

  const { user, updateUser } = useContext(UserContext);
  const { UpdateUsersDB } = useContext(UsersDatabaseContext);

  const currUser = useGetUser(user.email, user.password);

  return (
    <div className="container-box p-0" id="container-box">
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
                  className="w-full flex justify-center h-max items-center pt-10"
                >
                  <ProductCard
                    item={item}
                    action={() => {
                      updateUserCart(
                        user,
                        currUser,
                        item,
                        updateUser,
                        UpdateUsersDB
                      );
                    }}
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
