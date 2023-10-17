import axios from "axios";
import { useEffect, useState } from "react";
import {Product} from './useProducts'
type useProductsType = (s: string) => {
  data: Product | null;
  setData: React.Dispatch<React.SetStateAction<null>>;
};

export const useProductDetails: useProductsType = (id: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com/",
      url: `/products/${id}`,
    }).then((res) => {
      setData(res.data);
    });
  }, [id]);
  return { data, setData };
};
