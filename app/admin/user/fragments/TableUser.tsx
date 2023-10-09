import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser } from "@/types/user-types";
import Image from "next/image";
import Link from "next/link";
import { HiPencilSquare } from "react-icons/hi2";
import { getUser } from "../actions";
import DeleteButtonUser from "./DeleteButton";

async function TableUser() {
  const userData = await getUser();

  return (
    <div className="mx-auto h-full mt-16">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Photo Profile</TableHead>
            <TableHead>Nama User</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user: IUser, index: number) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Image
                  src={
                    user.photo_profile ||
                    "https://www.w3schools.com/howto/img_avatar.png"
                  }
                  alt={user.name}
                  width={100}
                  height={100}
                  className="w-20"
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-xl cursor-pointer text-primary">
                <Link
                  href={"/admin/user/update?userId=" + user.id}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <HiPencilSquare />
                </Link>
                <DeleteButtonUser id={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableUser;
