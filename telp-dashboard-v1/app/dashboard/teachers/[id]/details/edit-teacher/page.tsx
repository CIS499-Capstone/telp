import Form from '@/app/ui/teachers/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchTeacherById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const teacher = await fetchTeacherById(id);
  
  if (!teacher) {
    notFound();
  }
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Teachers', href: '/dashboard/teachers' },
          {
            label: 'Edit Info',
            href: `/dashboard/teachers/${id}/details/edit-teacher`,
            active: true,
          },
        ]}
      />
      <Form teacher={teacher}/>
    </main>
  );
}