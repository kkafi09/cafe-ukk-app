import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import { HiOutlinePrinter } from "react-icons/hi2";

interface PrintButtonProps {
  nama: string;
}

const PrintButton: React.FC<PrintButtonProps> = ({ nama }) => {
  const handlePrint = () => {
    const input = document.getElementById("print-area");

    if (!input) {
      return;
    }

    const inputWidth = input.offsetWidth;
    const inputHeight = input.offsetHeight;

    html2canvas(input, { width: inputWidth, height: inputHeight }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
          unit: "px",
          format: [inputWidth + 40, inputHeight + 80],
        });

        pdf.addImage(imgData, "PNG", 20, 40, inputWidth, inputHeight);
        pdf.autoPrint();
        window.open(pdf.output("bloburl"), "_blank");
      }
    );
  };

  return (
    <Button onClick={handlePrint} className="w-full">
      <HiOutlinePrinter />
    </Button>
  );
};

export default PrintButton;
