import axios from "axios";
import { useEffect, useState } from "react";
interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}
type useProductsType = () => {
  data: Product[] | null;
  setData: React.Dispatch<React.SetStateAction<null>>;
};

export const useProducts: useProductsType = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com/",
      url: "/products",
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return { data, setData };
};
