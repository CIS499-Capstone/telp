import Form from '@/app/ui/teachers/details';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Table from '@/app/ui/teachers/schedule';
import { fetchTeacherById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Details',
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
            label: 'Details',
            href: `/dashboard/teachers/${id}/details`,
            active: true,
          },
        ]}
      />
      <Form teacher={teacher}/>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        Schedule
        <Table id={teacher.userid} />
      </div>
    </main>
  );
}