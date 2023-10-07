import React from "react";
import PieChart from "@/components/reusable/PieChart";
const menu = [
  {
    name: "tempe yyk",
    quantity: "100",
    category: "food",
  },
  {
    name: "sayur lodeh",
    quantity: "12",
    category: "food",
  },
  {
    name: "sayur lodeh",
    quantity: "12",
    category: "food",
  },
  {
    name: "sayur lodeh",
    quantity: "12",
    category: "food",
  },
  {
    name: "sayur lodeh",
    quantity: "12",
    category: "food",
  },
  {
    name: "cola",
    quantity: "50",
    category: "drink",
  },
  {
    name: "orange juice",
    quantity: "30",
    category: "drink",
  },
  {
    name: "coffee",
    quantity: "20",
    category: "drink",
  },
];

const manajer = () => {
  return (
    <div>
      <div>
        <PieChart menu={menu} />
      </div>
    </div>
  );
};

export default manajer;
