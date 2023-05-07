import { Inter } from "next/font/google";
import Home from "./Pages/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return <Home />;
}
