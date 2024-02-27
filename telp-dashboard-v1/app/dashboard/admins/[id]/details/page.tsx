import Form from '@/app/ui/admins/details';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchAdminsById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Details',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const admin = await fetchAdminsById(id);
  
  if (!admin) {
    notFound();
  }
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Teachers', href: '/dashboard/teachers' },
          {
            label: 'Details',
            href: `/dashboard/teachers/${id}/details`,
            active: true,
          },
        ]}
      />
      <Form admin={admin}/>
    </main>
  );
}