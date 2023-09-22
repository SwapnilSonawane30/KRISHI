import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata={
  title:'KRISHI',
  description:'A next.js 13 meta threads application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar/>
          <main className="flex flex-row">
            <LeftSidebar/>
            <section className="main-container bg-white">
              <div className="w-full max-w-4xl rounded-lg">
                {children}
              </div>
            </section>
            <RightSidebar/>
          </main>
          <Bottombar/>
          </body>
      </html>
    </ClerkProvider>
  );
}
