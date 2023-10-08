import RootLayout from "@/layouts/RootLayout";
import Link from "next/link";
import TableMeja from "./fragments/TableMeja";
import { AiOutlinePlus } from "react-icons/ai";

const TablePage = () => {
  return (
    <>
      <RootLayout>
        <div className="w-full h-20 bg-white fixed text-xs  z-50">
          <Link
            href={"/admin/table/add"}
            className="font-semibold  rounded-md py-3 text-white  text-primary uppercase  w-fit px-10 bg-primary "
          >
            Tambah meja
          </Link>
        </div>
        <TableMeja />
      </RootLayout>
    </>
  );
};

export default TablePage;
