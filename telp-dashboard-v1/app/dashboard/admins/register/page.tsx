import Form from '@/app/ui/teachers/register-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Register Teacher',
};

export default async function Page() {
   return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Teachers', href: '/dashboard/teachers' },
          {
            label: 'Register Teacher',
            href: '/dashboard/teachers/register',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}