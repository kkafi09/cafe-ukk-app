import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { HiOutlinePrinter } from "react-icons/hi2";

export const getTransaksi = async () => {
  const token = cookies().get("jwtToken")?.value;
  if (!token) return redirect("/login");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaksi`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const result = await response.json();

  return result.data;
};

async function TableHis() {
  const transaksiData = await getTransaksi();

  return (
    <div className="mx-auto">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Nama Pembeli</TableHead>
            <TableHead>Nama Kasir</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tanggal Transaksi</TableHead>
            <TableHead>No. Meja</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Print</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transaksiData.map((transaksi: any) => (
            <TableRow key={transaksi.id}>
              <TableCell className="font-medium">{transaksi.resi}</TableCell>
              <TableCell>{transaksi.nama_pelanggan}</TableCell>
              <TableCell>{transaksi.nama_kasir}</TableCell>
              <TableCell>{transaksi.status}</TableCell>
              <TableCell>{transaksi.tgl_transaksi}</TableCell>
              <TableCell>{transaksi.nomor_meja}</TableCell>
              <TableCell className="text-xl cursor-pointer">
                <HiOutlinePrinter />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableHis;