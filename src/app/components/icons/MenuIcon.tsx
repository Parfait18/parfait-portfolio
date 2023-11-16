"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction } from "react";

type MenuType = {
  stateChanger: React.Dispatch<SetStateAction<boolean>>;
};
const MenuIcon = (props: MenuType) => {
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={() => props.stateChanger(false)}
        className="fixed inset-0 opacity-25 bg-black"
      ></div>
      <div className="flex z-10 flex-col md:hidden w-11/12 fixed left-4 right-4 top-24 rounded-md shadow-xl bg-white">
        <div className="h-96 w-full  static shadow-lg shadow-gray-300">
          <div className="flex flex-col text-left space-y-8">
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
            <div>
              <Link
                className="transition duration-700 ease-in-out inline-block py-1 px-3  text-blue-500"
                href="/blog"
              >
                Blog
              </Link>
              {pathname == "/blog" && (
                <div className="w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div>
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
      </div>
    </>
  );
};
export default MenuIcon;
