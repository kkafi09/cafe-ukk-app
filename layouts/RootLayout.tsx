import SheetCart from "@/components/elements/SheetCart";
import Header from "@/components/sidebar/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { IUser } from "@/types/user-types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const getUserAuth = async (): Promise<IUser> => {
  const token = cookies().get("jwtToken")?.value;
  if (!token) return redirect("/login");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/auth`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const responseData = await response.json();

  const result: IUser = {
    id: responseData.data.id,
    uuid: responseData.data.uuid,
    name: responseData.data.name,
    photo_profile: responseData.data.photo_profile,
    username: responseData.data.username,
    role: responseData.data.role,
  };
  return result;
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const userAuth = await getUserAuth();
  if (!userAuth) {
    cookies().delete("jwtToken");
    redirect("/login");
  }

  return (
    <div className="flex h-screen  overflow-auto">
      <SheetCart user={userAuth} />
      <div className="flex h-screen overflow-scroll w-72 flex-col">
        <Sidebar role={userAuth.role} />
      </div>
      <div className="flex-1 flex h-screen overflow-scroll flex-col w-full">
        <Header user={userAuth} />
        <div className="px-8">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
