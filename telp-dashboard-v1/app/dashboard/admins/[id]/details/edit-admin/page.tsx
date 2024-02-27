import Form from '@/app/ui/admins/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchAdminById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const admin = await fetchAdminById(id);
  
  if (!admin) {
    notFound();
  }
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admins', href: '/dashboard/admins' },
          {
            label: 'Edit Info',
            href: `/dashboard/admins/${id}/details/edit-admin`,
            active: true,
          },
        ]}
      />
      <Form admin={admin}/>
    </main>
  );
}