"use client";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function DownloadResume() {
  return (
    <div
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1ifpltkJk94k7fHTjTIFFWwu5leJTi3c1/view?usp=sharing",
          "_target"
        );
      }}
      className=" w-48 py-3 hover:cursor-pointer shadow-md  justify-center text-center border border-blue-500 hover:text-white hover:bg-blue-500 text-blue-500 inline-flex items-center px-2 rounded-md"
    >
      <span> View Resume </span>
      <ArrowDownTrayIcon width={24} className="ml-2" />
    </div>
  );
}
