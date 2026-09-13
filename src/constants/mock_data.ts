import { Employee } from "@/types";

export const MOCK_EMPLOYEES: Employee[] = [
  // Engineering
  {
    id: 1,
    name: "John Smith",
    department: "Engineering",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Maria Santos",
    department: "Engineering",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Kevin Lee",
    department: "Engineering",
    createdAt: new Date().toISOString(),
  },

  // Marketing
  {
    id: 4,
    name: "Sarah Johnson",
    department: "Marketing",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Daniel Cruz",
    department: "Marketing",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    name: "Emily Garcia",
    department: "Marketing",
    createdAt: new Date().toISOString(),
  },

  // Human Resources
  {
    id: 7,
    name: "Michael Brown",
    department: "Human Resources",
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    name: "Anna Reyes",
    department: "Human Resources",
    createdAt: new Date().toISOString(),
  },
  {
    id: 9,
    name: "James Wilson",
    department: "Human Resources",
    createdAt: new Date().toISOString(),
  },
];