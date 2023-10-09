"use client";
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
import { api } from "@/utils/api";
import { getCookie } from "cookies-next";
import * as React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import InvoicePrintButton from "./InvoicePrintButton";
import PaymentButton from "./PaymentButton";

function TableHis() {
  const [filter, setFilter] = React.useState({
    status: "",
    startDate: "",
    endDate: "",
  });
  const [transaksiData, setTransaksiData] = React.useState<ITransaksi[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    const getTransaksiData = async () => {
      const params: Record<string, string | undefined> = {};
      if (filter.status) {
        params.status = filter.status;
      }
      if (filter.startDate) {
        params.startDate = filter.startDate;
      }
      if (filter.endDate) {
        params.endDate = filter.endDate;
      }

      await api
        .get(`${process.env.NEXT_PUBLIC_API_URL}/transaksi`, {
          params,
          headers: {
            Authorization: "Bearer " + getCookie("jwtToken"),
          },
        })
        .then((response) => {
          setTransaksiData(
            Array.isArray(response.data.data)
              ? response.data.data
              : [response.data.data]
          );
        });
    };

    getTransaksiData();
  }, [filter]);

  return (
    <>
      <div className="py-6 flex  justify-between fixed bg-white z-30 w-full max-w-7xl pr-10">
        <h1 className="text-2xl font-semibold text-primary uppercase opacity-70 ">
          History Transaksi
        </h1>
        <div className="flex gap-4">
          {/* filter lunas dan tidak */}
          <select
            id="status"
            className=" w-full px-4 py-2 border rounded-md outline-none focus:outline-orange-500 "
            name="status"
            onChange={handleChange}
          >
            <option value="" disabled>
              Filter
            </option>
            <option value="">No filter</option>
            <option value="lunas">Lunas</option>
            <option value="belum-lunas">Belum Lunas</option>
          </select>
          {/* filter date */}
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="w-full px-4 py-2 border rounded-md outline-none focus:outline-orange-500"
            onChange={handleChange}
          />
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="w-full px-4 py-2 border rounded-md outline-none focus:outline-orange-500"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-20 h-[75vh] overflow-y-scroll">
        <div className="mx-auto h-full">
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
              {transaksiData &&
                transaksiData.map((transaksi: ITransaksi) => (
                  <TableRow key={transaksi.id}>
                    <TableCell className="font-medium">
                      {transaksi.resi}
                    </TableCell>
                    <TableCell>{transaksi.nama_pelanggan}</TableCell>
                    <TableCell>{transaksi.nama_kasir}</TableCell>
                    <TableCell>{transaksi.status}</TableCell>
                    <TableCell>{transaksi.tgl_transaksi}</TableCell>
                    <TableCell>{transaksi.nomor_meja}</TableCell>
                    <TableCell>{transaksi.total_harga}</TableCell>
                    <TableCell className="text-xl cursor-pointer flex gap-2">
                      {transaksi.status === "lunas" ? (
                        <InvoicePrintButton data={transaksi} />
                      ) : (
                        ""
                      )}
                      {transaksi.status === "belum-lunas" ? (
                        <PaymentButton id={transaksi.id} />
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell className="w-2 cursor-pointer hover:bg-zinc-100">
                      <HiEllipsisVertical />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default TableHis;
