"use client"
import React from "react";

const SecondPage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50 text-black">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-16">
          {/* Title */}
          <span className="text-6xl font-bold leading-tight">
            ① Design Education Series
          </span>
          
          {/* Description */}
          <div className="text-3xl leading-snug">
            <p>
              Design Education Series is a new format of an original mini-series
              on the main principles of design, where we share all insights
              gained during our experience at Obys Agency.{" "}
              <span className="underline">
                Typography Principles, Colors Combinations, Grids
              </span>{" "}
              are the titles of the first three seasons of the series.
            </p>
          </div>

          {/* Projects and Description */}
          <div className="flex justify-between">
            {/* Extra Information */}
            <div className="w-1/2 text-lg leading-relaxed">
              <p>
                Over the past 5 years, Obys has released 3 educational projects
                (websites) that have become quite popular within the design
                community. These websites have been visited over 1 million times.
              </p>
              <p className="mt-4">
                Here is the new, light, and entertaining format of the series that
                we are excited to present to you. With short episodes full of
                valuable information without fluff, these will teach you the main
                principles of design and enhance your skills in working with
                typography, grids, colors, and composition.
              </p>
            </div>

            {/* Projects */}
            <div className="w-1/3">
              <h2 className="text-xl font-bold mb-4">Projects:</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block text-lg text-blue-600 hover:text-black transition-colors duration-200"
                  >
                    Typography Principles (2019) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-lg text-blue-600 hover:text-black transition-colors duration-200"
                  >
                    Colors Combinations (2020) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-lg text-blue-600 hover:text-black transition-colors duration-200"
                  >
                    Grids (2021) ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* More About Us Button */}
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block px-6 py-3 text-lg text-white bg-black rounded hover:bg-gray-800 transition-colors duration-200"
            >
              More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
