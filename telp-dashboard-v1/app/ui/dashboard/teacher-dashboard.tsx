import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { UserIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { fetchTeacherIncidents } from '@/app/lib/data';

export default async function TeacherDashboard({ id }: { id: number }) {
  // should have a list of all incidents on the home nav-link
  const incidents = await fetchTeacherIncidents(id);

  return (
    <div className="flex w-full flex-col gap-4 p-4 md:col-span-8">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Your Incidents
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
        {incidents.map((incident, i) => (
          <div
            key={i}
            className="w-full cursor-pointer rounded-lg bg-gray-100 p-4 hover:bg-blue-100"
          >
            <h3 className="font-bold italic underline">{incident.name}</h3>
            <p className="text-gray-700">
              {incident.comment}
              Made at {new Date(incident.time).toLocaleString()}
            </p>
            {/* Add edit functionality here */}
          </div>
        ))}
      </div>
    </div>
  );
}
