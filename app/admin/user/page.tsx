import RootLayout from "@/layouts/RootLayout";
import Link from "next/link";
import TableUser from "./fragments/TableUser";

const TablePage = () => {
  return (
    <>
      <RootLayout>
      <div className="w-full h-20 bg-white fixed text-xs  z-50">
          <Link
            href={"/admin/user/add"}
            className="font-semibold rounded-md py-3 text-white  text-primary uppercase w-fit px-10 bg-primary "
          >
            Tambah user
          </Link>
        </div>
        <TableUser />
      </RootLayout>
    </>
  );
};

export default TablePage;
