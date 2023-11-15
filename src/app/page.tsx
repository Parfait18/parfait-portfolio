import Image from "next/image";
import TypeWriter from "./components/TypeWriter";
import { Metadata } from "next";
import { template } from "./helpers/title-helper";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: template.replace("%s", "Home"),
};

export default function Home() {
  return (
    <main className="flex flex-col h-min-screen items-center p-4">
      <div className="w-full space-y-8 grid md:grid-cols-2 grid-cols-1">
        <div className="space-y-4 grid-cols-1">
          <div className="md:text-4xl mb-16 text-2xl text-left p-8 w-full h-28 text-gray-600">
            <TypeWriter
              content={"Hi! I'm Parfait AHOUANTO <br/>I'm Fullstack developer"}
            />
          </div>
          <div className="w-24 m-8 bg-blue-500 h-2 rounded-md"></div>
          <p className="text-justify text-gray-600 w-full md:w-full mx-auto text-md p-8">
            Hardworking and passionate about information’s systems, my
            professional career has allowed me to acquire enough experience in
            the implementation and development of information’s systems.
          </p>
          <div className="px-8 py-4 w-full">
            <div className=" w-48 py-3 hover:cursor-pointer shadow-md  justify-center text-center border border-blue-500 hover:text-white hover:bg-blue-500 text-blue-500 inline-flex items-center px-2 rounded-md">
              <span> View Resume </span>
              <ArrowDownTrayIcon width={24} className="ml-2" />
            </div>
          </div>

          <div className="inline-flex px-8 justify-between">
            <Image
              src="/icons/github.svg"
              alt="github_img"
              width={50}
              height={50}
              className="static mx-2 w-46 h-46  hover:cursor-pointer rounded-full"
            />
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin_img"
              width={50}
              height={50}
              className="static mx-2 w-46 h-46  hover:cursor-pointer rounded-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8 w-full  h-96 mx-auto mt-12 relative ">
          <div className="absolute  top-20 left-8 bg-gray-600 h-16 w-16 shadow-md rounded-md"></div>
          <Image
            src="/images/developer.svg"
            alt="profile_img"
            width={400}
            height={200}
            className="static mx-2 w-96 h-96 z-50 rounded-full"
          />
          <div className="absolute animate-pulse bottom-4 right-8 shadow-md bg-gray-500 h-16 w-16 rounded-md"></div>
        </div>
      </div>
    </main>
  );
}
