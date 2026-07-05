import { useState } from "react";

export default function App() {
  const employees = [
    {
      id: 1,
      name: "Ali Khan",
      role: "Frontend Developer",
      department: "IT",
      email: "ali@example.com",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      role: "Backend Developer",
      department: "IT",
      email: "sara@example.com",
    },
    {
      id: 3,
      name: "Usman Tariq",
      role: "UI/UX Designer",
      department: "Design",
      email: "usman@example.com",
    },
    {
      id: 4,
      name: "Ayesha Malik",
      role: "HR Manager",
      department: "HR",
      email: "ayesha@example.com",
    },
    {
      id: 5,
      name: "Bilal Hassan",
      role: "Marketing Executive",
      department: "Marketing",
      email: "bilal@example.com",
    },
    {
      id: 6,
      name: "Hina Noor",
      role: "Graphic Designer",
      department: "Design",
      email: "hina@example.com",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-10">
          Employee Directory
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by Name or Role..."
          className="w-full p-4 text-lg rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  {employee.name}
                </h2>

                <p className="text-xl mb-3">
                  <span className="font-bold">Role:</span> {employee.role}
                </p>

                <p className="text-xl mb-3">
                  <span className="font-bold">Department:</span>{" "}
                  {employee.department}
                </p>

                <p className="text-xl">
                  <span className="font-bold">Email:</span>{" "}
                  {employee.email}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-2xl font-semibold text-red-500">
              No Employee Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}