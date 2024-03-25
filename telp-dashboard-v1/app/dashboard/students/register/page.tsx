import Form from '@/app/ui/students/register-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { Metadata } from 'next';
import { getTeacher } from '@/app/dashboard/page';
 
export const metadata: Metadata = {
  title: 'Register Admin',
};

export default async function Page() {
  const user = await getTeacher();
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
            { label: 'Students', href: '/dashboard/students' },
            {
              label: 'Register Student',
              href: '/dashboard/students/register',
              active: true,
            },
          ]}
        />
        <Form/>
      </main>
    )
  );
}