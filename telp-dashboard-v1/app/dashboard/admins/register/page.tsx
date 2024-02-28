import Form from '@/app/ui/admins/register-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Register Admin',
};

export default async function Page() {
   return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admins', href: '/dashboard/admins' },
          {
            label: 'Register Admin',
            href: '/dashboard/admins/register',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}