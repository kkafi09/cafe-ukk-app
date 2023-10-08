"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "react-toastify";

const UpdateForm = ({ userId }: { userId: number }) => {
  const router = useRouter();
  const [userData, setUserData] = React.useState({
    name: "",
    username: "",
    role: "MANAGER",
  });
  const [photoProfile, setPhotoProfile] = React.useState<FileList | null>(null);

  React.useEffect(() => {
    const fetchMejaData = async () => {
      try {
        const response = await api.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`
        );
        const existingMejaData = response.data.data; // Adjust this based on your API response structure
        setUserData(existingMejaData);
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchMejaData();
  }, [userId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleFileChange = (files: FileList | null) => {
    setPhotoProfile(files);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("username", userData.username);
      formData.append("role", userData.role);
      if (photoProfile) {
        formData.append("photo_profile", photoProfile[0]);
      }

      await api
        .put(`${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`, formData)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Berhasil memperbarui user");
            router.refresh();
            router.push("/admin/user");
          } else {
            toast.error(
              "Gagal memperbarui user : ",
              response.data.data.message
            );
          }
        });
    } catch (err) {
      toast.error("Gagal memperbarui user");
    }
  };

  return (
    <div className=" gap-4 flex justify-center items-center pt-20">
      <form onSubmit={handleSubmit}>
        <div className="w-full mx-auto grid grid-cols-2 gap-x-8">
          <div className="grid grid-cols-1 mb-4  items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              name="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 mb-4  items-center gap-4">
            <Label htmlFor="photo_profile" className="text-left">
              Photo Profile
            </Label>
            <Input
              id="photo_profile"
              className="col-span-3"
              name="photo_profile"
              type="file"
              onChange={(e) => handleFileChange(e.target.files)}
            />
          </div>
          <div className="grid grid-cols-1 mb-4  items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Username
            </Label>
            <Input
              id="username"
              className="col-span-3"
              name="username"
              type="text"
              value={userData.username}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 mb-4  items-center gap-4">
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
        </div>

        <Button type="submit" className="w-full mt-10">Perbarui Meja</Button>
      </form>
    </div>
  );
};

export default UpdateForm;
