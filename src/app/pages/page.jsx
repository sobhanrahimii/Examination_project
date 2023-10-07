import React from "react";
import Author_img from "public/assets/author_page_img.png";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Rectangle_1 from "public/assets/blog_image/Rectangle_1_38.png";
import Rectangle_2 from "public/assets/blog_image/Rectangle_2_38.png";
import Rectangle_3 from "public/assets/blog_image/Rectangle_3_ 38.png";
import Rectangle_4 from "public/assets/blog_image/Rectangle_4_ 38.png";
import Rectangle_5 from "public/assets/blog_image/Rectangle_5_ 38.png";
import Rectangle_6 from "public/assets/blog_image/Rectangle _6_38.png";
import Rectangle_7 from "public/assets/blog_image/Rectangle _7_38.png";
import Rectangle_8 from "public/assets/blog_image/Rectangle _8_38.png";
import Rectangle_9 from "public/assets/blog_image/Rectangle _9_38.png";
import a_author_1 from "public/assets/blog_image/a_author_1.png";
import a_author_2 from "public/assets/blog_image/a_author_2.png";
import a_author_3 from "public/assets/blog_image/a_author_3.png";
import a_author_4 from "public/assets/blog_image/a_author_4.png";
import a_author_5 from "public/assets/blog_image/a_author_5.png";
import a_author_6 from "public/assets/blog_image/a_author_6.png";
import a_author_7 from "public/assets/blog_image/a_author_7.png";
import a_author_8 from "public/assets/blog_image/a_author_8.png";

const PageBlogs = () => {
  return (
    <div className="px-5  ">
      <div className="bg-[#cacace] rounded-md p-[20px] relative mx-auto mt-7 w-full h-full container">
        <div className="flex items-center flex-col gap-5">
          <div className="flex flex-row gap-8">
            <Image src={Author_img} alt="" />
            <div className="">
              <h3 className="text-[20px] md:text-[25px] text-[#181818] font-semibold">
                Jonathan Doe
              </h3>
              <p className="text-[#696A75] text-sm md:text-[14px]">
                Collaborator & Editor
              </p>
            </div>
          </div>

          <p className="text-center text-[#3B3C4A] text-[16px]">
            Meet Jonathan Doe, a passionate writer and blogger with a love for{" "}
            <br /> technology and travel. Jonathan holds a degree in Computer
            Science and <br /> has spent years working in the tech industry,
            gaining a deep understanding <br /> of the impact technology has on
            our lives.
          </p>

          <div className="flex items-center gap-5 cursor-pointer text-[#696A75] pl-8">
            <Link href="/" className="text-3xl">
              <AiFillYoutube className="hover:text-red-900 hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link href="/" className="text-3xl">
              <AiFillTwitterCircle className="hover:text-blue-500 transition-all duration-300 hover:-translate-y-1" />
            </Link>
            <Link href="/" className="text-3xl">
              <AiFillInstagram className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link href="/" className="text-3xl">
              <AiFillFacebook className="hover:text-blue-900 hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-center pt-16 md:text-[40px] text-[20px] font-semibold px-0 mb-0">Latest Post</h1>

      <div className="mt-[20%] px-2 flex flex-wrap pt-0 justify-center gap-2 pb-12">
        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_1} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_1} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_1} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_2} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_2} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_3} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_3} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_4} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_4} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_5} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_5} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_6} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_6} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_7} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_6} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_7} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_7} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_8} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBlogs;
