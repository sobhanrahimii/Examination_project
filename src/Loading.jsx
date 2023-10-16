import React from "react";

const Loading = () => {
  return (
    <div className="bg-white z-50 flex justify-center items-center w-[50%]">
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
