import { ExperienceType } from "../utils/types";
import SkillBadge from "./SkillBadge";

export default function Experience(props: ExperienceType) {
  return (
    <>
      <div className="inline-block md:inline-flex justify-center space-x-2">
        <div className="p-2 w-full md:w-2/6 inline-flex space-x-2">
          <span className="w-6 mt-2 bg-blue-500 h-1.5 text-right rounded-md"></span>
          <span className="text-md text-blue-500 fond-medium">
            {props.startDate}
          </span>
          <span className="text-md text-blue-500 fond-medium">-</span>
          <span className="text-md text-blue-500 fond-medium">
            {props.endDate ?? "Today"}
          </span>
        </div>
        <div className="w-full md:w-4/6  bg-gray-600 p-4 space-y-3 flex flex-col rounded-md">
          <span className="text-md text-gray-300"> {props.role}</span>
          <span className="text-xl text-blue-500 fond-medium">
            {props.company}
          </span>
          {props.description && (
            <p className="text-sm font-light text-gray-50 text-justify">
              {props.description}
            </p>
          )}

          <p className="text-sm font-light text-gray-50 flex flex-wrap ">
            <span className="font-medium m-2">Stack:</span>
            {props.skills.map((e, i) => (
              <SkillBadge key={i} skill={e} />
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
