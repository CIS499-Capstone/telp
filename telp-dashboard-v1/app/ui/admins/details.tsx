'use client';

import Image from 'next/image';
import { 
  AdminForm 
} from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { UpdateAdmin, DeleteAdmin } from './buttons';

export default function ViewAdminForm({
  admin
}: {
  admin: AdminForm;
}) {
  

  return (
    <div>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Teacher Header */}
        <div className="mb-2 flex items-center">
          <Image
            src={admin.image_url}
            className="mr-2 rounded-full"
            width={48}
            height={48}
            alt={`${admin.name}'s profile picture`}
          />
          <label htmlFor="teacher" className="mb-2 block text-lg font-medium">
            {admin.name}
          </label>
        </div>

        {/* Teacher Email */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Email: 
          </label>
          <div className="relative">
            {admin.email}
          </div>
        </div>

        {/* Teacher Phone Number */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Phone Number: 
          </label>
          <div className="relative">
            +1 (123) 456-7890
            {/* {teacher.number} */}
          </div>
        </div>

        {/* Teacher Password */}
        {/* <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Password: 
          </label>
          <div className="relative">
            {teacher.password}
          </div>
        </div> */}

        {/* Teacher Role */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            Role: 
          </label>
          <div className="relative">
            {admin.role}
          </div>
        </div>

        {/* Teacher ID */}
        <div className="mb-4">
          <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
            ID Number: 
          </label>
          <div className="relative">
            {admin.id}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <UpdateAdmin id={admin.id} />
          <DeleteAdmin id={admin.id} /> 
        </div>
      </div>
    </div>
  );
}
