import Image from "next/image";
import Link from "next/link";
import React from "react";
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
import a_author_banner from "public/assets/blog_image/a_author_banner.png";
import HomeBg from "public/assets/blog_image/home_woman.png";
import { BsFillBackspaceFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai"

const Post = () => {
  return (
    <div>
      <div className="flex flex-col pt-2">
        <h1 className="text-center font-semibold text-[#181A2A] text-[30px]">
          Page Title
        </h1>
        <div className="flex items-center justify-center pt-1 gap-3">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-4">
          <BsFillBackspaceFill/>  Home
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center  pt-8">
        <div className="text absolute left-[5%] md:left-[17%] md:top-[75%] text-white leading-8 md:text-[30px] flex flex-col z-30">
          <p className="text-center bg-[#4B6BFB] p-1 text-white text-[14px] max-w-[88px] rounded-md">
            Tecknology
          </p>
          <p className="pt-4">
            The Impact of Technology on <br /> the Workplace: How Technology is
            Changing
          </p>
          <div className="flex items-center gap-4">
            <Image src={a_author_banner} alt="" className="pt-9 " />
            <span className="text-sm pt-8  text-white">August 20, 2022</span>
          </div>
        </div>
        <Image src={HomeBg} alt="" className="relative left-[2%]" />
      </div>

      <div className="mt-[20%] px-2 flex flex-wrap pt-0 justify-center gap-2">
        <div className="shadow-2xl p-2 rounded-md relative ">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog/singlepost">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <div className="">
                <Image src={Rectangle_1} alt="" className="pb-2" />
                </div>
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

export default Post;
