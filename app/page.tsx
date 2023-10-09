import RootLayout from "@/layouts/RootLayout";
import { getTransaksi } from "./kasir/history/actions";

const Index = async () => {
  const transaksiData = await getTransaksi();

  return (
    <RootLayout>
      <div className="h-screen bg-zinc-50 flex flex-col gap-y-4">
        <h1 className="text-2xl font-semibold mt-4">Dashboard</h1>
        <iframe
          width="1100"
          height="550"
          src="https://www.youtube.com/embed/QgiZVuQUoHo?si=8EGjV2QJ0QcniV4B"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </RootLayout>
  );
};

export default Index;
