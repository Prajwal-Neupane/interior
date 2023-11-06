import { Carousel } from "flowbite-react";
import React from "react";

export const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl">
        <Carousel className="w-full mx-auto">
          <div className="flex flex-col items-center justify-between h-full gap-12 py-12 md:flex-row-reverse my-28 md:my-8 ">
            <div>
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1697261986~exp=1697262586~hmac=af56fd41c80aa871abdb3764a1dedf2a8a41937219777ce9564c13ab21bf23f2"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-gray-700 md:w-3/4">
                Lesson and Insights{" "}
                <span className="leading-snug text-green-900">
                  from 8 years
                </span>
              </h1>
              <p className="mb-8 text-base text-gray-900">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 text-white transition-all duration-300 bg-green-800 rounded hover:-translate-y-4 px-7 hover:bg-gray-900 ">
                Register
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full gap-12 py-12 md:flex-row-reverse my-28 md:my-8 ">
            <div>
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1697261986~exp=1697262586~hmac=af56fd41c80aa871abdb3764a1dedf2a8a41937219777ce9564c13ab21bf23f2"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-gray-700 md:w-3/4">
                Lesson and Insights{" "}
                <span className="leading-snug text-green-900">
                  from 8 years
                </span>
              </h1>
              <p className="mb-8 text-base text-gray-900">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 text-white transition-all duration-300 bg-green-800 rounded hover:-translate-y-4 px-7 hover:bg-gray-900 ">
                Register
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full gap-12 py-12 md:flex-row-reverse my-28 md:my-8 ">
            <div>
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1697261986~exp=1697262586~hmac=af56fd41c80aa871abdb3764a1dedf2a8a41937219777ce9564c13ab21bf23f2"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-gray-700 md:w-3/4">
                Lesson and Insights{" "}
                <span className="leading-snug text-green-900">
                  from 8 years
                </span>
              </h1>
              <p className="mb-8 text-base text-gray-900">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 text-white transition-all duration-300 bg-green-800 rounded hover:-translate-y-4 px-7 hover:bg-gray-900 ">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
