import { Metadata } from "next";
import { template } from "../constants/title-helper";
import Experience from "../components/Experience";

export const metadata: Metadata = {
  title: template.replace("%s", "Resume"),
};

export default function Resume() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Experiences</h1>

      <Experience
        role={"FullStack Dvelopper"}
        company={"Webcoom"}
        description={
          " Anim occaecat velit  ui occaecat amet dolore  ui occaecat amet dolore  ui occaecat amet dolore ui occaecat amet dolore  ui occaecat amet dolore  ui occaecat amet dolore   ui occaecat amet dolore mollit dolor reprehenderit commodo commodo. In exercitation eiusmod qui anim irure tempor consectetur tempor elit incididunt laboris ut."
        }
        skills={[
          "HTML && CSS",
          "Laravel",
          "VueJs",
          "NuxtJs",
          "Taildwin Css",
          "Bootstrap",
          "Django",
        ]}
        startDate={"21/12/2021"}
      />
    </main>
  );
}
