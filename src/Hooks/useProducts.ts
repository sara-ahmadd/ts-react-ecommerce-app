import axios from "axios";
import { useEffect, useState } from "react";
export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  description?: string;
  amount?: number;
}
type useProductsType = (s: string) => {
  data: Product[] | null;
  setData: React.Dispatch<React.SetStateAction<null>>;
};

export const useProducts: useProductsType = (category: string = "") => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com/",
      url: `/products${category}`,
    }).then((res) => {
      setData(res.data);
    });
  }, [category]);
  return { data, setData };
};
