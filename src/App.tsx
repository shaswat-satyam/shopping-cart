import { useState } from "react";
import Home from "./Home";
import Cart from "./Cart";
import { cartType } from "../types";

function App() {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [cart, setCart] = useState<cartType>([]);
  return (
    <>
      <div className="text-white min-h-screen max-h-full  bg-black p-5">
        <div className="flex place-content-around text-white bg-black">
          <h1 className="font-bold text-4xl">Hello Shopping Site</h1>
          <button onClick={() => setIsHome(!isHome)}>{`Switch to ${
            isHome ? "Shopping Cart 🛒" : "Home 🏠"
          }`}</button>
        </div>
        {isHome ? (
          <Home cart={cart} setCart={setCart} />
        ) : (
          <Cart cart={cart} setCart={setCart} />
        )}
      </div>
    </>
  );
}

export default App;
