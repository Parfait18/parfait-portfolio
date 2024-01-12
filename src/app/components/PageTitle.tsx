type TitlePageType = {
  title: string;
};

export default function PageTitle(props: TitlePageType) {
  return (
    <div className="m-2 w-46 h-46  inline-flex p-3   rounded-md">
      <span className="text-blue-600 text-2xl font-bold">{"<"}</span>{" "}
      <span className="text-2xl text-slate-600 font-bold">{props.title} </span>{" "}
      <span className="text-blue-600 text-2xl font-bold">{"/>"} </span>
    </div>
  );
}
