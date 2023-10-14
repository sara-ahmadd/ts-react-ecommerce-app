import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      });
  }, [categories]);
  return { categories, setCategories };
};
