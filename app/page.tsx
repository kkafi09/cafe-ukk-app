import CardTransaction from "@/components/reusable/CardTransaction";
import RootLayout from "@/layouts/RootLayout";

const dataTransaksi = [
  { id: 1, nomor_meja: "3", nama_pelanggan: "Budi", total_bayar: "30.000" },
  { id: 2, nomor_meja: "9", nama_pelanggan: "Subur", total_bayar: "13.000" },
  { id: 3, nomor_meja: "5", nama_pelanggan: "Angkasa", total_bayar: "18.000" },
  { id: 4, nomor_meja: "13", nama_pelanggan: "Pura", total_bayar: "64.000" },
  { id: 5, nomor_meja: "12", nama_pelanggan: "Azur", total_bayar: "32.000" },
];

const Index = () => {
  return (
    <RootLayout>
      <div className="h-screen bg-zinc-50 flex flex-col gap-y-4">
        <div>
          <h1 className="text-2xl font-semibold mt-4">Transaksi</h1>
          <div className="grid grid-cols-6 gap-4">
            {dataTransaksi.map((item) => (
              <CardTransaction
                key={item.id}
                nomor_meja={item.nomor_meja}
                nama_pelanggan={item.nama_pelanggan}
                total_bayar={item.total_bayar}
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
