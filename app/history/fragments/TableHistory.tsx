import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiOutlinePrinter } from "react-icons/hi2";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "Rp 25.000",
    barangDibeli: "Es Kopi Susu Gula Aren",
    namaPembeli: "Agung",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "Rp 18.000",
    barangDibeli: "Es Kopi Susu Gula Aren",
    namaPembeli: "Eko",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "Rp 13.000",
    barangDibeli: "Es Kopi Susu Gula Aren",
    namaPembeli: "Supriadi",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "Rp 64.000",
    barangDibeli: "Es Kopi Susu Gula Aren",
    namaPembeli: "Bagas",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "Rp 37.000",
    barangDibeli: "Es Kopi Susu Gula Aren",
    namaPembeli: "Wahyu",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "Rp 21.000",
    barangDibeli: "Es Kopi Susu Gula Aren",
    namaPembeli: "Sugeng",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "Rp 56.000",
    barangDibeli: "Es Kopi Susu Gula Aren",
    namaPembeli: "Saiful",
    paymentMethod: "Credit Card",
  },
];

export default function TableHis() {
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
            <TableHead>Tanggal</TableHead>
            <TableHead>No. Meja</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Print</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.barangDibeli}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.namaPembeli}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
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
