import TableHis from "@/app/kasir/history/fragments/TableHistory";
import DatePickerWithRange from "@/components/reusable/DatePickerWithRange";
import ReSelect from "@/components/reusable/ReSelect";
import RootLayout from "@/layouts/RootLayout";

const History = () => {
  return (
    <RootLayout>
      <h1 className="text-2xl font-semibold">History Transaksi</h1>
      <div className="mt-2 flex gap-x-4">
        <DatePickerWithRange />
        <ReSelect />
      </div>
      <div className="mt-4">
        <TableHis />
      </div>
    </RootLayout>
  );
};

export default History;
