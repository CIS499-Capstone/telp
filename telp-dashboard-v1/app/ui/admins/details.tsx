'use client';

import Image from 'next/image';
import { 
  AdminForm 
} from '@/app/lib/definitions';
import { UpdateAdmin, DeleteAdmin } from './buttons';

export default function ViewAdminForm({
  admin
}: {
  admin: AdminForm;
}) {
  

  return (
    <div>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Admin Header */}
        <div className="mb-2 flex items-center">
          <Image
            src={admin.image_url}
            className="mr-2 rounded-full"
            width={48}
            height={48}
            alt={`${admin.name}'s profile picture`}
          />
          <label htmlFor="admin" className="mb-2 block text-lg font-medium">
            {admin.name}
          </label>
        </div>

        {/* Admin Email */}
        <div className="mb-4">
          <label htmlFor="admin" className="mb-2 block text-sm font-medium">
            Email: 
          </label>
          <div className="relative">
            {admin.email}
          </div>
        </div>

        {/* Admin Phone Number */}
        <div className="mb-4">
          <label htmlFor="admin" className="mb-2 block text-sm font-medium">
            Phone Number: 
          </label>
          <div className="relative">
            +1 (123) 456-7890
            {/* {admin.number} */}
          </div>
        </div>

        {/* Admin Password */}
        {/* <div className="mb-4">
          <label htmlFor="admin" className="mb-2 block text-sm font-medium">
            Password: 
          </label>
          <div className="relative">
            {admin.password}
          </div>
        </div> */}

        {/* Admin Role */}
        <div className="mb-4">
          <label htmlFor="admin" className="mb-2 block text-sm font-medium">
            Role: 
          </label>
          <div className="relative">
            {admin.role}
          </div>
        </div>

        {/* Admin ID */}
        <div className="mb-4">
          <label htmlFor="admin" className="mb-2 block text-sm font-medium">
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
