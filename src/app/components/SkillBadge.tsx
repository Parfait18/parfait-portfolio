type BadgeType = {
  skill: string;
};

export default function SkillBadge(props: BadgeType) {
  return (
    <>
      <span className="m-1 border w-20 text-center shadow-sm text-blue-500 rounded-full bg-blue-50  border-blue-200 px-3 py-1">
        {props.skill}
      </span>
    </>
  );
}
