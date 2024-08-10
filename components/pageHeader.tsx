export default function PageHeader(props: any) {
  return (
    <div>
      <h1>
        <span>{props.children}</span>
      </h1>
    </div>
  );
}
