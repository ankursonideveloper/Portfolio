function Section(props) {
  let Icon = props.Icon;
  let sectionName = props.sectionName;

  return (
    <div className="flex flex-col mt-3">
      <div className="flex ml-3 justify-start items-center gap-1 ">
        <Icon className="text-xl size-5"></Icon>
        <span className="font-semibold text-xl">{sectionName}</span>
      </div>
      <div className="ml-3">{props.children}</div>
    </div>
  );
}
export default Section;
