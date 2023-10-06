"use client";
import RootLayout from "@/layouts/RootLayout";
import React from "react";
import TableHis from "./TableHis";
import DatePickerWithRange from "@/components/reusable/DatePickerWithRange";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import ReSelect from "@/components/reusable/ReSelect";

const History = () => {
  return (
    <RootLayout>
      <h1 className="text-2xl font-semibold">History Transaksi</h1>
      <div className="mt-2 flex gap-x-4">
        <DatePickerWithRange />
        <ReSelect />
      </div>
      <div className="mt-4">
        <TableHis />
      </div>
    </RootLayout>
  );
};

export default History;
