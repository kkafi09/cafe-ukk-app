import TableHis from "@/app/kasir/history/fragments/TableHistory";
import DatePickerWithRange from "@/components/reusable/DatePickerWithRange";
import ReSelect from "@/components/reusable/ReSelect";
import RootLayout from "@/layouts/RootLayout";

const History = () => {
  return (
    <RootLayout>
      <div className="py-6 flex  justify-between fixed bg-white z-30 w-full max-w-7xl pr-10">
        <h1 className="text-2xl font-semibold text-primary uppercase opacity-70 ">History Transaksi</h1>
        <div className="flex gap-4">
          <DatePickerWithRange />
          <ReSelect />
        </div>
      </div>
      <div className="mt-20 h-[75vh] overflow-y-scroll">
        <TableHis />
      </div>
    </RootLayout>
  );
};

export default History;
