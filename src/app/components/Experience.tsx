import { BuildingOffice2Icon, CalendarIcon } from "@heroicons/react/20/solid";
import { ExperienceType } from "../utils/types";
import SkillBadge from "./SkillBadge";

export default function Experience(props: ExperienceType) {
  return (
    <>
      <div className="inline-block shadow-md md:inline-flex justify-center space-x-2 hover:shadow-sm p-2 rounded-md border border-slate-300 bg-white">
        <div className="w-full  space-y-1 flex flex-col ">
          <div className="w-full p-2 inline-flex space-x-2">
            <span className="w-4 mt-2  text-blue-600 md:mt-0 flex items-center justify-center h-full">
              <CalendarIcon />
            </span>
            <span className="text-md text-blue-600 fond-medium">
              {props.startDate}
            </span>
            <span className="text-md text-blue-600 fond-medium">-</span>
            <span className="text-md text-blue-600 fond-medium">
              {props.endDate ?? "Today"}
            </span>
          </div>
          <span className="text-md m-2  text-slate-500"> {props.role}</span>

          <span className="px-2 inline-flex space-x-2">
            <span className=" w-4 text-blue-600 mt-2 md:mt-0 flex items-center justify-center h-full ">
              <BuildingOffice2Icon />
            </span>
            <span className="text-md m-2 text-blue-600 text-opacity-90 fond-medium">
              {props.company}
            </span>
          </span>

          {props.description && (
            <p className="text-sm font-light text-slate-50 text-justify bg-red-500">
              {props.description}
            </p>
          )}

          <p className="text-sm font-light text-slate-50 flex flex-wrap ">
            {/* <span className="font-medium m-2">Stack:</span> */}
            {props.skills.map((e, i) => (
              <SkillBadge key={i} skill={e} />
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
