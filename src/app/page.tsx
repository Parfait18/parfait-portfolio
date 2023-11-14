import Image from "next/image";
import TypeWriter from "./components/TypeWriter";
import { Metadata } from "next";
import { template } from "./helpers/title-helper";

export const metadata: Metadata = {
  title: template.replace("%s", "Home"),
};

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-between">
      <div className="w-full space-y-4 grid md:grid-cols-2 grid-cols-1">
        <div className="space-y-4">
          {/* <div className=" text-justify md:w-4/6 w-4/6 mx-auto text-center text-3xl text-blue-700">
            Parfait AHOUANTO
          </div> */}
          <div className="text-4xl text-left p-8 w-full h-28 text-gray-600">
            <TypeWriter content={"Hi! I'm Parfait AHOUANTO <br/>I'm Fullstack developer"} /> 
          
          </div>

          <p className="text-justify text-gray-600 w-full md:w-full mx-auto text-md p-8">
            Hardworking and passionate about information’s systems, my
            professional career has allowed me to acquire enough experience in
            the implementation and development of information’s systems.
          </p>
        </div>
        <div className="md:w-1/2 p-2 w-full mx-auto mt-12 relative h-64">
          <div className="absolute  top-0 left-4 bg-gray-600 h-16 w-16 shadow-md rounded-md"></div>
          <div className="absolute animate-pulse bottom-0 right-4 shadow-md bg-gray-500 h-16 w-16 rounded-md"></div>
        </div>
      </div>
    </main>
  );
}
