import React from "react";
import { VscOrganization } from "react-icons/vsc";
import { LiaIndustrySolid } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";

const About = () => {
  return (
    <div>
      <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl">
        <div className="flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row">
          <div>
            <img
              src="https://img.freepik.com/premium-photo/businesspeople-are-looking-laptop-working-startup-project-office_232070-14958.jpg?size=626&ext=jpg&uid=R120667626&ga=GA1.2.1592330795.1697170792&semt=sph"
              alt=""
            />
          </div>
          <div className="mx-auto md:w-3/5">
            <h2 className="mb-4 text-4xl font-semibold text-gray-900 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="mb-8 text-sm text-gray-900 md:w-3/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque ipsa amet eum sint! Eaque repellat vero est, ad
              asperiores eos repudiandae cupiditate quam architecto tempore
              aliquam quos consequatur vel ipsam?
            </p>
            <button className="py-2 text-white transition-all duration-300 bg-green-800 rounded hover:-translate-y-4 px-7 hover:bg-gray-900 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto bg-gray-300 lg:px-14 max-w-screen-2xl">
        <div>
          <div className="md:w-[50%]">
            <h2 className="mb-4 text-4xl font-semibold text-gray-900 md:w-2/3">
              Helping a local <br />{" "}
              <span className="text-green-900">business reinvent itself</span>
            </h2>
            <p>We reached here with our hard work and dedication.</p>
          </div>

          <div className="flex flex-col justify-around gap-12 mx-auto md:w-1/2 sm:flex-row sm:items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <GrGroup />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    2,345,678
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GrGroup />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    2,345,678
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GrGroup />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    2,345,678
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GrGroup />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    2,345,678
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
