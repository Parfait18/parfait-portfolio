import { Metadata } from "next";
import { template, experiences, educations } from "../utils/constants";
import Experience from "../components/Experience";
import PageTitle from "../components/PageTitle";
import { ExperienceType, EducationType } from "../utils/types";
import Education from "../components/Education";

export const metadata: Metadata = {
  title: template.replace("%s", "Resume"),
};

export default function Resume() {
  return (
    <main className="px-8 w-full items-center pt-24 md:pt-4">
      <div className="text-center my-8 ">
        <PageTitle title="Education" />
      </div>
      {/* Education */}
      <div className="p-2 w-full grid md:grid-cols-3 gap-4">
        {educations.map((element: EducationType, index) => (
          <>
            <Education
              key={index}
              level={element.level}
              etablishement={element.etablishement}
              endDate={element.endDate}
              speciality={element.speciality}
              startDate={element.startDate}
            />
          </>
        ))}
      </div>
      {/* Experience */}
      <div className="text-center my-8">
        <PageTitle title="Experiences" />
      </div>
      <div className="w-full grid md:grid-cols-3 gap-4">
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
          </>
        ))}
      </div>
    </main>
  );
}
