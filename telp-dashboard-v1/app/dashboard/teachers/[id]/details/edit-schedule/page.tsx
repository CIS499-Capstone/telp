import Form from '@/app/ui/schedule/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchTeacherById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getTeacher } from '@/app/dashboard/page';
import { fetchScheduleById } from '@/app/lib/data';
 
export const metadata: Metadata = {
  title: 'Edit Schedule',
};

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getTeacher();
  const id = params.id;
  const teacher = await fetchTeacherById(id);
  const schedule = await fetchScheduleById(id);
  
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
              label: 'Edit Info',
              href: `/dashboard/teachers/${id}/details/edit-teacher`,
              active: true,
            },
          ]}
        />
        <Form teacher={teacher} schedule1={schedule[0]} schedule2={schedule[1]} schedule3={schedule[2]} schedule4={schedule[3]} schedule5={schedule[4]} />
      </main>
    )
  );
}