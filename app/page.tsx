import CardTransaction from "@/components/reusable/CardTransaction";
import RootLayout from "@/layouts/RootLayout";
import { ITransaksi } from "@/types/transaksi-types";
import { getTransaksi } from "./kasir/history/actions";

const Index = async () => {
  const transaksiData = await getTransaksi();

  return (
    <RootLayout>
      <div className="h-screen bg-zinc-50 flex flex-col gap-y-4">
        <div>
          <h1 className="text-2xl font-semibold mt-4">Transaksi</h1>
          <div className="grid grid-cols-4 gap-4">
            {transaksiData.map((item: ITransaksi) => (
              <CardTransaction
                key={item.id}
                nomor_meja={item.nomor_meja}
                nama_pelanggan={item.nama_pelanggan}
                total_harga={item.total_harga}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Top Menu</h1>
          <div className="flex w-full mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Index;
