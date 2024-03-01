import Form from '@/app/ui/teachers/details';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Table from '@/app/ui/teachers/schedule';
import { fetchTeacherById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getTeacher } from '@/app/dashboard/page';
 
export const metadata: Metadata = {
  title: 'Details',
};

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getTeacher();
  const id = params.id;
  const teacher = await fetchTeacherById(id);
  
  if (!teacher) {
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
          <Table id={teacher.id} />
        </div>
      </main>
    )
  );
}