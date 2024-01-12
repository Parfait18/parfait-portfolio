"use client";

import Image from "next/image";
import { redirecTo } from "@/app/utils/helpers";

export default function GithubIcon() {
  return (
    <Image
      onClick={() => redirecTo("https://github.com/Parfait18")}
      src="/icons/github.svg"
      alt="github_img"
      width={30}
      height={30}
      className="static mx-2 w-46 h-46  hover:cursor-pointer rounded-full"
    />
  );
}
