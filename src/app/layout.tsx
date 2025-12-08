import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopbarInfo from "@/components/shared/TopbarInfo";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import "react-pagination-bar/dist/index.css";
import NextTopLoader from "nextjs-toploader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "FreedomPath Planning",
    template: "%s | FreedomPath Planning",
  },
  description: "This is the official website of FreedomPath Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased`}
      >
        <TopbarInfo />
        <div className="sticky top-0 z-50 ">
          <Navbar />
        </div>
        <div className="min-h-[calc(100vh-140px)]">
          {children}
        </div>
        <Footer />

       <NextTopLoader
          color="#fff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #232323,0 0 5px #EA5326"
          zIndex={1600}
          showAtBottom={false}
        />


      </body>
    </html>
  );
}
