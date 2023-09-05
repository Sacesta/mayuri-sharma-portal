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
  themeColor: "#EB334A",
  description:
    "With a fair mix of spirituality and science, I help individuals reclaim their lives and step into their own healing",
  metadataBase: new URL("https://mayuri-sharma-portal.vercel.app/"),
  verification: {
    google: "google-site-verification=23242342342", //Change with your own google site verification id
  },
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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
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
