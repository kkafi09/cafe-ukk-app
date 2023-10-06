"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

const CardMenu = () => {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col rounded-md p-4 bg-white shadow-md h-fit">
      <div className="flex gap-x-4">
        <div className="rounded w-1/3">
          <Image
            src={
              "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            }
            alt=""
            width={200}
            height={200}
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col w-2/3">
          <div className="flex items-center gap-x-2">
            <h3 className="text-2xl font-semibold text-zinc-800">Americano</h3>
            <span className="font-bold text-xl text-orange-600">18K</span>
          </div>
          <p className="text-base font-normal text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eveniet porro non facere
          </p>
        </div>
      </div>
      <div className="flex items-center h-fit w-fulljustify-between mt-6 gap-x-4">
        <div className="flex gap-x-3 items-center justify-center w-1/3">
          <button
            onClick={handleMinus}
            className="rounded-full bg-zinc-50 w-9 h-9 flex justify-center items-center text-lg text-zinc-800 font-bold border"
          >
            -
          </button>
          <span className="font-semibold text-zinc-800 w-6 text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="rounded-full bg-zinc-50 w-9 h-9 flex justify-center items-center text-lg text-zinc-800 font-semibold border"
          >
            +
          </button>
        </div>
        <div className="flex w-2/3">
          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
