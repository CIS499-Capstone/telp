import Form from '@/app/ui/admins/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchAdminById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getTeacher } from '@/app/dashboard/page';
 
export const metadata: Metadata = {
  title: 'Edit Admin',
};

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getTeacher();
  const id = params.id;
  const admin = await fetchAdminById(id);
  
  if (!admin) {
    notFound();
  }
  
  return (
    user[0].role === 'teacher' ? (
      <div className="w-full">
        <div className="w-full">
          <h1>Its a Teacher Dawg. They cant view admin level stuff</h1>
        </div>
      </div>
    ) : (
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
    )
  );
}