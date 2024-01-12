"use client";

import Image from "next/image";
import { redirecTo } from "@/app/utils/helpers";

export default function LinkedinIcon() {
  return (
    <Image
      onClick={() =>
        redirecTo("https://www.linkedin.com/in/parfait-ahouanto-15897a135/")
      }
      src="/icons/linkedin.svg"
      alt="linkedin_img"
      width={30}
      height={30}
      className="static mx-2 w-46 h-46  hover:cursor-pointer rounded-full"
    />
  );
}
