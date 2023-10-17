import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Product, useProducts } from "../Hooks/useProducts";
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
import { User, UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
import { UsersDatabaseContext } from "../context/UsersDatabaseContext";
import { useGetUser } from "../Hooks/useGetUser";

const ProductsSlider = () => {
  const { category } = useContext(CategoryContext);
  const { data } = useProducts(category);

  const { user, updateUser } = useContext(UserContext);
  const { UpdateUsersDB } = useContext(UsersDatabaseContext);

  //get the saved cart of the current user from local storage
  const getSavedCart = (currentU: User) => {
    return currentU.cart ?? [];
  };

  const currUser = useGetUser(user.email, user.password);

  const checkProduct = (p: Product, arr: Product[]) => {
    const prod = arr.find((x) => x.id === p.id);
    return prod ? prod : null;
  };
  const updateUserCart = (user: User, product: Product) => {
    if (user.email && user.password) {
      if (user.cart !== undefined) {
        let retreivedCart = getSavedCart(currUser);

        if (checkProduct(product, retreivedCart) !== null) {
          console.log("amount", product.amount, product);

          retreivedCart = retreivedCart.filter((x) => x.id !== product.id);
          const quantity = product.amount ?? 0;
          const updatedCart = [
            ...retreivedCart,
            { ...product, amount: quantity + 1 },
          ];

          const updatedUser = { ...user, cart: updatedCart };
          updateUser(updatedUser);
          UpdateUsersDB(updatedUser);
        } else {
          console.log(checkProduct(product, retreivedCart));

          const updatedCart = [...retreivedCart, { ...product, amount: 1 }];

          const updatedUser = { ...user, cart: updatedCart };
          updateUser(updatedUser);
          UpdateUsersDB(updatedUser);
        }
      }
    } else {
      Swal.fire({
        title: "Opps!",
        text: "Please login or signup to be able to shop now :)",
        icon: "info",
        confirmButtonText: "Ok",
      });
    }
  };

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
                  className="w-full flex justify-center h-max items-center pt-0"
                >
                  <ProductCard
                    imgUrl={item.image}
                    name={item.title}
                    price={item.price}
                    rate={item.rating.rate}
                    count={item.rating.count}
                    id={item.id}
                    action={() => updateUserCart(user, item)}
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
