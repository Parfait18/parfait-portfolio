import { Metadata } from "next";
import { template } from "../utils/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: template.replace("%s", "Services"),
};

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-3 p-24">
      <h1> This is services page </h1>
      <Image
        src="/images/construct.gif"
        alt="construct gif"
        width={500}
        height={500}
        className="static mx-2 w-50 h-50"
      />
    </main>
  );
}
