import { prisma } from "@/prisma";

async function getAllTeachers() {
  const teachers = await prisma.teacher.findMany({
    include: {
      department: true,
    },
  });
  return teachers;
}
export default async function Teachers() {
  const teachers = await getAllTeachers();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {teachers?.map((item) => (
            <tr className=" bg-base-200" key={item.id}>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.salary}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
