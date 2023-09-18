import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";

const Container = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <div>
      <Navbar cart={cart} />
      <Outlet context={[cart, setCart]} />
    </div>
  );
};

export default Container;
