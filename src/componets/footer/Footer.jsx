import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import Footer_Logo from "public/assets/Logo_footer.png";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#d4d5d6] w-full p-4 flex gap-5   mt-7 justify-between md:flex-wrap md:mt-6">
        <div className="">
          <h2 className="text-[#181A2A] text-[18px] font-semibold">About</h2>
          <p className="text-[#696A75]">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
            Ut enim ad <br />
            minim veniam
          </p>
          <div className="mt-3">
            <h3 className="text-[#181818] font-semibold">
              Email : <span className="font-normal">info@gmail.com</span>
            </h3>

            <h3 className="text-[#181818] font-semibold">
              Phone : <span className="font-normal">09124971498</span>
            </h3>
          </div>
        </div>

        <div className="">
          <h2 className="text-[#181A2A] text-[18px] font-semibold text-center">
            Quick Links
          </h2>
          <div className="text-[#3B3C4A] flex flex-col gap-4 pt-5">
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              About
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Blog
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Author
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="">
          <h2 className="text-[#181A2A] text-[18px] font-semibold text-center">
            Category
          </h2>
          <div className="text-[#3B3C4A] flex flex-col gap-4 pt-5">
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Lifestyle
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Technology
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Travel
            </Link>
            <Link
              className="scroll-smooth hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Business
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-blue-600 transition-all duration-300"
              href="/"
            >
              Economy
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 w-[30%] flex flex-col rounded-lg">
          <h1 className="text-center font-semibold text-[#181A2A] text-[20px]">
            Weekly Newsletter
          </h1>
          <p className="pb-9 text-center text-[#696A75]">
            Get blog articles and offers via email
          </p>

          <div className="flex justify-center flex-col">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-md bg-transparent border text-[#97989F] text-[16px]"
            />

            <button className="bg-blue-400 text-white p-3 mt-2 rounded-md w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
