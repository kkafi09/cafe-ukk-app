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
import DeleteButtonTable from "./DeleteButton";

async function TableMeja() {
  const mejaData = await getTable();

  return (
    <div className="mx-auto h-full mt-16">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nomor Meja</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mejaData.map((meja: IMeja, index: number) => (
            <TableRow key={meja.id}>
              <TableCell>{meja.nomor_meja}</TableCell>
              <TableCell>{meja.status}</TableCell>
              <TableCell className="text-xl cursor-pointer flex gap-2 justify-end pr-8 text-primary">
                <Link
                  href={"/admin/table/update?mejaId=" + meja.id}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <HiPencilSquare />
                </Link>
                <DeleteButtonTable id={meja.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableMeja;
