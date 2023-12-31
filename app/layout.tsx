import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CoffeeCartProvider } from "@/context/CartContext";
import ToastProvider from "@/lib/providers/ToastProvider";
import ProgressProvider from "@/lib/providers/ProgressProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K Coffee",
  description: "K Coffee app",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressProvider>
          <ToastProvider>
            <CoffeeCartProvider>{children}</CoffeeCartProvider>
          </ToastProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
