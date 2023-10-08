import CardMenu from "@/components/reusable/CardMenu";
import RootLayout from "@/layouts/RootLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IMenu } from "../../../types/menu-types";

const getMenu = async (): Promise<IMenu[]> => {
  const token = cookies().get("jwtToken")?.value;
  if (!token) return redirect("/login");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const responseData = await response.json();
  const result: IMenu[] = responseData.data.map((menuItem: any) => ({
    id: menuItem.id,
    nama_menu: menuItem.nama_menu,
    jenis: menuItem.jenis,
    deskripsi: menuItem.deskripsi,
    gambar: menuItem.gambar,
    gambar_id: menuItem.gambar_id,
    harga: menuItem.harga,
  }));

  return result;
};

const Menu = async () => {
  const dataMenu: IMenu[] = await getMenu();

  return (
    <RootLayout>
      <div className="h-fit bg-zinc-50 flex flex-col gap-y-6">
        <div>
        <h1 className="text-2xl font-semibold py-4 text-primary uppercase  w-full bg-white fixed ">TOP Menu</h1>
          <div className="flex w-full mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {dataMenu.map((menu: IMenu) => {
                return <CardMenu menu={menu} key={menu.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Menu;
