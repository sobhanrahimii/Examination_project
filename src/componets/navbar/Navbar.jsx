"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Logo from "public/assets/Logo.png";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "@/app/context/ThemeContext";
import { RiMenu3Line } from "react-icons/ri";
import { BiSearchAlt, BiX } from "react-icons/bi";

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [header, setHeader] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [search , setSearch] = useState(false)
  const [scroll , setScroll] = useState(false)

  const openNav = () => {
    setNavbar(true);
  };

  const closeNav = () => {
    setNavbar(false);
  };


  const openSearch = () => {
    setSearch(true);
  };

  const closeSearch = () => {
    setSearch(false);
  };


  const desktopMobile = useMediaQuery({
    query: "(max-width:1300px)",
  });

  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY > 80) {
        setHeader(true);
        setScroll(true)
      } else {
        setHeader(false);
        setScroll(false)
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  });

  const isLogin = 'uAuth'

  return (
    <div
      className={`${
        header
          ? " gap-4 flex justify-between items-center top-0 fixed shadow-2xl bg-slate-300 z-50 py-5 transition-all duration-300"
          : "bg-slate-100 mx-auto md:flex md:items-center md:justify-between md:gap-9 h-16 w-full px-5"
      } w-full md:flex md:items-center md:justify-between flex justify-between items-center gap-3 px-5`}
    >
      <Link href="/">
        <Image
          src={Logo}
          width={140}
          height={140}
          className="w-[550%]"
          alt=""
        />
      </Link>

      <nav
        className={`${
          navbar
            ? "md:hidden w-full flex gap-5 text-[#3B3C4A] absolute bg-white top-[11%] z-50 right-0 rounded-none p-5 flex-col items-center shadow-lg text-center"
            : "md:flex md:gap-5 hidden"
        } flex justify-center ml-2 text-[#3B3C4A] `}
      >
        <Link
          className="hover:text-blue-500 transition-all duration-300 pl-2"
          href="/"
          onClick={closeNav}
        >
          Home
        </Link>
        <Link
          className="hover:text-blue-500 transition-all duration-300"
          href="/blog"
          onClick={closeNav}
        >
          Blog
        </Link>
        <Link
          className="hover:text-blue-500 transition-all duration-300"
          href="/pages"
          onClick={closeNav}
        >
          Pages
        </Link>
        <Link
          className="hover:text-blue-500 transition-all duration-300"
          href="/contact"
          onClick={closeNav}
        >
          Contact Us
        </Link>
      </nav>

        {isLogin ? '' : <Link href='/create-blog' className="bg-[#4B6BFB] text-[#ffff] p-2 font-semibold cursor-pointer">Create Blog</Link>}

      <div className={`${search ? ' flex items-center absolute top-[80px] left-0 z-20 w-full shadow-2xl' : 'hidden md:flex md:items-center md:relative md:w-[20%] md:top-1 md:left-48'}  `}>
        <input
          type="search"
          className="bg-[#eee] p-2 md:rounded-md text-[#181818] text-lg text-[18px] w-full rounded-none shadow-md"
          placeholder="search here..."
        />
        <BiSearchAlt className="absolute right-5 cursor-pointer w-5 h-5 text-[#A1A1AA]" />
      </div>

      <div className="text-3xl flex items-center justify-center cursor-pointer gap-2">
        {!navbar ? (
          <div className="" onClick={openNav}>
            <RiMenu3Line className="hover:text-[##4B6BFB] transition-all duration-300 md:hidden" />
          </div>
        ) : (
          <BiX onClick={closeNav} />
        )}

        
        {search ? (
          <div className="" onClick={openSearch}><BiSearchAlt className="hover:text-[##4B6BFB] transition-all duration-300 md:hidden" /></div>
        ):(
          <div onClick={closeSearch} className=""><BiSearchAlt/></div>
        )}
     
      </div>
      <div
        onClick={toggle}
        className="bg-[#ccc] p-2 relative flex items-center justify-center rounded-xl cursor-pointer"
      >
        <div className="">🌙</div>

        <div
          className="w-[19px] h-[18px] rounded-[50%] absolute text-slate-900 softBg"
          style={
            theme === "dark"
              ? {
                  left: "11px",
                  background: "#0f172a",
                  transition: "ease-in",
                  transitionDuration: "revert-layer",
                }
              : { right: "11px", background: "white" }
          }
        ></div>
        <div className="">☀️</div>
      </div>
    </div>
  );
};

export default Navbar;
