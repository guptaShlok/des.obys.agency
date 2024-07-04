"use client";
import React from "react";
import { svgPathForD } from "../utils/svgPaths";
import { svgPathForE } from "../utils/svgPaths";
import { svgPathForS } from "../utils/svgPaths";
import { svgPathForLogo } from "../utils/svgPaths";
import { svgPathForRotor } from "../utils/svgPaths";
const FirstPage = () => {
  return (
    <>
      <div className="w-full h-[110vh] bg-primaryWhite-light flex mb-[100vh] justify-between text-primaryBlack">
        <div className="flex flex-col justify-start items-center gap-2 h-full w-[50vw] border-r-[1px] border-b-[1px] border-primaryBlack pt-7 pl-4 ">
          <div className="flex w-[97%] justify-start items-start h-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="230"
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
              width="205"
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
              width="230"
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
              width="180"
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
            <span>Design Education Series ® by Obys ® </span>
          </div>
        </div>
        <div className="flex items-start flex-col w-[50vw] h-full  border-b-[1px] border-primaryBlack">
          <div className="flex justify-between px-5 w-full h-[7%] border-b-[1px] border-primaryBlack">
            <div className="flex items-start justify-center gap-5 text-lg font-normal pt-5">
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
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className=" border border-primaryBlack px-3 py-1 rounded-lg bg-primaryBlack text-primaryWhite">
                Log in
              </div>
            </div>
          </div>
        
          <div className="flex justify-between px-5 w-full h-[7%] border-b-[1px] border-primaryBlack flex items-center gap-1 justify-center  ">
          About Series:</div>
         <div>
          <div>
          <div >
            <p>
              Seasons:
            </p>
            <div>
            <span className="mr-5">01</span>
            Season (Typography Principles)
            </div>
            <div>
            <span className="mr-5">02</span>
            Season (Colors Combinations)
            </div>
            <div>
            <span className="mr-5">03</span>
            Season (Grids)
            </div>
          </div>
          </div>
          <div className="">
            <p className="is-started is-complete">
            Discover, Study, Have Fun: 
            <br/>
            All-in-One Learning!
            </p>
            <p className="is-started is-complete">©2024</p>
          </div>
         </div>
          

          
        </div>
      </div>
      
    </>
  );
};

export default FirstPage;
