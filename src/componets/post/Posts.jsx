'use client'
import React, { useState } from "react";

import Rectangle_1 from "public/assets/blog_image/Rectangle_1_38.png";
import Rectangle_2 from "public/assets/blog_image/Rectangle_2_38.png";
import Rectangle_3 from "public/assets/blog_image/Rectangle_3_ 38.png";
import Rectangle_4 from "public/assets/blog_image/Rectangle_4_ 38.png";
import Rectangle_5 from "public/assets/blog_image/Rectangle_5_ 38.png";
import Rectangle_6 from "public/assets/blog_image/Rectangle _6_38.png";
import Rectangle_7 from "public/assets/blog_image/Rectangle _7_38.png";
import Rectangle_8 from "public/assets/blog_image/Rectangle _8_38.png";
import Rectangle_9 from "public/assets/blog_image/Rectangle _9_38.png";

import Image from "next/image";
import a_author_1 from "public/assets/blog_image/a_author_1.png";
import a_author_2 from "public/assets/blog_image/a_author_2.png";
import a_author_3 from "public/assets/blog_image/a_author_3.png";
import a_author_4 from "public/assets/blog_image/a_author_4.png";
import a_author_5 from "public/assets/blog_image/a_author_5.png";
import a_author_6 from "public/assets/blog_image/a_author_6.png";
import a_author_7 from "public/assets/blog_image/a_author_7.png";
import a_author_8 from "public/assets/blog_image/a_author_8.png";
import a_author_9 from "public/assets/blog_image/a_author_9.png";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Posts = () => {
 

  const auth = false;

  const notify = () => {
    

    if (auth) {
      <button><Link href='/create'></Link>Create Post</button>
    } else {
      toast.error("First Create Account!", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }
  
  // tostify message
  
  

  return (
    <div>
      <div className="mt-[20%] px-2 flex flex-wrap justify-center gap-2">
        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href={'/blog'}>
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
            <Link href="/blog">
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
            <Link href="/blog">
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
            <Link href="/blog">
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
            <Link href="/blog">
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
            <Link href="/blog">
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
            <Link href="/blog">
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
            <Link href="/blog">
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

        <div className="shadow-2xl p-2 rounded-md">
          <div className="flex gap-4 flex-1 flex-wrap">
            <Link href="/blog">
              <div className="pb-2 hover:scale-95 transition-all duration-300">
                <Image src={Rectangle_8} alt="" className="pb-2" />
                <span className="p-1 w-[30%] rounded-md text-[14px] bg-[#e5e5e6] text-[#4B6BFB]">
                  Tecknologu
                </span>
                <p className="pt-2 pb-2">
                  The Impact of Technology on <br /> the Workplace: How <br />{" "}
                  Technology is Changing
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <Image src={a_author_9} alt="" />
                  <span className="text-[#97989F]">Augots 20,2020</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center items-center p-2 bg-gray-100 mx-auto my-2">
        <div className="flex items-center justify-center gap-5"> 
        <Link href='/blog' className="btn btn-active btn-neutral">View All</Link>
        {/* <button className={`${auth ? onClick={notify} : <Link href='/create'>Create Post</Link>}`} >Create Post</button> */}
        <button className="btn btn-outline btn-primary" onClick={notify}>Create Post</button>
        
        </div>
      </div>
    </div>
  );
};

export default Posts;
