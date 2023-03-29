import React from "react";
import { BsInfo } from "react-icons/bs";

const TechnicalProject = () => {
  return (
    <div className=" rounded-md shadow-lg h-[580px] w-[480px]">
      <span className="flex w-full bg-black p-4 justify-between rounded-t-xl">
        <span></span>
        <h1 className=" text-white text-center">
          Technical Project Management
        </h1>
        <span className="bg-white inline-block  px-1 py-1 rounded-xl mr-4">
          <BsInfo className="" />
        </span>
      </span>
      <div className="">
        <h1 className="text-[14px] mt-6 p-4">
          <span className="font-bold">Description: </span>
          Story of Alignment Scope of Agility Specific Accountable Staggering
          Approach
        </h1>
        <div className="w-full mt-6">
          <video src="" height={400} width={500} controls></video>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProject;
