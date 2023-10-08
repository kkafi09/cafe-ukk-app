"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "react-toastify";

const AddForm = () => {
  const router = useRouter();
  const [mejaData, setMejaData] = React.useState({
    nomor_meja: "",
    status: "kosong",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMejaData({
      ...mejaData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await api
        .post(`${process.env.NEXT_PUBLIC_API_URL}/meja`, mejaData)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Berhasil menambahkan meja");
            router.refresh();
            router.push("/admin/table");
          } else {
            toast.error("Gagal menambah meja : ", response.data.data.message);
          }
        });
    } catch (err) {
      toast.error("Gagal menambah meja");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="nomor_meja" className="text-left">
            Nomor Meja
          </Label>
          <Input
            id="nomor_meja"
            className="col-span-3"
            name="nomor_meja"
            type="number"
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Tambah meja</Button>
      </form>
    </div>
  );
};

export default AddForm;
