import { useProductDetails } from "../Hooks/useProductDetails";
import { ImageElement } from "./ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import placeHolderImg from "/place-img.svg";
import { useContext, useEffect } from "react";
import { ModalContext } from "../context/ModalContext";
import Increment_Decremetn_Btn from "./Increment_Decremetn_Btn";
import { CartContext } from "../context/CartContext";
import { UsersDatabaseContext } from "../context/UsersDatabaseContext";
import { UserContext } from "../context/UserContext";
import { useGetUser } from "../Hooks/useGetUser";
import managePieces from "../functions/handlePiecesQuantity";
import { updateUserCart } from "../functions/updateUserCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useProductDetails(id ?? "");
  const { modal, handleModal } = useContext(ModalContext);
  const stars = new Array<number>(Math.round(data?.rating?.rate ?? 0)).fill(0);
  const navigate = useNavigate();
  const { updateCart } = useContext(CartContext);
  const { UpdateUsersDB } = useContext(UsersDatabaseContext);
  const { user, updateUser } = useContext(UserContext);
  const currUser = useGetUser(user.email, user.password);

  useEffect(() => {
    if (modal === true) {
      window.scrollTo({ top: 0 });
      document.body.style.overflow = "hidden";
    }
    if (modal === false) {
      document.body.style.overflow = "scroll";
      navigate("/");
    }
  }, [modal, navigate]);

  const closeModal = () => {
    handleModal(!modal);
  };
  return modal ? (
    <div className="modal flex flex-col justify-start items-start pt-20">
      <div className=" md:flex flex-row gap-5 justify-between items-start md:h-96 w-4/5 my-0 mx-auto bg-white rounded-md relative">
        <button
          onClick={closeModal}
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
          <div className="flex justify-between items-center p-0 w-20">
            <Increment_Decremetn_Btn
              sign="+"
              action={() => {
                data &&
                  updateUserCart(
                    user,
                    currUser,
                    data,
                    updateUser,
                    UpdateUsersDB
                  );
              }}
            />
            {currUser?.cart?.find((x) => x?.title === data?.title || undefined)
              ?.amount ?? 0}
            <Increment_Decremetn_Btn
              sign="-"
              action={() => {
                managePieces(
                  data?.title ?? "",
                  "-",
                  currUser,
                  updateCart,
                  UpdateUsersDB
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetails;
