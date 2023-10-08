import RootLayout from "@/layouts/RootLayout";
import Link from "next/link";
import TableUser from "./fragments/TableUser";

const TablePage = () => {
  return (
    <>
      <RootLayout>
        <Link href={"/admin/user/add"}>
          <span className="text-orange-500">Tambah User</span>
        </Link>
        <TableUser />
      </RootLayout>
    </>
  );
};

export default TablePage;
