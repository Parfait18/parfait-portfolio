"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction } from "react";
import { motion } from "framer-motion";

type MenuType = {
  stateChanger: React.Dispatch<SetStateAction<boolean>>;
};
const MenuIcon = (props: MenuType) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div
        onClick={() => {
          props.stateChanger(true);
        }}
        className="fixed inset-0 opacity-25 bg-black"
      ></div>

      <div className="transition delay-700 duration-300 ease-in-out flex z-10 flex-col md:hidden w-11/12 fixed left-4 right-4 top-24 rounded-md shadow-xl bg-white">
        <div className="h-96 w-full  static">
          <div className="flex flex-col text-left space-y-4 py-4">
            <div>
              <Link
                href="/"
                className="w-full transition duration-700 ease-in-out inline-block py-2 px-3  text-blue-600"
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
                className="w-full transition duration-700 ease-in-out inline-block py-2 px-3  text-blue-600"
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
                className="w-full transition duration-700 ease-in-out inline-block py-2 px-3  text-blue-600"
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
                className="w-full transition duration-700 ease-in-out inline-block py-2 px-3  text-blue-600"
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
                className="w-full transition duration-700 ease-in-out inline-block py-2 px-3  text-blue-600"
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
                className="w-full transition duration-700 ease-in-out inline-block py-2 px-3  text-blue-600"
                href="/contact"
              >
                Contact
              </Link>
              {pathname == "/contact" && (
                <div className=" w-6 ml-3 bg-blue-500 h-1.5 rounded-md"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default MenuIcon;
