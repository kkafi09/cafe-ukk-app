"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { toast } from "react-toastify";

const PaymentButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const handlePay = async (transaksiId: number) => {
    try {
      await api
        .put(
          `${process.env.NEXT_PUBLIC_API_URL}/transaksi/bayar/${transaksiId}`
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success("Berhasil bayar");
            router.refresh();
          }
        });
    } catch (err) {
      toast.error("Gagal Bayar transkasi");
    }
  };

  return (
    <Button onClick={() => handlePay(id)} variant={"outline"}>
      <HiOutlineCurrencyDollar />
    </Button>
  );
};

export default PaymentButton;
