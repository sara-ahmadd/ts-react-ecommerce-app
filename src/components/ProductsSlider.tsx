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

  const currUser = useGetUser(user.email, user.password);
  //get the saved cart of the current user from local storage
  const getSavedCart = (currentU: User) => {
    return currentU.cart ?? [];
  };
  const checkProduct = (p: Product, arr: Product[]) => {
    const prod = arr.find((x) => x.id === p.id);
    return prod ? prod : null;
  };

  const updateUserCart = (user: User, pr: Product) => {
    if (user.email && user.password) {
      if (user.cart !== undefined) {
        //get the cart of the current user, then check if the clicked product is already in the cart.
        let retreivedCart = getSavedCart(currUser);
        const checkedProduct = checkProduct(pr, retreivedCart);
        //if the product is found in the cart
        if (checkProduct !== null) {
          //delete the product from the cart, then update the amount in the found product
          retreivedCart = retreivedCart.filter((x) => x.id && x.id !== pr.id);
          const quantity = checkedProduct?.amount ?? 0;

          //add the updated product to the cart
          const updatedCart = [
            ...retreivedCart,
            { ...pr, amount: quantity + 1 },
          ];
          const updatedUser = { ...user, cart: updatedCart };
          updateUser(updatedUser);
          UpdateUsersDB(updatedUser);
        } else {
          const updatedCart = [...retreivedCart, { ...pr, amount: 1 }];
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
    <div className="container-box p-0" id="container-box">
      <div className="small-container p-0">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={4}
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
