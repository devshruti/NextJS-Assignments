import { Inter } from "next/font/google";
import {Roboto} from "next/font/google"
import "./globals.css";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight:"500", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar />
        {children}
        </body>
    </html>
  );
}
