import { IUser } from "@/types/user-types";
import Image from "next/image";

interface Props {
  user: IUser;
}

const Header = ({ user }: Props) => {
  return (
    <div className="flex justify-end shadow-sm w-full px-8 py-4 sticky top-0 z-10 bg-white">
      <div className="flex gap-x-4 items-center">
        <Image
          src={
            user.photo_profile ||
            "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt=""
          width={100}
          height={100}
          className="rounded-full w-14"
        />
        <div className="flex flex-col">
          <h6 className="text-base font-semibold text-zinc-900">{user.name}</h6>
          <p className="text-base font-medium text-zinc-600">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
