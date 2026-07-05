import { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = () => {
    if (!name.trim() || !course.trim()) {
      alert("Please enter all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      course,
    };

    setStudents([...students, newStudent]);
    setName("");
    setCourse("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-10">
          Student Management System
        </h1>

        {/* Form */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Enter Student Name"
            className="border p-3 rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Course"
            className="border p-3 rounded w-full"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button
            onClick={addStudent}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
          >
            Add Student
          </button>
        </div>

        {/* Student List */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Student List
        </h2>

        {students.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            No students added yet.
          </p>
        ) : (
          <div className="space-y-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex justify-between items-center border rounded-lg p-4 shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {student.name}
                  </h3>
                  <p className="text-gray-600">
                    Course: {student.course}
                  </p>
                </div>

                <button
                  onClick={() => deleteStudent(student.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}