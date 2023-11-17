import { Metadata } from "next";
import { template } from "../utils/constants";

export const metadata: Metadata = {
  title: template.replace("%s", "Services"),
};

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> This is services page </h1>
    </main>
  );
}
