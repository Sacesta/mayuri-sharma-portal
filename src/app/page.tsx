import { Inter } from "next/font/google";
import Home from "./components/Homes/Main";
// import Home from "./Pages/Main/Main";
// import Podcast from "./components/Home/Podcast";
import ProgramDetails from "./components/Home/ProgramDetails";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return <Home />;
}
