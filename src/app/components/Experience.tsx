import { ExperienceType } from "../utils/types";
import SkillBadge from "./SkillBadge";

export default function Experience(props: ExperienceType) {
  return (
    <>
      <div className="inline-block md:inline-flex justify-center space-x-2 shadow-sm p-2 rounded-md border border-slate-300 bg-slate-100">
        <div className="w-full  space-y-3 flex flex-col ">
          <div className=" w-full p-2 inline-flex space-x-2">
            <span className="w-6 mt-2 bg-blue-500 h-1.5 text-right rounded-md"></span>
            <span className="text-md text-blue-600 fond-medium">
              {props.startDate}
            </span>
            <span className="text-md text-blue-600 fond-medium">-</span>
            <span className="text-md text-blue-600 fond-medium">
              {props.endDate ?? "Today"}
            </span>
          </div>
          <span className="text-md m-2  text-slate-500"> {props.role}</span>
          <span className="text-xl m-2 text-blue-600 text-opacity-90 fond-medium">
            {props.company}
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
