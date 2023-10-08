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
  const [userData, setMejaData] = React.useState({
    name: "",
    username: "",
    password: "",
    role: "KASIR",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMejaData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await api
        .post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, userData)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Berhasil menambahkan user");
            router.refresh();
            router.push("/admin/user");
          } else {
            toast.error("Gagal menambah user : ", response.data.data.message);
          }
        });
    } catch (err) {
      toast.error("Gagal menambah user");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="name" className="text-left">
            Name
          </Label>
          <Input
            id="name"
            className="col-span-3"
            name="name"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="username" className="text-left">
            Username
          </Label>
          <Input
            id="username"
            className="col-span-3"
            name="username"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="password" className="text-left">
            Password
          </Label>
          <Input
            id="password"
            className="col-span-3"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="role" className="text-left">
            Role
          </Label>
          <select
            id="role"
            className="col-span-3 px-4 py-2 border rounded-md outline-none focus:outline-orange-500"
            name="role"
            value={userData.role}
            onChange={handleChange}
          >
            <option value="MANAGER">Manager</option>
            <option value="ADMIN">Admin</option>
            <option value="KASIR">Kasir</option>
          </select>
        </div>
        <Button type="submit">Tambah Meja</Button>
      </form>
    </div>
  );
};

export default AddForm;
