import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/admins/table';
import { RegisterAdmin } from '@/app/ui/admins/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { fetchAdminsPages } from '@/app/lib/data';
import { Metadata } from 'next';
import { getTeacher } from '@/app/dashboard/page';

export const metadata: Metadata = {
  title: 'Admins',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const teacher = await getTeacher();
  console.log('importing teacher session variable: ', teacher[0]);
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchAdminsPages(query);

  return (
    <div className="w-full">
      {teacher[0].role === 'teacher' ? (
        <div className="w-full">
          <h1>Its a Teacher Dawg. They cant view admin level stuff</h1>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Admins List</h1>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search admins..." />
            <RegisterAdmin />
          </div>
          <Suspense key={query + currentPage}>
            <Table query={query} currentPage={currentPage} />
          </Suspense>
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      )}
    </div>
  );
}
