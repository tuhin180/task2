import React from "react";
import { BsInfo } from "react-icons/bs";

const SaModel = () => {
  return (
    <div className=" rounded-md shadow-lg h-[580px] w-[480px] overflow-y-scroll ">
      <span className="flex w-full bg-black p-4 justify-between rounded-t-xl">
        <span></span>
        <h1 className=" text-white  text-center ">4SA Model</h1>
        <span className="bg-white inline-block  px-1 py-1 rounded-xl mr-4">
          <BsInfo className="" />
        </span>
      </span>
      <div className="">
        <h1 className="text-[14px] mt-8 p-4">
          <span className="font-bold">Description: </span>
          To Explore more read more
        </h1>
      </div>
      <div class="space-y-4 px-4">
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary class="flex p-2 cursor-pointer bg-gray-200">
            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <h2 class=" ml-10 text-gray-900 font-bold text-middle">
              Introduction
            </h2>
          </summary>
          <div className="px-8 py-6">
            <p>The 4SA Method, How to bring a idea into process?</p>
            <div className="flex justify-end">
              <a className="hover:text-blue-500 " href="">
                See more
              </a>
            </div>
          </div>
        </details>
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary class="flex p-2 cursor-pointer ">
            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <h2 class=" ml-10 text-gray-900 font-bold text-middle">Thread A</h2>
          </summary>
          <div className="px-8 py-6">
            <p>
              How are you going to develop your strategy? Which method are you
              going to use to develop a strategy?What if the project is lengthy?
            </p>
            <div className="flex justify-end my-4">
              <a className="hover:text-blue-500 " href="">
                See more
              </a>
            </div>
          </div>
          <div className="mx-2">
            <p className="border p-2">Example</p>
            <h1 className="my-6">
              You have a concept; how will you put it into practice to create a
              product? How will you organize the final product? Can the
              product's MVP be created in a week?H
            </h1>
            <div className="flex justify-end my-4">
              <a className="hover:text-blue-500 " href="">
                See more
              </a>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default SaModel;
