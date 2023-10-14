import Button from "./Button";

type ProductType = {
  imgUrl: string;
  name: string;
  price: number;
};

const ProductCard = ({ imgUrl, name, price }: ProductType) => {
  return (
    <div className="flex flex-col w-96 border-2 rounded-lg h-full justify-center items-center">
      <div className=" h-60 w-60">
        <img src={imgUrl} className="max-h-full max-w-full object-fill" />
      </div>
      <div className="flex flex-col w-full items-center h-64">
        <h2 className="text-gray-600 text-xl">{name}</h2>
        <h2 className="text-gray-600 font-bold text-lg">${price}</h2>
      </div>
      <Button action={() => console.log("button clicked")} text="Add to cart" />
    </div>
  );
};

export default ProductCard;
