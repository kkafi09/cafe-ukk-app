import StrukPrint from "@/components/elements/invoice/InvoicePrint";
import PrintButton from "@/components/elements/invoice/PrintButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ITransaksi } from "@/types/transaksi-types";
import { HiOutlinePrinter } from "react-icons/hi2";

const InvoicePrintButton = ({ data }: { data: ITransaksi }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <HiOutlinePrinter />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Print Invoice</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div id="print-area" className="min-h-fit pb-10 bg-white ">
            <StrukPrint item={data} />{" "}
          </div>
        </div>
        <DialogFooter>
          <div className="w-full">
            <PrintButton nama={data.nama_pelanggan} />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InvoicePrintButton;
