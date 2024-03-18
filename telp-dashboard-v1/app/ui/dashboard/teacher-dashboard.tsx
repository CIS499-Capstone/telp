import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { UserIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { ViewIncident } from '../incidents/buttons';
import { fetchTeacherIncidents } from '@/app/lib/data';

export default async function TeacherDashboard({ id }: { id: string }) {
  // should have a list of all incidents on the home nav-link
  const incidents = await fetchTeacherIncidents(id);

  return (
    <div className="flex w-full flex-col gap-4 p-4 md:col-span-8">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Your Incidents
      </h1>
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
  );
}
