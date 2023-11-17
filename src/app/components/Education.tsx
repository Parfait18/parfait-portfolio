import { EducationType } from "../utils/types";
import SkillBadge from "./SkillBadge";

export default function Education(props: EducationType) {
  return (
    <>
      <div className="inline-block md:inline-flex justify-center space-x-2 ">
        <div className="w-full  bg-slate-600  p-2 space-y-2 flex flex-col rounded-md">
          <div className="w-full p-2 space-x-3 inline-flex">
            <span className="text-md text-slate-300"> {props.level}</span>
            <span className="text-md text-slate-300"> |</span>
            <span className="text-md text-blue-500 fond-medium">
              {props.etablishement}
            </span>
          </div>
          <div className="p-2 w-full inline-flex space-x-2">
            <span className="text-sm font-semibold text-slate-400 fond-medium">
              {props.startDate}
            </span>
            <span className="text-sm font-semibold text-slate-400 fond-medium">
              -
            </span>
            <span className="text-sm font-semibold text-slate-400 fond-medium">
              {props.endDate ?? "Today"}
            </span>
          </div>
          <div className="w-full p-2 space-x-3 inline-flex">
            {props.speciality && (
              <p className="text-sm font-light text-slate-50 text-justify">
                {props.speciality}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
