import shop_1 from "/shop-1.jpg";
import shop_2 from "/shop-2.jpg";
import shop_3 from "/shop-3.jpg";
import shop_4 from "/shop-4.jpg";
import shop_5 from "/shop5.jpg";
import shop_6 from "/shop-6.jpg";
import shop_7 from "/shop-7.jpg";
import shop_8 from "/shop-8.jpg";
import shop_9 from "/shop-9.jpg";
import shop_10 from "/shop-10.jpg";
import shop_11 from "/shop-11.jpg";
import "./../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ReactElement, useState } from "react";
function GridImages() {
  const imgs = [
    shop_1,
    shop_2,
    shop_3,
    shop_4,
    shop_5,
    shop_6,
    shop_7,
    shop_8,
    shop_9,
    shop_10,
    shop_11,
  ];
  const [count, setCount] = useState(0);
  const imgNodes = imgs.map((x, index): JSX.Element => {
    return (
      <div key={`${x}-${index}`} className="img rounded">
        <img src={x} className="w-full h-full rounded  p-1 object-fit" />
      </div>
    );
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 3200) {
          return 0;
        }
        return prev + 400;
      });
    }, 1900);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className=" p-1 flex justify-center items-center  overflow-hidden item-1">
        <div className=" absolute top-0 left-0 z-20 txt_content">
          <p className=" text-5xl font-bold text-white">See our new arrival </p>
          <Link to={"/"} className="btn rounded-md text-white">
            New Collection
          </Link>
        </div>
        <div
          className="imgs_container rounded"
          style={{ transform: `translateX(-${count}px)` }}
        >
          {imgNodes}
        </div>
      </div>
    </>
  );
}

export default GridImages;
