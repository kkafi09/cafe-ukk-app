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
import { IMenu } from "@/types/menu-types";
import {
  HiEllipsisVertical,
  HiOutlineCurrencyDollar,
  HiOutlinePrinter,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
//   import { getTransaksi } from "../actions";

const Menus = [
  {
    id: "2",
    nama_menu: "sambel batak",
    jenis: "food",
    harga: 200000,
    deskripsi: "enak danbergizi",
    gambar: "",
  },
  {
    id: "3",
    nama_menu: "sambel batak",
    jenis: "food",
    harga: 200000,
    deskripsi: "enak danbergizi",
    gambar: "",
  },
  {
    id: "4",
    nama_menu: "sambel batak",
    jenis: "food",
    harga: 200000,
    deskripsi: "enak danbergizi",
    gambar: "",
  },
  {
    id: "5",
    nama_menu: "sambel batak",
    jenis: "food",
    harga: 200000,
    deskripsi: "enak danbergizi",
    gambar: "",
  },
  {
    id: "6",
    nama_menu: "sambel batak",
    jenis: "food",
    harga: 200000,
    deskripsi: "enak danbergizi",
    gambar: "",
  },
  {
    id: "7",
    nama_menu: "sambel batak",
    jenis: "food",
    harga: 200000,
    deskripsi: "enak danbergizi",
    gambar: "",
  },
];

const formatCurrency = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
  return formattedAmount;
};
async function TableHis() {
  // const transaksiData = await getTransaksi();

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
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Menus.map((menu, index) => (
            <TableRow key={menu.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{menu.nama_menu}</TableCell>
              <TableCell>{menu.jenis}</TableCell>
              <TableCell>{menu.deskripsi}</TableCell>
              <TableCell>{formatCurrency(menu.harga)}</TableCell>
              <TableCell>{menu.gambar}</TableCell>
              <TableCell>
                <HiOutlineTrash />
                <HiOutlinePencilSquare />
              </TableCell>
              <TableCell className="w-2 cursor-pointer hover:bg-zinc-100">
                <HiEllipsisVertical />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableHis;
