import { useProductDetails } from "../Hooks/useProductDetails";
import { ImageElement } from "./ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import placeHolderImg from "/place-img.svg";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useProductDetails(id ?? "");

  const { modal, setModal } = useContext(ModalContext);
  const stars = new Array<number>(Math.round(data?.rating?.rate ?? 0)).fill(0);
  const navigate = useNavigate();

  return modal ? (
    <div className="modal">
      <div className=" md:flex flex-row gap-5 justify-between items-start md:h-96 w-4/5 my-0 mx-auto bg-white rounded-md relative">
        <button
          onClick={() => {
            setModal(false);
            navigate("/");
          }}
          className=" bg-red-700 text-white font-semibold p-2 absolute top-0 right-0 rounded-md"
        >
          Close
        </button>
        <div className="xs:h-64 xs:w-64  sm:h-40 sm:w-64 md:w-1/4 md:h-full p-0">
          <img
            src={data?.image ?? placeHolderImg}
            className="w-full h-full p-0"
          />
        </div>
        <div className="sm:h-40 sm:w-64 flex flex-col justify-start items-start md:w-3/4">
          <div className=" flex flex-col justify-center items-start p-0">
            <h1 className="font-bold text-lg p-1">{data?.title ?? ""}</h1>
            <p className="p-2 text-lg">{data?.description ?? ""}</p>
          </div>
          <div className="flex flex-col h-fit w-full p-0 justify-start items-end">
            <div className="flex gap-3 justify-start items-center w-full pt-5 pb-3">
              {stars
                ? stars.map((x, index) => <ImageElement key={`${x + index}`} />)
                : ""}
            </div>

            <h2 className="text-2xl font-bold p-0">
              {data ? `$${data.price}` : ""}
            </h2>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetails;