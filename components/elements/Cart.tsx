import React from "react";
import { BsBag } from "react-icons/bs";
const Cart = () => {
  return (
    <div className="p-4 fixed bg-primary rounded-full w-fit text-white text-2xl font-extrabold z-50 bottom-12 right-12 cursor-pointer">
      <BsBag />
    </div>
  );
};

export default Cart;
