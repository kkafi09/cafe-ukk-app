import RootLayout from "@/layouts/RootLayout";
import Link from "next/link";
import TableMeja from "./fragments/TableMeja";

const TablePage = () => {
  return (
    <>
      <RootLayout>
        <Link href={"/admin/table/add"}>
          <span className="text-orange-500">Tambah Meja</span>
        </Link>
        <TableMeja />
      </RootLayout>
    </>
  );
};

export default TablePage;
