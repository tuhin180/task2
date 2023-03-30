import React, { useState } from "react";
import logo from "../../assets/logo/logo 1.png";
import { FaBell, FaTools, FaHome } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from "../../assets/Ellipse 53.png";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = (
    <React.Fragment>
      <li className="md:mr-10  ">
        <Link className="text-white bg-blue-500 px-1 py-2 rounded-full" to="#">
          <FaHome className="inline-block m-2" />
        </Link>
      </li>
      <li className="md:mr-8 ">
        <Link className="text-white bg-blue-500 px-1 py-2 rounded-full" to="#">
          <FaTools className="inline-block m-2" />
        </Link>
      </li>
      <li className="md:mr-8  ">
        <Link className="text-white bg-blue-500 px-1 py-2 rounded-full" to="#">
          <FaBell className="inline-block m-2" />
        </Link>
      </li>
      <li className="md:mr-8  ">
        <Link to="#">
          <img src={avatar} alt="" />
        </Link>
      </li>
      <li className="md:mr-8 ">
        <Link to="#" className="text-blue-500">
          <BsThreeDotsVertical className="inline-block mr-2" />
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="bg-gray-200 sticky top-0  ">
      <nav className=" flex w-11/12 mx-auto items-center justify-between p-4  ">
        <div>
          <img src={logo} className="h-10" alt="" />
        </div>
        <div className="hidden md:block">
          <ul className="font-poppins text-base flex  items-center justify-between ">
            {menuItems}
          </ul>
        </div>
        <div className="mr-5 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="ml-8 mt-10 font-poppins relative">{menuItems}</ul>
      </Transition>
    </div>
  );
};

export default Navbar;
