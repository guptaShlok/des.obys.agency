"use client";
import React from "react";
import { svgPathForD } from "../utils/svgPaths";
import { svgPathForE } from "../utils/svgPaths";
import { svgPathForS } from "../utils/svgPaths";
import { svgPathForLogo } from "../utils/svgPaths";
import { svgPathForRotor } from "../utils/svgPaths";
import MaskText from "../utils/textMaskAnimation";
import Button from "../utils/Button";
const FirstPage = () => {
  return (
    <>
      <div className="w-full h-[140vh] bg-primaryWhite-light flex justify-between text-[#17191A]">
        <div className="flex flex-col justify-start items-center gap-2 h-full w-[50vw] border-r-[1px] border-b-[1px] border-primaryBlack pt-7 pl-4 ">
          <div className="flex w-[97%] gap-2 justify-start items-start h-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              fill="none"
              viewBox="0 0 174 210"
              data-letter="d"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d={svgPathForD}
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="175"
              // height="210"
              fill="none"
              viewBox="0 0 153 210"
              data-letter="e"
              style={{
                transform: "transform(0px, 0px)",
              }}
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d={svgPathForE}
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              fill="none"
              viewBox="0 0 174 210"
              data-letter="d"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d={svgPathForS}
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              // height="139"
              fill="none"
              viewBox="0 0 139 139"
              data-letter="logo"
              style={{
                transform: "rotate(0deg)",
              }}
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d={svgPathForLogo}
              ></path>
            </svg>
          </div>
          <div className="w-full flex items-center justify-start pt-2 font-normal text-[#17191A] text-3xl pl-2">
            <MaskText phrases={["Design Education Series ® by Obys ® "]} />
          </div>
        </div>

        <div className="flex items-start font-medium  flex-col w-[50vw] h-full  border-b-[1px] border-primaryBlack">
          <div className="flex justify-between items-center px-5 w-full h-[6%] border-b-[1px] border-primaryBlack">
            <div className="flex items-start justify-center gap-5 text-lg font-normal">
              <div className="flex items-center gap-1 justify-center ">
                <div className="w-3 h-3 rounded-full bg-primaryGrey"></div>
                <div className="text-primaryGrey">Home</div>
              </div>
              <div className="flex items-center gap-1 justify-center ">
                <div className="w-3 h-3 rounded-full bg-primaryBlack"></div>
                <div>Seasons</div>
              </div>
              <div className="flex items-center gap-1 justify-center ">
                <div className="w-3 h-3 rounded-full bg-primaryBlack"></div>
                <div>About</div>
              </div>
            </div>

            <div className=" flex items-center justify-center gap-4">
              <div className=" ">
                <svg
                  className=" w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d={svgPathForRotor}
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hover:text-primaryBlack-light transition-all delay-100 duration-300 inline-block border border-primaryBlack rounded-lg bg-primaryBlack-light  text-primaryWhite">
                <Button backgroundColor="#F2F2F2">
                  <span className=" z-10">Log in</span>{" "}
                </Button>
              </div>
            </div>
          </div>

          <div className=" px-5 w-full h-[5%] border-b-[1px] border-primaryBlack flex items-center justify-start  ">
            <MaskText phrases={["About Series:"]} />
          </div>

          <div className="px-5 flex flex-col justify-between h-full w-full">
            <div className="flex pt-2 justify-between w-full ">
              <div className="flex flex-col items-start ">
                <MaskText
                  className=" flex flex-col"
                  phrases={[
                    "Seasons:",
                    "Seasons (Typography Principles)",
                    "Seasons (Colors Combinations)",
                    "Seasons (Grids)",
                  ]}
                />
              </div>
              <div className="">
                <MaskText
                  className=" flex flex-col"
                  phrases={[
                    "Discover, Study, Have Fun:",
                    "All-in-One Learning!",
                  ]}
                />
              </div>
              <div>
                <MaskText phrases={["©2024"]} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col text-2xl justify-center items-start">
                  <MaskText
                    className="flex flex-col"
                    phrases={[
                      "Original Series by",
                      "Obys® about the main",
                      "design principles",
                    ]}
                  />
                </div>
                <div>
                  <span>
                    <MaskText phrases={["(01:42)"]} />
                  </span>
                </div>
                <div>
                  <span className=" border-b-[1px] border-primaryBlack">
                    <MaskText phrases={["Watch Trailer"]} />
                  </span>
                </div>
              </div>
              <div className="w-full py-5 flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  className=" object-cover"
                  src="watch_trailer.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
