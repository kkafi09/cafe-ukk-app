import OrderMenu from "@/app/kasir/menu/fragments/OrderMenu";
import Cart from "@/components/elements/Cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IUser } from "@/types/user-types";

interface Props {
  user: IUser;
}

export default function SheetCart({ user }: Props) {
  return (
      <Sheet>
        <SheetTrigger asChild>
          <Cart />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Pesanan</SheetTitle>
            <SheetDescription>
              {"Pastikan pesanan sesuai dengan apa yang pelanggan inginkan!"}
            </SheetDescription>
          </SheetHeader>
          <OrderMenu user={user} />
        </SheetContent>
      </Sheet>
  );
}
