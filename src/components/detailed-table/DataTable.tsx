import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Flex,
  Stack,
  Text,
  ButtonGroup,
  Button,
  Input,
  Spacer,
  Heading,
  Select,
  Container,
  HStack,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Column,
  Table as ReactTable,
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};

export function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    state: {
      sorting,
    },
  });

  const occupationColumn = table
    .getHeaderGroups()[0]
    ?.headers.find((header) => header.id === "occupation")?.column;
  // console.log(occupationColumn);
  console.log(table.getRowModel().rows)

  return (
    <Stack direction={"column"}>
      <Flex direction={"row"}>
        <Spacer />
        <Filter
          maxWidth={{ base: "80vw", md: "40vw" }}
          column={occupationColumn!}
          table={table}
          placeholder={'Search "Occupation\'s Name" here...'}
        />
      </Flex>
      <Container overflow={"auto"} maxWidth={"inherit"}>
        <Table>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  const meta: any = header.column.columnDef.meta;
                  return (
                    <Th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      isNumeric={meta?.isNumeric}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      <chakra.span pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "desc" ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row, index) => (
              <Tr key={row.id} backgroundColor={ index % 2 == 0 ? "#F0F8FF" : "white"}>
                {row.getVisibleCells().map((cell) => {
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  const meta: any = cell.column.columnDef.meta;
                  return (
                    <Td key={cell.id} isNumeric={meta?.isNumeric}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}{" "}
                      {cell.column.id === 'occupation' ? "" : "%"}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
      <Flex direction={{ base: "column", md: "row" }}>
        <ButtonGroup colorScheme={"blue"}>
          <Button
            onClick={() => table.setPageIndex(0)}
            isDisabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Button>
          <Button
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </Button>
          <Button variant={"outline"} colorScheme={"blue"}>
            {table.getState().pagination.pageIndex + 1} {" / "}
            {table.getPageCount()}
          </Button>
          <Button
            onClick={() => table.nextPage()}
            isDisabled={!table.getCanNextPage()}
          >
            {">"}
          </Button>
          <Button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            isDisabled={!table.getCanNextPage()}
          >
            {">>"}
          </Button>
        </ButtonGroup>
        <Spacer />
        <HStack>
          <Select
            value={table.getState().pagination.pageSize}
            maxWidth={"120px"}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>

          <Heading paddingX={2} alignSelf={"center"} fontSize={"md"}>
            Skip to:
          </Heading>
          <Input
            type={"number"}
            maxWidth={"60px"}
            // defaultValue={table.getState().pagination.pageIndex + 1}
            placeholder={"" + (table.getState().pagination.pageIndex + 1)}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          ></Input>
        </HStack>
      </Flex>
    </Stack>
  );
}

type FilterType = {
  column: Column<any, any>;
  table: ReactTable<any>;
} & ChakraInputProps;

const Filter = ({ column, table, ...props }: FilterType) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();
  return typeof firstValue === "number" ? (
    <Flex direction={"row"}>
      <Input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
      />
      <Spacer />
      <Input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
      />
    </Flex>
  ) : (
    <Input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      // placeholder={`Search...`}
      {...props}
    />
  );
};
