import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITransaksi } from "@/types/transaksi-types";
import { HiOutlineCurrencyDollar, HiOutlinePrinter } from "react-icons/hi2";
import { getTransaksi } from "../actions";

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
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transaksiData.map((transaksi: ITransaksi) => (
            <TableRow key={transaksi.id}>
              <TableCell className="font-medium">{transaksi.resi}</TableCell>
              <TableCell>{transaksi.nama_pelanggan}</TableCell>
              <TableCell>{transaksi.nama_kasir}</TableCell>
              <TableCell>{transaksi.status}</TableCell>
              <TableCell>{transaksi.tgl_transaksi}</TableCell>
              <TableCell>{transaksi.nomor_meja}</TableCell>
              <TableCell>{transaksi.total_harga}</TableCell>
              <TableCell className="text-xl cursor-pointer flex gap-2">
                <HiOutlinePrinter />
                {transaksi.status === "belum bayar" ? (
                  <HiOutlineCurrencyDollar />
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableHis;
