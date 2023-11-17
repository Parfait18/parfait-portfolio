type BadgeType = {
  skill: string;
};

export default function SkillBadge(props: BadgeType) {
  return (
    <>
      <span className="m-1 border shadow-inner w-auto h-7 text-center bg-opacity-5 text-slate-50  rounded-full bg-slate-600  border-slate-50 px-2 py-1">
        {props.skill}
      </span>
    </>
  );
}
