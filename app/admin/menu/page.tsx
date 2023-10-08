import RootLayout from "@/layouts/RootLayout";
import Link from "next/link";
import TableMenu from "./fragments/TableMenu";

const Menu = () => {
  return (
    <RootLayout>
      <Link href={"/admin/menu/add"}>
        <span className="text-orange-500">Tambah Menu</span>
      </Link>
      <TableMenu />
    </RootLayout>
  );
};

export default Menu;
