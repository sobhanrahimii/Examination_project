import Image from "next/image";
import React from "react";
import HomeBg from "public/assets/home_woman.png";
import authot_img from "public/assets/a_author.png"

const HomePage = () => {
  return (
    <div className="flex items-center justify-center mt-[20px] md:mt-3">
      <div className="relative">
        <Image src={HomeBg} alt="" width={800} height={800} />
      </div>

      <div className="absolute w-[70%] p-5 md:w-[40%] bg-white md:top-[50%] left-[20%] md:p-[50px] md:left-[25%] top-[30%] rounded-lg shadow-md flex flex-col">
        <h2 className="text-[#fff] text-center bg-[#4B6BFB] p-3 rounded-lg w-[40%]">Techenology</h2>
        <h1 className="text-[#181A2A] pt-4">The Impact of Technology on <br /> the Workplace: How <br /> Technology is Changing</h1>
        <div className="pt-3">
          <Image src={authot_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
