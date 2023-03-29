import React, { useState } from "react";
import Card from "../component/Shared/Card";
import { FaTimes } from "react-icons/fa";
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" grid grid-cols-12 gap-4">
      <div className="bg-red-200 h-60 rounded-md "></div>
      <div className="col-start-2 col-span-10 h-80">
        <div className="flex justify-between m-2">
          <h1 className="text-blue-500 font-bold text-2xl">
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
            As a project manager, you play an important reole in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each and
            every step of your life?
          </p>
        </div>
        <Card />
      </div>
      <div className={` flex h-full shadow-xl `}>
        <div
          className=" w-1/2  bg-black rounded-l-xl"
          onClick={() => setOpen(!open)}
        >
          <div>
            <FaTimes className="font-bold text-white text-xl mx-3 my-2 " />
          </div>
        </div>
        <div className="w-1/2 bg-white hidden"></div>
      </div>
    </div>
  );
};

export default Home;
