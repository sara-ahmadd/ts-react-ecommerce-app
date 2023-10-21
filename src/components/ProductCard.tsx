import image from "/star.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { BsCartPlusFill } from "react-icons/bs";
import Increment_Decremetn_Btn from "./Increment_Decremetn_Btn";
import { Product } from "../Hooks/useProducts";
import { useGetUser } from "../Hooks/useGetUser";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import { UsersDatabaseContext } from "../context/UsersDatabaseContext";
import managePieces from "../functions/handlePiecesQuantity";
import trueIcon from "/true-icon.png";

type PropsType = {
  action: () => void;
  item: Product;
};
export const ImageElement = () => (
  <div className="w-5 h-5 p-0">
    <img src={image} className="w-full h-full p-0" />
  </div>
);

const ProductCard = ({ action, item }: PropsType) => {
  const [hover, setHover] = useState(false);

  const { updateCart } = useContext(CartContext);
  const { UpdateUsersDB } = useContext(UsersDatabaseContext);

  const { user, updateUser } = useContext(UserContext);
  const currUser = useGetUser(user.email, user.password);
  const { image, title, price, rating, id } = item;
  const stars = new Array<number>(Math.round(rating?.rate || 0)).fill(0);
  const navigate = useNavigate();
  const { handleModal } = useContext(ModalContext);
  const showDetails = () => {
    handleModal(true);
    navigate(`/productDetails/${id}`);
  };
  const decrementAmount = (title: string) => {
    managePieces(title, "-", currUser, updateCart, UpdateUsersDB);
    updateUser(currUser);
  };
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="flex flex-col w-72 border-2 rounded-lg h-min justify-center items-center p-0 pb-5 px-2 relative card bg-slate-100"
    >
      <span className=" bg-red-700 text-white font-semibold p-2 absolute top-0 right-0 rounded-md">
        {rating?.count || 0} Pieces
      </span>
      <div onClick={showDetails} className="p-0 w-full h-fit cursor-pointer">
        <div className=" h-52 w-full mt-1 p-0 flex items-center justify-center bg-white rounded-md">
          <img src={image} className=" h-32 w-32 object-contain p-0" />
        </div>
        <div className="flex flex-col h-28 w-full items-center justify-between p-5">
          <h2 className="text-gray-600 text-md p-0">
            {title?.slice(0, 30)}...
          </h2>
          <h2 className="text-gray-600 font-bold text-lg p-0">${price}</h2>
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center w-full p-0 pb-3">
        <span className="p-0 pr-1">Rating:</span>
        {stars?.map((x, index) => (
          <ImageElement key={`${x + index}`} />
          ))}
          <span className="p-0 pr-1">({rating?.rate})</span>
      </div>
      <div className="flex justify-between items-center w-full h-fit p-0">
        <button onClick={action} className="w-1/2 p-1">
          <BsCartPlusFill className=" w-8 h-8 p-0 object-cover text-sky-500 cart_icon" />
        </button>
        <div className="flex w-1/2 justify-end gap-2 items-center p-0">
          <div className="flex justify-end gap-1 items-center w-28 h-28 p-0">
            {(currUser?.cart?.find((x) => x.id === item.id)?.amount || 0) >
              0 && <img src={trueIcon} className="w-7 h-7 object-cover p-0" />}
            <span className="p-0">
              {currUser?.cart?.find((x) => x.id === item.id)?.amount ?? 0}
            </span>
          </div>
          {hover && (
            <Increment_Decremetn_Btn
              sign="-"
              action={() => decrementAmount(title ?? "")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
