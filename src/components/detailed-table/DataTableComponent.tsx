import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { eduation_employment_data } from "@prisma/client";

const columnHelper = createColumnHelper<eduation_employment_data>();

const columns = [
  // columnHelper.accessor("anzsco_code", {
  //   cell: (info) => info.getValue(),
  //   header: "ANZSCO Code",
  // }),
  columnHelper.accessor("occupation", {
    cell: (info) => info.getValue(),
    header: "Occupation",
  }),
  columnHelper.accessor("graduate", {
    cell: (info) => info.getValue(),
    header: "Graduate",
  }),
  columnHelper.accessor("bachelor_degree", {
    cell: (info) => info.getValue(),
    header: "Bachelor Degree",
  }),
  columnHelper.accessor("diploma", {
    cell: (info) => info.getValue(),
    header: "Diploma",
  }),
  columnHelper.accessor("certificate_iii_iv", {
    cell: (info) => info.getValue(),
    header: "Certificate III/IV",
  }),
  columnHelper.accessor("year_xii", {
    cell: (info) => info.getValue(),
    header: "Year 12",
  }),
  columnHelper.accessor("year_xi", {
    cell: (info) => info.getValue(),
    header: "Year 11",
  }),
  columnHelper.accessor("year_x_and_below", {
    cell: (info) => info.getValue(),
    header: "Year 10 and below",
  }),
];

export default function DataTableComponent({
  allTableData,
}: {
  allTableData: eduation_employment_data[];
}) {

  const [currentTableData, setCurrentTableData] = React.useState(
    allTableData
  );

  




  return <DataTable columns={columns} data={currentTableData} />;
}
