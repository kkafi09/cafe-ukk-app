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
  const [menuData, setMenuData] = React.useState({
    nama_menu: "",
    jenis: "",
    deskripsi: "",
    harga: "0",
  });
  const [gambar, setGambar] = React.useState<FileList | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMenuData({
      ...menuData,
      [name]: value,
    });
  };

  const handleFileChange = (files: FileList | null) => {
    setGambar(files);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const menuForm = new FormData();
      menuForm.append("nama_menu", menuData.nama_menu);
      menuForm.append("jenis", menuData.jenis);
      menuForm.append("deskripsi", menuData.deskripsi);
      menuForm.append("harga", menuData.harga);
      if (gambar) {
        menuForm.append("gambar", gambar[0]);
      }

      console.log("nama_menu " + menuForm.get("nama_menu"));
      console.log("jenis " + menuForm.get("jenis"));
      console.log("deskripsi " + menuForm.get("deskripsi"));
      console.log("harga " + menuForm.get("harga"));
      console.log("gambar " + menuForm.get("gambar"));

      await api
        .post(`${process.env.NEXT_PUBLIC_API_URL}/menu`, menuForm)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Berhasil menambahkan menu");
            router.refresh();
            router.push("/admin/menu");
          } else {
            toast.error("Gagal menambah menu");
          }
        });
    } catch (err) {
      toast.error("Gagal menambah pesanan");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="nama_menu" className="text-left">
            Nama Pelanggan
          </Label>
          <Input
            id="nama_menu"
            className="col-span-3"
            name="nama_menu"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="meja" className="text-left">
            Jenis Menu
          </Label>
          <select
            id="Jenis"
            className="col-span-3 px-4 py-2 border rounded-md outline-none focus:outline-orange-500"
            name="jenis"
            onChange={handleChange}
          >
            <option value="" disabled>
              Pilih Jenis
            </option>
            <option value="makanan" selected>
              Makanan
            </option>
            <option value="minuman">Minuman</option>
          </select>
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="deskripsi" className="text-left">
            Deskripsi
          </Label>
          <Input
            id="deskripsi"
            className="col-span-3"
            name="deskripsi"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="harga" className="text-left">
            Harga
          </Label>
          <Input
            id="harga"
            className="col-span-3"
            name="harga"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="gambar" className="text-left">
            Gambar
          </Label>
          <Input
            id="gambar"
            className="col-span-3"
            name="gambar"
            type="file"
            onChange={(e) => handleFileChange(e.target.files)}
          />
        </div>
        <Button type="submit">Tambah Menu</Button>
      </form>
    </div>
  );
};

export default AddForm;
