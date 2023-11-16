/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import Image from "next/image";
import MenuIcon from "./icons/MenuIcon";
import { MutableRefObject, useState } from "react";

export default function Hedaer() {
  const pathname = usePathname();
  const [isMenuClosed, setCloseMenu] = useState(true);

  return (
    <div>
      <div className="z-10 px-8 py-3 inline-flex justify-between md:static fixed w-full h-18 md:bg-transparent bg-gray-200">
        <div className="inline-flex p-4">
          <div className="my-auto md:text-2xl text-xl">
            <span className="text-gray-600 font-weight-light"> AHOUANTO </span>
            <span className="text-blue-500"> Parfait S.</span>
          </div>
          <div className="relative ml-4">
            {/* <div className="absolute top-0 right-0 left-0 bottom-0 w-18 -z-50 rounded-full h-18 bg-blue-200 animate-duration-200 animate-pulse animate-infinite border-8 border-double border-blue-100"></div> */}
            <div className="absolute top-0 right-0 left-0 bottom-0 w-18 -z-50 rounded-full h-18 "></div>

            {/* <Image
              src="/images/profile.jpg"
              alt="profile_img"
              width={40}
              height={40}
              className="static mx-2 my-2 z-50 rounded-full w-16 h-16"
            /> */}
          </div>
        </div>
        <div className="md:inline-flex hidden">
          <div className="flex my-auto">
            <div>
              <Link
                href="/"
                className="transition duration-700 ease-in-out inline-block py-1 px-3  text-blue-500"
              >
                {" "}
                Home
              </Link>
              {pathname == "/" && (
                <div className="w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div>
            <div>
              <Link
                className="transition duration-700 ease-in-out inline-block py-1 px-3  text-blue-500"
                href="/resume"
              >
                {" "}
                Resume
              </Link>
              {pathname == "/resume" && (
                <div className="w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div>

            <div>
              <Link
                className="transition duration-700 ease-in-out inline-block py-1 px-3  text-blue-500"
                href="/services"
              >
                Services
              </Link>
              {pathname == "/services" && (
                <div className="w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div>

            <div>
              <Link
                className="transition duration-700 ease-in-out inline-block py-1 px-3  text-blue-500"
                href="/projects"
              >
                {" "}
                Projects
              </Link>
              {pathname == "/projects" && (
                <div className="w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div>
            {/* <div>
              <Link
                className="transition duration-700 ease-in-out inline-block py-1 px-3  text-blue-500"
                href="/blog"
              >
                Blog
              </Link>
              {pathname == "/blog" && (
                <div className="w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div> */}
            <div>
              <Link
                className="transition duration-700 ease-in-out inline-block py-1 px-3  text-blue-500"
                href="/contact"
              >
                Contact
              </Link>
              {pathname == "/contact" && (
                <div className="w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div>
          </div>
        </div>

        {/* for mobile version */}
        <div
          onClick={() => {
            setCloseMenu(!isMenuClosed);
          }}
          className="m-2 shadow-sm w-46 h-46  inline-flex md:hidden p-3 md:bg-gray-600 bg-white hover:cursor-pointer rounded-md"
        >
          <span className="text-blue-500 font-bold">{"<"}</span>{" "}
          <span className="md:text-white text-gray-600 font-bold">{"/"} </span>{" "}
          <span className="text-blue-500 font-bold">{">"} </span>
        </div>
      </div>

      {!isMenuClosed && <MenuIcon stateChanger={setCloseMenu} />}
    </div>
  );
}
