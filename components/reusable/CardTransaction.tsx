import React from "react";

interface CardTransactionProps {
  nomor_meja: string;
  nama_pelanggan: string;
  total_bayar: string;
}

const CardTransaction = ({
  nomor_meja,
  nama_pelanggan,
  total_bayar,
}: CardTransactionProps) => {
  return (
    <div className="w-full flex p-4 gap-4 items-center bg-white shadow mt-2 rounded hover:shadow-lg duration-200 cursor-pointer">
      <div className="flex flex-col items-center w-1/3">
        <h4 className="text-3xl font-bold text-primary">{nomor_meja}</h4>
      </div>
      <div className="flex w-2/3 flex-col">
        <h2 className="text-xl font-semibold text-zinc-800">
          {nama_pelanggan}
        </h2>
        <p className="text-lg font-normal text-zinc-800">Rp {total_bayar}</p>
      </div>
    </div>
  );
};

export default CardTransaction;
