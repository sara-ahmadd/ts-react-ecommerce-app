import image from "/star.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { BsCartPlusFill } from "react-icons/bs";
type PropsType = {
  imgUrl: string;
  name: string;
  price: number;
  rate: number;
  count: number;
  id: string;
  action: () => void;
};
export const ImageElement = () => (
  <div className="w-5 h-5 p-0">
    <img src={image} className="w-full h-full p-0" />
  </div>
);

const ProductCard = ({
  imgUrl,
  name,
  price,
  rate,
  count,
  id,
  action,
}: PropsType) => {
  const stars = new Array<number>(Math.round(rate)).fill(0);
  const navigate = useNavigate();
  const { setModal } = useContext(ModalContext);
  const showDetails = () => {
    setModal(true);
    window.scrollTo({ top: 0 });
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className="flex flex-col w-72 border-2 rounded-lg h-min justify-center items-center p-0 pb-5 px-2 relative card bg-slate-100">
      <span className=" bg-red-700 text-white font-semibold p-2 absolute top-0 right-0 rounded-md">
        {count} Pieces
      </span>
      <div onClick={showDetails} className="p-0 w-full h-fit cursor-pointer">
        <div className=" h-52 w-full mt-1 p-0 flex items-center justify-center bg-white rounded-md">
          <img src={imgUrl} className=" h-32 w-32 object-contain p-0" />
        </div>
        <div className="flex flex-col h-28 w-full items-center justify-between p-5">
          <h2 className="text-gray-600 text-md p-0">{name.slice(0, 30)}...</h2>
          <h2 className="text-gray-600 font-bold text-lg p-0">${price}</h2>
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center w-full p-0 pb-3">
        {stars?.map((x, index) => (
          <ImageElement key={`${x + index}`} />
        ))}
      </div>
      <div className=" text-center w-full h-fit">
        <button onClick={action}>
          <BsCartPlusFill className=" w-8 h-8 p-0 object-cover text-sky-500 cart_icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
