import Button from "./Button";
import image from "/star.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
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

  return (
    <div className="flex flex-col w-96 border-2 rounded-lg h-full justify-center items-center p-0 pb-5 relative">
      <span className=" bg-red-700 text-white font-semibold p-2 absolute top-0 right-0 rounded-md">
        {count} Pieces
      </span>
      <div className=" h-60 w-60 mt-1">
        <img src={imgUrl} className="max-h-full max-w-full object-fill" />
      </div>
      <div className="flex flex-col w-full items-center h-44 justify-between">
        <h2 className="text-gray-600 text-md p-0">{name.slice(0, 50)}...</h2>
        <h2 className="text-gray-600 font-bold text-lg p-0">${price}</h2>
      </div>
      <div className="flex gap-3 justify-center items-center w-full p-0 pb-3">
        {stars?.map((x, index) => (
          <ImageElement key={`${x + index}`} />
        ))}
      </div>
      <Button action={action} text="Add to cart" />
      <Button
        action={() => {
          setModal(true);
          navigate(`/productDetails/${id}`);
        }}
        text="Details"
      />
    </div>
  );
};

export default ProductCard;
