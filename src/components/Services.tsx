import React from "react";
import {
  GrFacebook,
  GrYoutube,
  GrLinkedin,
  GrPinterest,
  GrTwitter,
  GrAmazon,
  GrInstagram,
  GrCloud,
} from "react-icons/gr";
import { VscOrganization } from "react-icons/vsc";
import { LiaIndustrySolid } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organizations",
      description:
        "Our membership software provides full automation of membership renewals and payments",
      logo: <VscOrganization className="w-full h-full" />,
    },
    {
      id: 2,
      title: "National Association",
      description:
        "Our membership software provides full automation of membership renewals and payments",
      logo: <LiaIndustrySolid className="w-full h-full" />,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership software provides full automation of membership renewals and payments",
      logo: <GrGroup className="w-full h-full" />,
    },
  ];
  return (
    <div className="flex flex-col items-center px-5 py-16 mx-auto bg-slate-200 md:px-14 max-w-screen-2xl">
      <div className="my-8 text-center">
        <h2 className="mb-2 text-4xl font-semibold text-gray-800">
          Our Clients
        </h2>
        <p className="text-gray-900">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 my-12">
          <GrFacebook className="w-16 h-16 opacity-60" />
          <GrLinkedin className="w-16 h-16 opacity-60" />
          <GrPinterest className="w-16 h-16 opacity-60" />
          <GrYoutube className="w-16 h-16 opacity-60" />
          <GrTwitter className="w-16 h-16 opacity-60" />
          <GrAmazon className="w-16 h-16 opacity-60" />
          <GrInstagram className="w-16 h-16 opacity-60" />
          <GrCloud className="w-16 h-16 opacity-60" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 text-center md:w-1/2 mx:auto">
        <h2 className="mb-3 text-4xl font-semibold text-gray-800">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-900">Who is Prajwal suitable for?</p>
      </div>
      <div className="grid gap-12 mx-auto mt-14 lg:grid-cols-3 md:grid-cols-2 md:w-11/12">
        {services.map((service) => (
          <div
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            key={service.id}
          >
            <div>
              <div className="mx-auto bg-gray-300 rounded-tl-none h-14 w-14 rounded-br-3xl">
                {service.logo}
              </div>
              <h4 className="px-2 mb-2 text-2xl font-bold text-gray-900 ">
                {service.title}
              </h4>
              <p className="text-sm text-gray-900">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
