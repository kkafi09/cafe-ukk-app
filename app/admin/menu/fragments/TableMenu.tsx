import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IMenu } from "@/types/menu-types";
import Image from "next/image";
import Link from "next/link";
import { HiPencilSquare } from "react-icons/hi2";
import { getMenu } from "../actions";

async function TableMenu() {
  const menuData = await getMenu();
  console.log(menuData);

  return (
    <div className="mx-auto h-full">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Gambar</TableHead>
            <TableHead>Nama Menu</TableHead>
            <TableHead>Jenis Makanan</TableHead>
            <TableHead>Deskripsi</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuData.map((menu: IMenu, index: number) => (
            <TableRow key={menu.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <Image
                  src={menu.gambar}
                  alt={menu.nama_menu}
                  width={100}
                  height={100}
                  className="h-20"
                />
              </TableCell>
              <TableCell>{menu.nama_menu}</TableCell>
              <TableCell>{menu.jenis}</TableCell>
              <TableCell>{menu.deskripsi}</TableCell>
              <TableCell>{menu.harga}</TableCell>
              <TableCell className="text-xl cursor-pointer flex gap-2">
                <Link href={"/admin/menu/update?menuId=" + menu.id}>
                  <HiPencilSquare />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableMenu;
