import Image from "next/image";
import { ServiceType } from "../utils/types";

export default function ServiceCard(props: ServiceType) {
  return (
    <>
      <div className="inline-block md:inline-flex justify-center space-x-2">
        <div className="w-full  bg-slate-600  p-4 space-y-3 flex flex-col rounded-md">
          <Image
            src={props.imageSrc}
            alt={props.serviceName + "_img"}
            width={40}
            height={40}
            className="static mx-2 my-2 z-50 rounded-full w-16 h-16"
          />
          <span className="text-md text-slate-300"> {props.serviceName}</span>
        </div>
      </div>
    </>
  );
}
