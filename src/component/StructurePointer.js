import React, { useState } from "react";
import { BsChevronDown, BsImageFill, BsInfo } from "react-icons/bs";
import {
  HiArrowUturnLeft,
  HiArrowUturnRight,
  HiArrowsPointingIn,
  HiOutlineEllipsisHorizontal,
} from "react-icons/hi2";
import { FaSave } from "react-icons//fa";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";

const StructurePointer = () => {
  const [option, setOption] = useState(false);
  return (
    <div className=" rounded-md shadow-lg h-[580px] w-[480px] overflow-y-scroll scrollbar-none">
      <span className="flex w-full bg-black p-4 justify-between rounded-t-xl">
        <span></span>
        <h1 className=" text-white ">Structure your pointer</h1>
        <span className="bg-white inline-block  px-1 py-1 rounded-xl mr-4">
          <BsInfo className="" />
        </span>
      </span>
      <div className="">
        <h1 className="text-[14px] mt-8 p-4">
          <span className="font-bold">Description: </span>
          Write a 300 - 400 word article from your thread . Publish your
          understanding and showcase your understanding to the entire world
        </h1>
      </div>
      <div className="p-4">
        <div>
          <h1 className="font-bold">Title</h1>
          <input
            type="text"
            className=" mt-4 input input-bordered border p-1 input-accent w-full shadow-md max-w-xs focus:outline-none"
          />
        </div>

        <div className=" my-4">
          <h1 className="font-bold">Content </h1>
          <div className=" border my-4  rounded-md">
            <ul className="p-3 flex text-sm justify-center">
              <li className="px-2">File</li>
              <li className="px-2">Edit</li>
              <li className="px-2">View</li>
              <li className="px-2">Insert</li>
              <li className="px-2">Format</li>
              <li className="px-2">Tools</li>
              <li className="px-2">Table</li>
              <li className="px-2">Help</li>
            </ul>
            <ul className="p-3 flex  text-sm justify-center">
              <li className="text-2xl px-3">
                <HiArrowUturnLeft />
              </li>
              <li className="text-2xl px-3">
                <HiArrowUturnRight />
              </li>

              <li className="text-2xl px-3">
                <HiArrowsPointingIn />
              </li>
              <li className="text-2xl px-3">
                <BsImageFill />
              </li>
              <li className="px-3">
                <Button
                  name={"paragraph"}
                  initial={option}
                  setInitila={setOption}
                  classes={"px-2 p-1"}
                />
              </li>
              <li className="text-2xl px-3">
                <HiOutlineEllipsisHorizontal />
              </li>
            </ul>
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              className="focus:outline-none w-full py-2 border"
            ></textarea>
            <div className="flex justify-between px-6">
              <p>p</p>
              <p>0 words</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="w-1/2">
            <h1 className="font-bold my-2">Category</h1>
            <select
              name="select "
              id=""
              className="w-full flex items-center border focus:outline-none p-2 rounded-md shadow-md"
            >
              <option>--select--</option>
              <option value="volvo">Volvo</option>
              <option value="volvo">Volvo</option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="w-1/2">
            <h1 className="font-bold my-2">SubCategory</h1>
            <select
              name="select "
              id=""
              className="w-full border focus:outline-none p-2 rounded-md shadow-md"
            >
              <option>--select--</option>
              <option value="volvo">Volvo</option>
              <option value="volvo">Volvo</option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 my-4">
          <div className="w-1/2">
            <h1 className="font-bold my-2">ThumbNail</h1>
            <form>
              <label for="file-input" class="sr-only">
                Choose file
              </label>
              <input
                type="file"
                name="file-input"
                id="file-input"
                class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-gray-100
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-2 file:px-4 
    dark:file:bg-white dark:file:text-black"
              />
            </form>
          </div>
          <div className="w-1/2">
            <h1 className="font-bold my-2">Thought Process</h1>

            <select className="select w-full max-w-xs border focus:outline-none p-2 rounded-md shadow-lg"></select>
          </div>
        </div>

        <div className="flex justify-end gap-4 py-3">
          <ButtonIcon
            classes={"px-2 py-2 rounded-md text-white flex items-center"}
            primaryicon={<FaSave className="mr-2" />}
            name={"Save draft"}
          />
          <ButtonIcon
            classes={"px-2 py-2 rounded-md text-white flex items-center"}
            primaryicon={<BsFillCloudArrowUpFill className="mr-2" />}
            name={"Publish"}
          />
        </div>
      </div>
    </div>
  );
};

export default StructurePointer;
