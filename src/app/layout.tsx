import Header from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import GlobalLoader from "@/components/GlobalLoader/GlobalLoader";
import { ToastContainer } from "react-toastify";
import ToastContainerWrapper from "@/components/ToastContainer/ToastContainerWrapper";

import { Providers } from "../redux/provider";
import AuthGuard from "@/components/AuthGuard/AuthGuard";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mayuri Sharma",
    template: "%s | Mayuri",
  },
  description:
    "With a fair mix of spirituality and science, I help individuals reclaim their lives and step into their own healing",
  metadataBase: new URL("https://mayuri-sharma-portal.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    images:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffun_profile.20e015cf.png&w=640&q=75",
  },
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
