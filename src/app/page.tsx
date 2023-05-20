import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "./components/Home/Main";
import About from "./components/Home/About";
import Podcast from "./components/Home/Podcast";
import Programs from "./components/Home/Programs";
import ProgramDetails from "./components/Home/ProgramDetails";



const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return <Home />;
}
