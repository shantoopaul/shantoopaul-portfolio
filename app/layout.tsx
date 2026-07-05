import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import Navbar from "@/components/home/Navbar";

const geist = Geist_Mono({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shanto Paul - Full Stack Developer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-background text-main`}>
        <Navbar />
        <ContainerWrapper>{children}</ContainerWrapper>
      </body>
    </html>
  );
}
