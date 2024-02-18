type BadgeType = {
  skill: string;
};

export default function SkillBadge(props: BadgeType) {
  return (
    <>
      <span className="m-0.5 border shadow-inner w-auto h-7 opacity-75 hover:opacity-90 text-center text-slate-50  rounded-full bg-slate-500  border-slate-50 px-2 py-1">
        {props.skill}
      </span>
    </>
  );
}
