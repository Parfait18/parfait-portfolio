"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Hedaer() {
  const pathname = usePathname();
  return (
    <div>
      <div className="p-4  inline-flex justify-between w-full h-18">
        <div className="inline-flex p-4">
          <div className="my-auto text-2xl">
            <span className="text-gray-600 font-weight-light"> AHOUANTO </span>
            <span className="text-blue-500"> Parfait S.</span>
          </div>
          <div className="relative ml-4">
            {/* <div className="absolute top-0 right-0 left-0 bottom-0 w-18 -z-50 rounded-full h-18 bg-blue-200 animate-duration-200 animate-pulse animate-infinite border-8 border-double border-blue-100"></div> */}
            <div className="absolute top-0 right-0 left-0 bottom-0 w-18 -z-50 rounded-full h-18 "></div>

            <Image
              src="/images/profile.jpg"
              alt="profile_img"
              width={40}
              height={40}
              className="static mx-2 my-2 z-50 rounded-full w-16 h-16"
            />
          </div>
        </div>
        <div className="md:inline-flex hidden">
          <div className="flex my-auto">
            <Link
              href="/"
              className={
                pathname == "/"
                  ? "transition duration-700 ease-in-out  mr-3 inline-block py-1 px-3 bg-blue-500 text-white rounded-sm shadow-sm"
                  : "transition duration-700 ease-in-out  mr-3 inline-block py-1 px-3  text-blue-500"
              }
            >
              {" "}
              Home
            </Link>
            <Link
              className="transition duration-700 ease-in-out  mr-3 inline-block    py-1 px-3  text-blue-500"
              href="/resume"
            >
              {" "}
              Resume
            </Link>
            <Link
              className="transition duration-700 ease-in-out  mr-3 inline-block    py-1 px-3  text-blue-500"
              href="/services"
            >
              {" "}
              Services
            </Link>

            <Link
              className="mr-3 inline-block    py-1 px-3  text-blue-500"
              href="/projects"
            >
              {" "}
              Projects
            </Link>

            <Link
              className="mr-3 inline-block    py-1 px-3 text-blue-500"
              href="/blog"
            >
              {" "}
              Blog
            </Link>
            <Link
              className="mr-3 inline-block    py-1 px-3  text-blue-500"
              href="/contact"
            >
              {" "}
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
