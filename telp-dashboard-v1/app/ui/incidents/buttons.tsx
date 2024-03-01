import {
  EyeIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export function ViewIncident({ incidentid }: { incidentid: string }) {
  return (
    <Link
      href={`/dashboard/teachers/${incidentid}/incidents/edit-incident`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}
