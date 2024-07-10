"use client";
import React from "react";

const SecondPage = () => {
  return (
    <div className="min-h-screen relativew-full p-8 text-black">
      <div className="w-full mx-auto relative flex flex-col">
        <div className="flex flex-col gap-16">
          <p className="text-6xl font-medium ">
            <span className=" inline-block w-[30vw] relative bottom-6 box-border items-center text-start text-base text-gray-600">
              (About series)
            </span>
            <span className="w-5 h-5 font-bold -mr-2">①</span> Design Education
            Series is a new format of an original mini-series on the main
            principles of design, where we share all insights gained during our
            experience at Obys Agency.{" "}
            <span className="underline">Typography Principles</span>, Colors
            Combinations, Grids are the titles of the first three seasons of the
            series.
          </p>
        </div>

        <div className=" w-full flex mt-20 justify-end items-start">
          <div className="flex w-[50%] justify-around text-lg leading-relaxed">
            <div className=" text-sm w-[40%] flex flex-col justify-evenly gap-8 items-start">
              Over the past 5 years, Obys has released 3 educational projects
              (websites) that have become quite popular within the design
              community. These websites have been visited over 1 million times.
              <br />
              <br />
              Here is the new, light, and entertaining format of the series that
              we are excited to present to you. With short episodes full of
              valuable information without fluff, these will teach you the main
              principles of design and enhance your skills in working with
              typography, grids, colors, and composition.
              <a
                href="#"
                className="inline-block px-4 py-2 text-sm text-white bg-primaryBlack-light rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                More About Us
              </a>
            </div>

            {/* Projects */}
            <ul className="space-y-2 w-1/2">
              <h2 className="text-base border-b pb-2 border-primaryBlack-light font-bold">
                Projects:
              </h2>
              <li>
                <a
                  href="#"
                  className="block text-sm border-b pb-2 border-primaryBlack-light "
                >
                  Typography Principles (2019) ↗
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-sm border-b pb-2 border-primaryBlack-light "
                >
                  Colors Combinations (2020) ↗
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-sm border-b pb-2 border-primaryBlack-light "
                >
                  Grids (2021) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
