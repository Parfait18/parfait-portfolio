import { EducationType } from "../utils/types";
import SkillBadge from "./SkillBadge";

export default function Education(props: EducationType) {
  return (
    <>
      <div className="inline-block md:inline-flex justify-center space-x-2 shadow-sm rounded-md bg-slate-100 border border-slate-300 ">
        <div className="w-full p-2 space-y-2 flex flex-col ">
          <div className="w-full p-2 space-y-2 flex flex-col">
            <span className="text-md text-slate-500"> {props.level}</span>
            {/* <span className="text-md text-slate-300"> |</span> */}
            <span className="text-md text-blue-600 text-opacity-90 fond-semibold">
              {props.etablishement}
            </span>
          </div>
          <div className="w-full p-2 space-x-3 inline-flex">
            {props.speciality && (
              <p className="text-sm font-medium text-slate-600 text- text-justify">
                {props.speciality}
              </p>
            )}
          </div>
          <div className="p-2 w-full inline-flex space-x-2">
            <span className="text-sm font-semibold text-slate-500 ">
              {props.startDate}
            </span>
            <span className="text-sm font-semibold text-slate-500 ">-</span>
            <span className="text-sm font-semibold text-slate-500 ">
              {props.endDate ?? "Today"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
