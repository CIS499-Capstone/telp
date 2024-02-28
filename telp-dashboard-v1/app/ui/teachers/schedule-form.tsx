'use client';

import { 
  TeacherForm 
} from '@/app/lib/definitions';
import {
  DocumentTextIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserCircleIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateTeacher } from '@/app/lib/actions';

export default function EditScheduleForm({
  teacher,
}: {
  teacher: TeacherForm;
}) {
  const updateTeacherWithId = updateTeacher.bind(null, teacher.userid);
  

  return (
    <form action={updateTeacherWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Teacher Name */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Enter Name
          </label>
          <div className="relative">
            <input
              defaultValue={teacher.name}
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name here..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Teacher Email */}
        {/* <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Enter Email 
          </label>
          <div className="relative">
            <div className="mt-4 flex items-center justify-between gap-2">
              <input
                defaultValue={teacher.email.split('@')[0]}
                id="email"
                name="email"
                type="text"
                placeholder="Enter Username here..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <label>@school.edu</label>
            </div>
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div> */}

        {/* Teacher Password */}
        {/* <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Enter Password
          </label>
          <div className="relative">
            <input
              defaultValue={teacher.password}
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password here..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div> */}
        
        {/* Teacher Image */}
        {/* <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Enter Avatar
          </label>
          <div className="relative">
            <input
              defaultValue={teacher.image_url}
              id="image_url"
              name="image_url"
              type="text"
              placeholder="Enter Image URL here..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div> */}

        {/* Device ID */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Enter Device Number
          </label>
          <div className="relative">
            <input
              defaultValue={teacher.id}
              id="deviceid"
              name="deviceid"
              type="number"
              placeholder="Enter Device number here..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/dashboard/teachers/${teacher.userid}/details`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Teacher</Button>
      </div>
    </form>
  );
}
