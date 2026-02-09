import { useEffect, useState } from "react";
import axios from "axios";
const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('adminToken');
  // Fetch students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
        
      const res = await axios.get("http://localhost:5000/api/students/get",{headers: {
    'Authorization': `Bearer ${token}`} 
  });
//   console.log(res.data.data);
      setStudents(res.data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete student
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/students/delete/${id}`, {headers: {
    'Authorization': `Bearer ${token}`} 
  });

      // Remove deleted student from UI
      setStudents(students.filter((s) => s.students_id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading students...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Student List
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No students found
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.students_id} className="text-center">
                  <td className="border px-4 py-2">
                    {student.students_id}
                  </td>
                  <td className="border px-4 py-2">
                    {student.name}
                  </td>
                  <td className="border px-4 py-2">
                    {student.email}
                  </td>
                  <td className="border px-4 py-2">
                    {student.phone}
                  </td>
                  <td className="border px-4 py-2 capitalize">
                    {student.gender}
                  </td>
                  <td className="border px-4 py-2">
                    {student.description}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(student.created_at).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() =>
                        handleDelete(student.students_id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
