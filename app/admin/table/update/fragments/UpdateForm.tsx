"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "react-toastify";

const UpdateForm = ({ mejaId }: { mejaId: number }) => {
  const router = useRouter();
  const [mejaData, setMejaData] = React.useState({
    nomor_meja: "",
    status: "kosong",
  });

  React.useEffect(() => {
    const fetchMejaData = async () => {
      try {
        const response = await api.get(
          `${process.env.NEXT_PUBLIC_API_URL}/meja/${mejaId}`
        );
        const existingMejaData = response.data.data;
        setMejaData(existingMejaData);
      } catch (error) {
        toast.error("Gagal mengambil data meja");
      }
    };

    fetchMejaData();
  }, [mejaId]);

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
        .put(`${process.env.NEXT_PUBLIC_API_URL}/meja/${mejaId}`, mejaData)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Berhasil memperbarui meja");
            router.refresh();
            router.push("/admin/table");
          } else {
            toast.error(
              "Gagal memperbarui meja : ",
              response.data.data.message
            );
          }
        });
    } catch (err) {
      toast.error("Gagal memperbarui meja");
    }
  };

  return (
    <div className=" gap-4 flex justify-center items-center pt-24">
      <form onSubmit={handleSubmit} className="w-full mx-auto max-w-sm">
        <div className="grid grid-cols-1 mb-4  items-center gap-4">
          <Label htmlFor="nomor_meja" className="text-left">
            Nomor Meja
          </Label>
          <Input
            id="nomor_meja"
            className="col-span-3"
            name="nomor_meja"
            type="number"
            value={mejaData.nomor_meja}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 mb-4  items-center gap-4">
          <Label htmlFor="status" className="text-left">
            Status
          </Label>
          <select
            id="status"
            className="col-span-3 px-4 py-2 border rounded-md outline-none focus:outline-orange-500"
            name="status"
            value={mejaData.status}
            onChange={handleChange}
          >
            <option value="kosong">Kosong</option>
            <option value="terisi">Terisi</option>
          </select>
        </div>
        <Button type="submit" className="w-full max-w-sm">
          Perbarui Meja
        </Button>
      </form>
    </div>
  );
};

export default UpdateForm;
