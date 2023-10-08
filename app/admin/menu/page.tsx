import RootLayout from "@/layouts/RootLayout";
import Link from "next/link";
import TableMenu from "./fragments/TableMenu";

const Menu = () => {
  return (
    <RootLayout>
      <div className="w-full h-20 bg-white fixed text-xs  z-50">
        <Link
          href={"/admin/menu/add"}
          className=" font-semibold rounded-md py-3 text-white  text-primary uppercase  w-fit px-10 bg-primary "
        >
          Tambah menu
        </Link>
      </div>

      <TableMenu />
    </RootLayout>
  );
};

export default Menu;
