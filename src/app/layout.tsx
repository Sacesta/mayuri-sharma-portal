import Header from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import GlobalLoader from "@/components/GlobalLoader/GlobalLoader";
import { ToastContainer } from "react-toastify";
import ToastContainerWrapper from "@/components/ToastContainer/ToastContainerWrapper";

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
        <GlobalLoader />
        <ToastContainerWrapper />
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
