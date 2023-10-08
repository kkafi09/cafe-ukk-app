import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IMeja } from "@/types/meja-types";
import Link from "next/link";
import { HiPencilSquare } from "react-icons/hi2";
import { getTable } from "../actions";

async function TableMeja() {
  const mejaData = await getTable();

  return (
    <div className="mx-auto h-full">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nomor Meja</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mejaData.map((meja: IMeja, index: number) => (
            <TableRow key={meja.id}>
              <TableCell>{meja.nomor_meja}</TableCell>
              <TableCell>{meja.status}</TableCell>
              <TableCell className="text-xl cursor-pointer flex gap-2">
                <Link href={"/admin/table/update?mejaId=" + meja.id}>
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

export default TableMeja;
