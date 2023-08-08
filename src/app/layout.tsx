import Header from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

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
        {/* Removed the loader for now */}
        {/* <div className="loading">
          <div className="uil-ring-css" style={{ transform: "scale(0.79)" }}>
            <div></div>
          </div>
        </div> */}
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
