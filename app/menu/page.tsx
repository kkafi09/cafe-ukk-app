import CardMenu from "@/components/reusable/CardMenu";
import RootLayout from "@/layouts/RootLayout";
import React from "react";

const Menu = () => {
  return (
    <RootLayout>
      <div className="h-screen bg-zinc-50 flex flex-col gap-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Top Menu</h1>
          <div className="flex w-full mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <CardMenu />
              <CardMenu />
              <CardMenu />
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Menu;
