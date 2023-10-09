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
import DeleteButtonMenu from "./DeleteButton";

async function TableMenu() {
  const menuData = await getMenu();

  return (
    <div className="mx-auto h-full mt-16">
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
              <TableCell className="cursor-pointer">{menu.deskripsi}</TableCell>
              <TableCell>{menu.harga}</TableCell>
              <TableCell>
                <Link
                  href={"/admin/menu/update?menuId=" + menu.id}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <HiPencilSquare />
                </Link>
                <DeleteButtonMenu id={menu.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableMenu;
