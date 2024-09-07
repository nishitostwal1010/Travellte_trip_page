import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ClerkProvider } from "@clerk/nextjs";

// Importing both Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] }); // You can customize the font weights

export const metadata: Metadata = {
  title: "Travelite",
  description: "AI travel partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="">
        <body
          className={`
        ${poppins.className}
        `}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

//         ${inter.className}
