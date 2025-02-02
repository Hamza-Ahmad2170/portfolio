import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamza Ahmed's Portfolio",
  description: "Hamza Ahmed's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-black bg-cover bg-[50%] bg-no-repeat text-white`}
      >
        {children}
      </body>
    </html>
  );
}
