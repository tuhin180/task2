import React, { useState } from "react";
import {
  BsInfo,
  BsFillLightbulbFill,
  BsFillChatRightTextFill,
  BsChevronDown,
  BsPlus,
  BsLink,
  BsPencil,
} from "react-icons/bs";

import question from "../assets/Vector (1).png";
import lily from "../assets/Vector (2).png";
import ButtonIcon from "./ButtonIcon";

const category = ["category", "remak", "item"];

const Process = ["Question", "analogy", "sercasm"];
const thread = [
  "Eureka esphsis",
  "Blisfully pezzard",
  "spiritually Determined",
];
const ThreadBuild = () => {
  const [categorysOpen, SetCategorysOpen] = useState(false);
  const [processOpen, SetProcessOpen] = useState(false);
  const [threads, setThreads] = useState(false);
  return (
    <div className=" rounded-md shadow-lg h-[580px] w-[480px] overflow-y-scroll scrollbar-w-0 ">
      <span className="flex w-full bg-black p-4 justify-between rounded-t-xl">
        <span></span>
        <h1 className=" text-white text-center "> Thredbuild</h1>
        <span className="bg-white inline-block  px-1 py-1 rounded-xl mr-4">
          <BsInfo className="" />
        </span>
      </span>
      <div className="">
        <h1 className="text-[14px] mt-6 p-4">
          <span className="font-bold">Description: </span>
          Watch the video and threadbuild, and jot out key threads while
          watching the video
        </h1>
        {/* accordian  */}
        <div class="space-y-4">
          <details
            class="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary class="flex   p-2 cursor-pointer bg-yellow-50">
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
                Thred A
              </h2>
            </summary>
            {/* input section  */}
            <div className="flex  p-7 gap-7">
              <div className="w-1/2 h-16  bg-gray-100 rounded-xl  border-1 shadow-lg">
                <h1 className="p-2 ml-2">Sub Thread 1</h1>
                <textarea
                  name="textarea"
                  placeholder="Enter text here "
                  className="w-full h-[70px] px-3 py-2 rounded-xl  resize-none focus:outline-none shadow-lg"
                ></textarea>
              </div>
              <div className="w-1/2 h-16 bg-gray-100 rounded-xl border">
                <h1 className="p-2 ml-2">Sub interpretion 1</h1>
                <textarea
                  name="textarea"
                  placeholder="Enter text here "
                  className="w-full h-[70px] px-3 py-2 rounded-xl  resize-none focus:outline-none shadow-lg"
                ></textarea>
              </div>
            </div>
            {/* icon section  */}
            <div className="flex justify-end relative  gap-4 py-10 p-2">
              <div className="flex items-center text-gray-800 gap-2">
                <span>
                  <BsFillLightbulbFill className="text-2xl" />
                </span>
                <span>
                  <BsFillChatRightTextFill className="text-2xl" />
                </span>
                <span>
                  <img className="h-6" src={question} alt="" />{" "}
                </span>
                <span>
                  <img className="h-6" src={lily} alt="" />{" "}
                </span>
              </div>
              {/* category section  */}
              <div className=" flex font-bold">
                <button
                  onClick={() => SetCategorysOpen(!categorysOpen)}
                  className=" flex items-center text-xs border p-2 rounded-lg shadow-lg"
                >
                  Select Categ
                  {categorysOpen ? (
                    <BsChevronDown className="ml-2 rotate-180" />
                  ) : (
                    <BsChevronDown className="ml-2" />
                  )}
                </button>

                <button
                  onClick={() => SetProcessOpen(!processOpen)}
                  className=" flex items-center text-xs ml-4 p-2  rounded-lg border shadow-lg"
                >
                  Select Proces
                  {processOpen ? (
                    <BsChevronDown className="ml-2 rotate-180" />
                  ) : (
                    <BsChevronDown className="ml-2 " />
                  )}
                </button>
                {categorysOpen && (
                  <div className=" absolute top-20 bg-white ">
                    <div>
                      {category.map((item) => (
                        <div>
                          <h3 className="hover:bg-blue-500 p-2 text-xs rounded">
                            {item}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {processOpen && (
                  <div className=" absolute right-14 top-20 bg-white ">
                    <div>
                      {Process.map((item) => (
                        <div>
                          <h3 className="hover:bg-blue-500 p-2 text-xs rounded">
                            {item}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* button section  */}
            <div className="ml-4">
              <ButtonIcon name={"Sub-thread"} primaryicon={<BsPlus />} />
            </div>

            {/* summart thread  */}
            <div className=" bg-gray-100 h-[80px] rounded-md mt-4 w-11/12 mx-auto shadow-lg">
              <h1 className="font-bold p-2 scroll-py-2">
                Summery For thread A
              </h1>
              <textarea
                name="textarea"
                className="w-full rounded-2xl border resize-none h-[80px]"
              ></textarea>
            </div>
            {/* link section */}

            <div className="mt-20 w-10/12 mx-auto  flex items-center justify-between">
              <div className="w-1/2">
                <span className="flex gap-1 items-center ">
                  <BsLink />
                  Thread Credit
                  <span className="text-blue-500 font-bold">
                    <BsPencil />
                  </span>
                  <div className="border border-t-2 border-t-blue-700 w-2 "></div>
                </span>
              </div>
              <div className="relative w-1/2 ">
                <button
                  onClick={() => setThreads(!threads)}
                  className=" flex items-center text-xs border p-2 rounded-lg shadow-lg"
                >
                  Select Emotion
                  {threads ? (
                    <BsChevronDown className="ml-2 rotate-180" />
                  ) : (
                    <BsChevronDown className="ml-2" />
                  )}
                </button>
                {threads && (
                  <div className=" absolute top-10 bg-transparent ">
                    <div>
                      {thread.map((item) => (
                        <div>
                          <h3 className="hover:bg-blue-500 p-2 text-xs rounded">
                            {item}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* submit button  */}
            <div className="flex justify-end p-4 ">
              <button className=" flex flex-row-reverse items-center  mt-6 ml-3 bg-blue-700 px-2 py-2 rounded-md text-white text-xs font-bold">
                Submit thread
                <span className="font-bold text-xl"></span>
              </button>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ThreadBuild;
