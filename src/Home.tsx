import { useEffect, useState } from "react";
import Product from "./product";
import { cartType, itemType, setCartType } from "../types";

type PropType = {
  cart: cartType;
  setCart: setCartType;
};

const Home = ({ cart, setCart }: PropType) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      setData(result);
    };
    fetchData();
  });
  return (
    <div className="px-16 ">
      <h1 className="font-bold text-3xl pl-16 py-5">Home</h1>
      <div className="flex place-content-center flex-wrap">
        {data.length ? (
          data.map((item: itemType) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              desc={item.description}
              category={item.category}
              image={item.image}
              rating={item.rating}
              cart={cart}
              setCart={setCart}
            />
          ))
        ) : (
          <h1>Fetching Data</h1>
        )}
      </div>
    </div>
  );
};
export default Home;
