import dynamic from "next/dynamic";

const TableauReactMap = dynamic(() => import("./TableauMap"), { ssr: false });

export default function DiagramMap() {
  return (
    <TableauReactMap />
  );
}