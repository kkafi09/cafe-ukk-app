"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { toast } from "react-toastify";

const DeleteButtonMenu = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();
    const isConfirm = confirm("Apakah benar ingin menghapus menu tersebut ?");
    if (!isConfirm) {
      return;
    }

    await api
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/menu/${id}`)
      .then((response) => {
        toast.success("Berhasil menghapus menu");
        router.refresh();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <Button
      onClick={(e) => handleDelete(e)}
      variant={"ghost"}
      className="text-red-500 hover:text-red-400"
    >
      <HiOutlineTrash />
    </Button>
  );
};

export default DeleteButtonMenu;
