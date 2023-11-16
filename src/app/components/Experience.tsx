import SkillBadge from "./SkillBadge";

type ExperienceType = {
  role: string;
  company: string;
  description: string;
  skills: string[];
  startDate: string;
  endDate?: string;
};

export default function Experience(props: ExperienceType) {
  return (
    <>
      <div className="border-l-2 bg-gray-100 border-l-gray-300 p-4 space-y-3 flex flex-col">
        <span className="text-md text-gray-500"> {props.role}</span>
        <span className="text-xl text-blue-500 font-bold">{props.company}</span>
        <p className="text-sm font-light text-gray-500 text-justify">
          {props.description}
        </p>
        <p className="text-sm font-light text-gray-600 text-justify ">
          <span className="font-medium m-2">Stack:</span>

          {props.skills.map((e, i) => (
            <SkillBadge key={i} skill={e} />
          ))}
        </p>
      </div>
    </>
  );
}
