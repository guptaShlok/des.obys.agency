"use client";

import { svgPathForLogo } from "../utils/svgPaths";

const TypographySection = () => {
  return (
    <div>
      <div className="flex justify-between items-end px-5 py-20 pr-10 pb-4 border-t border-primaryBlack-light mt-40 bg-gray-100">
        <div className="flex items-end w-[20%] ">
          <span>2024 / 6+ / 01 Season / 03h 45m</span>
        </div>
        <div className="flex flex-col items-start  w-[60%] pl-20 font-normal">
          <div className="flex items-end justify-start mb-2">
            <span className="px-2 py-0.5 border border-black rounded-lg ml-2">
              Preorder
            </span>
            <span className="px-2 py-0.5 border border-black rounded-lg ml-2">
              New
            </span>
          </div>
          <div className="flex text-6xl text-primaryBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              fill="none"
              viewBox="0 0 139 139"
              data-letter="logo"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d={svgPathForLogo}
              ></path>
            </svg>
            <h1 className=" tracking-tighter">Typography Principles</h1>
          </div>
        </div>
        <div className="flex items-end justify-start text-2xl w-[25%]">
          <span className="line-through text-gray-500 mr-2">$150</span>
          <span className="flex items-center mb-0">$75 / Preorder</span>
        </div>
      </div>
      <img src={`./pictures/thirdpgbg.jpg`} alt="img 2" />
    </div>
  );
};

export default TypographySection;
