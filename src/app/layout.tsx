import Header from "@/components/NavBar/NavBar";
import "./globals.css";
import GlobalLoader from "@/components/GlobalLoader/GlobalLoader";
import { ToastContainer } from "react-toastify";
import ToastContainerWrapper from "@/components/ToastContainer/ToastContainerWrapper";

import { Providers } from "../redux/provider";
import AuthGuard from "@/components/AuthGuard/AuthGuard";
import { Metadata } from "next";
import WebIcon from "./favicon.ico";

import {
  Inter,
  Montserrat,
  Kumbh_Sans,
  Roboto,
  Noto_Sans,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-montserrat",
});

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-kumbhSans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-notoSans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mayuri Sharma",
    template: "%s | Mayuri",
  },
  applicationName: "Mayuri Sharma",
  authors: { name: "Mayuri-Sharma" },
  themeColor: "#EB334A",
  keywords: [
    "mayuri sharma",
    "inner journey",
    "inner journey counseling",
    "inner journey programs",
    "inner journey healing arts",
    "inner journey wellness",
    "inner journey podcasts",
  ],
  icons: {
    icon: ["/android-chrome-96x96.png"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
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
    <html
      lang="en"
      className={`${montserrat.variable} ${kumbhSans.variable} ${roboto.variable} ${notoSans.variable}`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/android-chrome-96x96.png"
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
