import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ContainerWrapper from "@/components/common/ContainerWrapper";

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
        <ContainerWrapper>{children}</ContainerWrapper>
      </body>
    </html>
  );
}
