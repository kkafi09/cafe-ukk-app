"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCoffeeCart } from "@/context/CartContext";
import { IMeja } from "@/types/meja-types";
import { IMenu } from "@/types/menu-types";
import { IUser } from "@/types/user-types";
import { api } from "@/utils/api";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import * as React from "react";
import { SyntheticEvent } from "react";
import { toast } from "react-toastify";

interface Props {
  user: IUser;
}

const OrderMenu = ({ user }: Props) => {
  const { cartItems } = useCoffeeCart();
  const router = useRouter();

  const [meja, setMeja] = React.useState<IMeja[] | null>(null);
  const [menu, setMenu] = React.useState<IMenu[] | null>(null);
  const [dataOrder, setDataOrder] = React.useState({
    nama_pelanggan: "",
    status: "belum-lunas",
    tgl_transaksi: new Date().toISOString().split("T")[0],
    userId: user.id,
    mejaId: null,
    detailTransaksi: cartItems,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDataOrder({
      ...dataOrder,
      [name]: value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await api
        .post(`${process.env.NEXT_PUBLIC_API_URL}/transaksi`, dataOrder)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Berhasil melakukan transaksi");
            router.refresh();
            router.push("/kasir/history");
          } else {
            toast.error("Gagal menambah pesanan");
          }
        });
    } catch (err) {
      toast.error("Gagal menambah pesanan");
    }
  };

  React.useEffect(() => {
    const getMeja = async () => {
      await api
        .get(`${process.env.NEXT_PUBLIC_API_URL}/meja?status=kosong`)
        .then((response) => {
          setMeja(response.data.data);
        });
    };

    const getMenu = async () => {
      await api
        .get(`${process.env.NEXT_PUBLIC_API_URL}/menu`)
        .then((response) => {
          setMenu(response.data.data);
        });
    };

    return () => {
      getMeja();
      getMenu();
    };
  }, []);

  return (
    <div className="grid gap-4 py-4 h-[80vh] overflow-y-scroll">
      <div className="grid grid-cols-1 gap-4 mr-4">
        {cartItems.map((item) => {
          const menuItem = menu?.find((m) => m.id === item.menuId);

          if (!menuItem) {
            return null;
          }

          return (
            <div
              key={menuItem.id}
              className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between"
            >
              <div className="mb-4">
                <p className="text-lg font-semibold">{menuItem.nama_menu}</p>
                <p className="text-gray-600">{menuItem.deskripsi}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-700">{menuItem.harga}</p>
                <p className="text-gray-500">Quantity: {item.jumlah}</p>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="mx-2">
        <div className="gap-4 flex mb-4 flex-col justify-start items-start">
          <Label htmlFor="name">Nama Pelanggan</Label>
          <Input
            id="name"
            className="col-span-3"
            name="nama_pelanggan"
            value={dataOrder.nama_pelanggan}
            onChange={handleChange}
          />
        </div>
        <div className="gap-4 flex flex-col justify-start mb-4 items-start">
          <Label htmlFor="meja">Pilih Meja</Label>
          <select
            id="meja"
            className=" w-full px-4 py-2 border rounded-md outline-none focus:outline-orange-500 "
            name="mejaId"
            value={dataOrder.mejaId || ""}
            onChange={handleChange}
          >
            <option value="" disabled>
              Pilih Meja
            </option>
            {meja &&
              meja.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.nomor_meja}
                </option>
              ))}
          </select>
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
};

export default OrderMenu;
