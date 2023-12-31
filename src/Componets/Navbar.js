import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-stone-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white-200">
        <Link to="/textutil" className="flex items-center">
          <img
            src="/Images/logo.png"
            className="h-8 mr-3 shadow-xl"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TextUtils
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-stone-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setToggle((prev) => !prev)} //important
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={"w-full md:block md:w-auto" + (toggle ? "" : " hidden")}
          bg="true"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-stone-200  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-stone-50 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/textutil"
                data-collapse-toggle="navbar-default"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  "
                aria-current="page"
                onClick={() => setToggle((prev) => !prev)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Textarea"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={() => setToggle((prev) => !prev)}
              >
                Utils
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => setToggle((prev) => !prev)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => setToggle((prev) => !prev)}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { about: PropTypes.string };

Navbar.defaultProps = { about: "About" };
