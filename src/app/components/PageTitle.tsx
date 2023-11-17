type TitlePageType = {
  title: string;
};

export default function PageTitle(props: TitlePageType) {
  return (
    <div className="m-2 shadow-sm w-46 h-46  inline-flex p-3 md:bg-gray-600 bg-white rounded-md">
      <span className="text-blue-500 text-2xl font-bold">{"<"}</span>{" "}
      <span className="md:text-white text-2xl text-gray-600 font-bold">
        {props.title}{" "}
      </span>{" "}
      <span className="text-blue-500 text-2xl font-bold">{"/>"} </span>
    </div>
  );
}
