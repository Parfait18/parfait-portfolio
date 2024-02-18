import { EducationType } from "../utils/types";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

export default function Education(props: EducationType) {
  return (
    <>
      <div className="inline-block md:inline-flex justify-center space-x-2 hover:shadow-sm shadow-md rounded-md bg-white border border-slate-300 ">
        <div className="w-full p-2 space-y-0.5 flex flex-col ">
          <div className="w-full p-2 space-y-2 flex flex-col">
            <span className=" text-slate-500 inline-flex space-x-2">
              <span className=" w-4 mt-3 md:mt-0 flex items-center justify-center h-full ">
                <AcademicCapIcon />
              </span>
              <span className="m-2">{props.level}</span>
            </span>
            <span className=" inline-flex space-x-2">
              <span className=" w-4  text-blue-600 mt-2 md:mt-0 flex items-center justify-center h-full ">
                <BuildingOffice2Icon />
              </span>
              <span className="text-md text-blue-600 text-opacity-90 fond-semibold">
                {props.etablishement}
              </span>
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
            <span className=" w-4 text-slate-500 md:mt-0 flex items-center justify-center h-full ">
              <CalendarIcon />
            </span>
            <span className="text-sm font-semibold flex items-center justify-center text-slate-500 ">
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
