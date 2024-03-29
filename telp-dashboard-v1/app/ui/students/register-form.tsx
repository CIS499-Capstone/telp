'use client';

import Link from 'next/link';
import {
  IdentificationIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { registerStudent } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(registerStudent, initialState);

  
  return (
    <form 
      action={dispatch}
      aria-describedby="form-error"
    >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Student ID */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Enter ID
          </label>
          <div className="relative">
            <input
              id="id"
              name="id"
              type="number"
              placeholder="Enter ID number here..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="id-error"
            />
            <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="id-error" aria-live="polite" aria-atomic="true">
            {state.errors?.id &&
              state.errors.id.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Student Name */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Enter Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name here..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="name-error"
            />
            <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div id="form-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">
            {state.message}
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/students"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Register Student</Button>
      </div>
    </form>
  );
}
