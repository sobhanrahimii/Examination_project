import Navbar from "@/componets/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/componets/footer/Footer";
import ThemeContextProvider from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <Navbar />

          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}