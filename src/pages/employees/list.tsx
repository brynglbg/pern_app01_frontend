import { CreateButton } from "@/components/refine-ui/buttons/create";
import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { Employee } from "@/types";
import { useTable } from "@refinedev/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const EmployeesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departmentFilters =
    selectedDepartment === "all"
      ? []
      : [
          {
            field: "department",
            operator: "eq" as const,
            value: selectedDepartment,
          },
        ];
  const searchFilters = searchQuery
    ? [
        {
          field: "name",
          operator: "constains" as const,
          value: searchQuery,
        },
      ]
    : [];

  const employeeTable = useTable<Employee>({
    columns: useMemo<ColumnDef<Employee>[]>(
      () => [
        {
          id: "id",
          accessorKey: "id",
          size: 100,
          header: () => <p className="font-bold">Employee ID</p>,
          cell: ({ getValue }) => <Badge>{getValue<string>()}</Badge>,
        },
        {
          id: "name",
          accessorKey: "name",
          size: 200,
          header: () => <p className="font-bold">Employee Full Name</p>,
          cell: ({ getValue }) => <span>{getValue<string>()}</span>,
          filterFn: "includesString",
        },
        {
          id: "department",
          accessorKey: "department",
          size: 150,
          header: () => <p className="font-bold">Department</p>,
          cell: ({ getValue }) => (
            <Badge variant="secondary">{getValue<string>()}</Badge>
          ),
        },
        {
          id: "actions",
          accessorKey: "actions",
          size: 50,
          header: () => <p className="font-bold">Actions</p>,
          cell: ({ getValue }) => "",
        },
      ],
      [],
    ),
    refineCoreProps: {
      resource: "employees",
      pagination: { pageSize: 10, mode: "server" },
      filters: {
        permanent: [
          ...departmentFilters,
          ...searchFilters,
        ],
      },
      sorters: {
        initial: [
          {
            field: 'id',
            order: 'desc',
          },
        ],
      },
    },
  });

  return (
    <ListView>
      <Breadcrumb />
      <h1 className="font-bold text-lg">Employees</h1>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <div className="flex items-center">
            <Search className="absolute pl-2" />
            <Input
              type="text"
              placeholder="Search by name ... "
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-12">
          <div className="flex gap-2">
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {DEPARTMENT_OPTIONS.map((department) => (
                  <SelectItem key={department.value} value={department.value}>
                    {department.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <CreateButton />
          </div>
        </div>
      </div>
      <DataTable table={employeeTable} />
    </ListView>
  );
};

export default EmployeesList;
