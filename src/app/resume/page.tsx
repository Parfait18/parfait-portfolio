import { Metadata } from "next";
import { template, experiences } from "../utils/constants";
import Experience from "../components/Experience";
import PageTitle from "../components/PageTitle";
import { ExperienceType } from "../utils/types";

export const metadata: Metadata = {
  title: template.replace("%s", "Resume"),
};

export default function Resume() {
  console.log(experiences);

  return (
    <main className="px-8 w-full items-center pt-24 md:pt-4">
      <div className="text-center p-4">
        <PageTitle title="Experiences" />
      </div>

      <div className="md:w-9/12 w-full flex flex-col">
        {experiences.map((element: ExperienceType, index) => (
          <>
            <Experience
              key={index}
              role={element.role}
              company={element.company}
              endDate={element.endDate}
              description={element.description}
              skills={element.skills}
              startDate={element.startDate}
            />
            <br />
          </>
        ))}
      </div>
    </main>
  );
}
