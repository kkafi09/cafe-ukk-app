"use client";
import { useCoffeeCart } from "@/context/CartContext";
import { IMenu } from "@/types/menu-types";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  menu: IMenu;
}

const CardMenu: React.FC<Props> = ({ menu }: Props) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    cartItems,
  } = useCoffeeCart();
  const quantity = getItemQuantity(menu.id);
  console.log(cartItems);

  const formatCurrency = (amount: number) => {
    const formattedAmount = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

    return formattedAmount;
  };

  return (
    <div
      className="w-full flex flex-col rounded-md p-4 bg-white shadow-md h-fit"
      key={menu.id}
    >
      <div className="flex flex-col gap-x-4">
        <div className="rounded w-full text-center">
          <Image
            src={
              menu.gambar ||
              "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            }
            alt={menu.nama_menu}
            width={200}
            height={200}
            className="w-full rounded h-36"
          />
        </div>
        <div className="flex flex-col w-full text-center gap-1 mt-2">
          <h3 className="text-2xl font-semibold text-zinc-800">
            {menu.nama_menu}
          </h3>
          <p className="text-base font-normal text-zinc-600">
            {menu.deskripsi}
          </p>
          <span className="font-bold text-xl text-orange-600">
            {formatCurrency(menu.harga)}
          </span>
        </div>
      </div>
      <div className="flex items-center h-fit w-fulljustify-between mt-6 gap-x-4">
        {quantity === 0 ? (
          <div className="flex w-full">
            <Button
              className="w-full"
              onClick={() => increaseCartQuantity(menu)}
            >
              Add to Cart
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-3 items-center mx-auto justify-between w-full">
            <Button
              onClick={() => decreaseCartQuantity(menu)}
              className="bg-zinc-50 w-9 h-9 flex justify-center items-center text-lg text-zinc-800 font-bold"
            >
              -
            </Button>
            <span className="font-semibold text-zinc-800 w-6 text-center">
              {quantity}
            </span>
            <Button
              onClick={() => increaseCartQuantity(menu)}
              className="bg-zinc-50 w-9 h-9 flex justify-center items-center text-lg text-zinc-800 font-semibold"
            >
              +
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMenu;
