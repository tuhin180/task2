import React, { useState } from "react";
import Card from "../component/Card";
import {
  FaTimes,
  FaPlus,
  FaQuestion,
  FaPeopleCarry,
  FaCalendarAlt,
} from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [rightBar, setRightBar] = useState(true);
  return (
    <div className=" grid grid-cols-12 justify-between gap-4">
      <div
        className={`fixed bg-white shadow-lg border h-80 rounded-r-lg ${
          rightBar ? "w-16" : "w-1/2 "
        } duration-700 mt-2 `}
      >
        <p
          className={`bg-black ${
            rightBar ? "py-4" : "p-2"
          } rounded-tr-lg text-white ${!rightBar && "flex justify-between"}`}
        >
          {!rightBar ? "journey Board" : ""}
          <BsArrowLeftShort
            onClick={() => setRightBar(!rightBar)}
            className={`transition-transform duration-500 bg-white text-black text-3xl rounded-full absolute top-1 right-0 cursor-pointer ${
              rightBar ? "rotate-0" : "rotate-180"
            }`}
          />
        </p>
        {!rightBar ? (
          <p className="mt-4 ml-6 ">
            <ul className="list-disc text-xl list-inside">
              <li className="font-bold">Explore the world of management</li>
              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure you pointers</li>
              <li>4SA Method</li>
            </ul>
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="col-start-2 col-span-10 h-auto overflow-y-auto">
        <div className="flex justify-between m-2">
          <h1 className="text-blue-500 font-bold text-[28px]">
            Technical Project Management
          </h1>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-black text-xs">
            Submit task
          </button>
        </div>
        <div className="mt-6 bg-gray-200 p-6 rounded-md">
          <h1 className="text-black font-bold text-base">
            Explore the world of management
          </h1>
          <p className="text-sm">
            As a project manager, you play an important role in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each and
            every step of your life?
          </p>
        </div>
        <Card />
      </div>
      <div className="   overflow-hidden ">
        <div className={` flex h-96 ${!open && "shadow-lg"}`}>
          <div
            className={`flex-1 bg-black ${
              open ? "transform translate-x-1/2" : ""
            } rounded-l-xl w-full`}
          >
            {open ? (
              <button
                onClick={() => setOpen(!open)}
                className="text-white m-3 text-xl"
              >
                <FaPlus />
              </button>
            ) : (
              <button
                onClick={() => setOpen(!open)}
                className="text-white m-3 text-xl"
              >
                <FaTimes />
              </button>
            )}
            <p
              className={`text-white text-xl ${
                !open ? "text-center" : "ml-4"
              }  `}
            >
              N <br />
              o
              <br /> t <br /> i <br /> c <br /> e <br /> <br /> B <br /> o{" "}
              <br />a
              <br />
              r <br /> d
            </p>
          </div>
          {!open && <div className="flex-1 bg-white"></div>}
        </div>
        <div className=" mt-6  flex flex-col gap-3 justify-center items-center fixed bottom-0">
          <div className="bg-blue-700 py-3 px-3 rounded-full text-white text-3xl">
            <FaQuestion />
          </div>
          <div className="bg-blue-700 py-3 px-3 rounded-full text-white text-3xl">
            <FaPeopleCarry />
          </div>
          <div className="bg-blue-700 py-3 px-3 rounded-full text-white text-3xl">
            <FaCalendarAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
