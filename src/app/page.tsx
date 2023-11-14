import Image from "next/image";
import TypeWriter from "./components/TypeWriter";
import { Metadata } from "next";
import { template } from "./helpers/title-helper";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: template.replace("%s", "Home"),
};

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>


export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-between">
      <div className="w-full space-y-4 grid md:grid-cols-2 grid-cols-1">
        <div className="space-y-4">
          {/* <div className=" text-justify md:w-4/6 w-4/6 mx-auto text-center text-3xl text-blue-700">
            Parfait AHOUANTO
          </div> */}
          <div className="md:text-4xl mb-16 text-2xl text-left p-8 w-full h-20 text-gray-600">
            <TypeWriter content={"Hi! I'm Parfait AHOUANTO <br/>I'm Fullstack developer"} /> 
          </div>
          <div className="w-24 m-8 bg-blue-500 h-2 rounded-md"></div>
          <p className="text-justify text-gray-600 w-full md:w-full mx-auto text-md p-8">
            Hardworking and passionate about information’s systems, my
            professional career has allowed me to acquire enough experience in
            the implementation and development of information’s systems.
          </p>
          <div className="m-8 w-48 py-3 hover:cursor-pointer shadow-md  justify-center text-center bg-blue-500 text-white inline-flex items-center px-2 rounded-md">
            <span > Get Resume </span>
            <ArrowDownTrayIcon  width={24} className="text-white ml-2"/>
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
