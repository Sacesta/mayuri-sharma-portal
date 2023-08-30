import Header from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import GlobalLoader from "@/components/GlobalLoader/GlobalLoader";
import { ToastContainer } from "react-toastify";
import ToastContainerWrapper from "@/components/ToastContainer/ToastContainerWrapper";


import { Providers } from "../redux/provider";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mayuri Sharma",
  description: "Mayuri sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>
          <AuthGuard>
            <GlobalLoader />
            <ToastContainerWrapper />
            <Header />
            <div>{children}</div>
          </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
