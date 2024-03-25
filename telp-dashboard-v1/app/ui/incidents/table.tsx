import Image from 'next/image';
import { ViewTeacher } from '@/app/ui/teachers/buttons';
import { fetchFilteredIncidents } from '@/app/lib/data';
import { ViewIncident } from './buttons';

export default async function IncidentsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const incidents = await fetchFilteredIncidents(query, currentPage);

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
                <th scope="col" className="px-3 py-5 font-medium">
                  Comment
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {incidents?.map((incident, i) => (
                <tr
                  key={i}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {incident.studentId !== null &&
                    incident.studentId !== undefined
                      ? incident.studentId
                      : 'xxxx'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {incident.name !== null && incident.name !== undefined
                      ? incident.name
                      : 'xxxx xxxx'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {incident.comment !== null && incident.comment !== undefined
                      ? incident.comment
                      : '_ _ _ _  _ _ _ _'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {new Date(incident.time).toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewIncident incidentid={incident.incidentid} />
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
