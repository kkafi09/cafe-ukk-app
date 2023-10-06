import SheetCart from "@/components/elements/SheetCart";
import Header from "@/components/sidebar/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden relative top-0">
      <SheetCart />
      <Sidebar />
      <div className="flex-1 flex overflow-hidden flex-col w-full">
        <Header />
        <div className="px-8 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
