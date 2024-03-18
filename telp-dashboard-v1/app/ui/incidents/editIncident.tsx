'use client';

import { IncidentForm } from '@/app/lib/definitions';
import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateIncident } from '@/app/lib/actions';

export default function EditIncidentForm({
  incident,
}: {
  incident: IncidentForm;
}) {
  //should updateIncidentWithId
  const updateIncidentWithId = updateIncident.bind(null, incident.incidentid); //pass incident.studentid too

  return (
    <form action={updateIncidentWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4 flex flex-col items-start">
          {' '}
          {/* Changed flex to flex-col */}
          <div className="flex items-center">
            {' '}
            {/* Inner flex container */}
            <label htmlFor="comment" className="text-l mb-2 block font-medium">
              Edit Comment
            </label>
            <PencilIcon className="ml-2 w-6" /> {/* Added ml-2 for margin */}
          </div>
          <textarea
            defaultValue={incident.comment}
            id="comment"
            name="comment"
            placeholder="Enter your comment here..."
            className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-500 outline-none"
          />
        </div>
        {/* <div className="mb-4 flex flex-col items-start">
          {' '}
          <div className="flex items-center">
            {' '}
            <label htmlFor="comment" className="text-l mb-2 block font-medium">
              Edit Student ID
            </label>
            <PencilIcon className="ml-2 w-6" /> 
          </div>
          <textarea
            defaultValue={incident.student_id}
            id="studentid"
            name="studentid"
            placeholder="Enter the studentid here..."
            className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-500 outline-none"
          />
        </div> */}

        {/* <div className="mb-4 flex flex-col items-start">
          {' '}
          <div className="flex items-center">
            {' '}
            <label htmlFor="comment" className="text-l mb-2 block font-medium">
              Edit Student Name
            </label>
            <PencilIcon className="ml-2 w-6" />
          </div>
          <textarea
            defaultValue={incident.name}
            id="name"
            name="name"
            placeholder="Enter the Student Name here..."
            className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-500 outline-none"
          />
        </div> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/dashboard`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Incident</Button>
      </div>
    </form>
  );
}
