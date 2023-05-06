import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "./components/Home/Main";
import About from "./components/Home/About";


const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return <Home />;
}
