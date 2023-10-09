import { IDetailTransaksi, ITransaksi } from "@/types/transaksi-types";
import Image from "next/image";
import React from "react";

interface StrukPrintProps {
  item: ITransaksi;
}

const StrukPrint: React.FC<StrukPrintProps> = ({ item }) => {
  const formatDate = (isoDateString: string) => {
    const dateObj = new Date(isoDateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const seconds = String(dateObj.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-fit w-80 mx-auto rounded-lg px-5 text-sm">
      <h2 className="text-center font-semibold text-base mb-4">
        <span className="flex text-sm w-20 mx-auto">
          <Image
            src={"/next.svg"}
            alt="vercel logo"
            width={100}
            height={100}
            className={`mx-auto w-12 pt-8 pb-2`}
          />
        </span>
        Struk Transaction
      </h2>

      <p>Date: {formatDate(item.tgl_transaksi)}</p>
      <p>Invoice No. : #{item.resi}</p>
      <p>No Meja: {item.nomor_meja}</p>
      <p>Chasier: {item.nama_kasir}</p>
      <p className="text-center mb-4">
        Name Customer: <br /> {item.nama_pelanggan}
      </p>

      <p>-------------------------------------------</p>
      <h3>Menu:</h3>
      <ul>
        {item.DetailTransaksi?.map(
          (detailItem: IDetailTransaksi, index: number) => (
            <li key={index} className="flex justify-between text-sm">
              <ul>
                {detailItem.nama_menu} ({detailItem.jumlah})
              </ul>
              <ul> {detailItem.harga}</ul>
            </li>
          )
        )}
      </ul>
      <p>-------------------------------------------</p>
      <p className="flex justify-between">
        SubTotal:{" "}
        <span>
          {new Intl.NumberFormat("id-ID").format(
            item.DetailTransaksi?.reduce(
              (total, detailItem) =>
                total + detailItem.harga * detailItem.jumlah,
              0
            ) || 0
          )}
        </span>
      </p>
      <p className="flex justify-between">
        PPN 10%:{" "}
        <span>
          {new Intl.NumberFormat("id-ID").format(
            item.DetailTransaksi?.reduce(
              (total, detailItem) =>
                total + detailItem.harga * detailItem.jumlah * 0.1,
              0
            ) || 0
          )}
        </span>
      </p>

      <p className="flex justify-between">
        Total:{" "}
        <span>
          Rp
          {new Intl.NumberFormat("id-ID").format(
            item.DetailTransaksi?.reduce(
              (total, detailItem) =>
                total +
                detailItem.harga * detailItem.jumlah * 0.1 +
                detailItem.harga * detailItem.jumlah,
              0
            ) || 0
          )}
        </span>
      </p>
      <p className="text-center mt-10 text-lg font-semibold">
        Great Day Start With Coffee
      </p>
    </div>
  );
};

export default StrukPrint;
