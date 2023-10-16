"use client";
import Navbar from "@/componets/navbar/Navbar";
import { useLocale } from "next-intl";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/componets/footer/Footer";
import ThemeContextProvider from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import Loading from "@/loading";
import { useEffect, useState } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setIsLoading(false); 
      clearInterval(loadingInterval); 
    }, 3000);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ThemeContextProvider>
              <Navbar />

              {children}
              <Footer />
              <ToastContainer autoClose={3000} />
            </ThemeContextProvider>
          </>
        )}
      </body>
    </html>
  );
}
