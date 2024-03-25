import Image from 'next/image';
import { ViewTeacher } from '@/app/ui/teachers/buttons';
import { fetchFilteredStudents } from '@/app/lib/data';

export default async function StudentsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const students = await fetchFilteredStudents(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Student ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Student Name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {students?.map((student, i) => (
                <tr
                  key={i}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {student.studentId !== null &&
                    student.studentId !== undefined
                      ? student.studentId
                      : 'xxxx'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {student.name !== null && student.name !== undefined
                      ? student.name
                      : 'xxxx xxxx'}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <ViewIncident incidentid={student.incidentid} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
