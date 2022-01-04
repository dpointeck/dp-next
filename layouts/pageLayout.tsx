
export default function PageLayout(props:any) {
  return (
    <div className="layout-page container mx-auto p-4 md:px-10">
      {props.children}
    </div>
  );
}
