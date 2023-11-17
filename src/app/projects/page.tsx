import { Metadata } from "next";
import { template } from "../utils/constants";

export const metadata: Metadata = {
  title: template.replace("%s", "Projects"),
};

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> This is projects page </h1>
    </main>
  );
}
