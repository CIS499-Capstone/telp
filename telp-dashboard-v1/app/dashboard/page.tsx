import { Card } from '@/app/ui/dashboard/cards';
import TeacherDashboard from '../ui/dashboard/teacher-dashboard';
import LatestComments from '../ui/dashboard/latest-comments';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData, fetchUserFromAuthInfo } from '@/app/lib/data';
import { Suspense } from 'react';
import { auth } from '@/auth';
import {
  //   RevenueChartSkeleton,
  LatestCommentsSkeleton,
} from '@/app/ui/skeletons';
import { Users } from '@/app/lib/definitions';
let teacher: Users[] | null = null;

export async function getTeacher() {
  if (!teacher) {
    let session = await auth();
    let userEmail = session?.user?.email ?? '';
    teacher = await fetchUserFromAuthInfo(userEmail);
  }
  return teacher;
}

//async because its a server component
export default async function Page() {
  const teacher = await getTeacher();
  const {
    numberOfIncidents,
    numberOfTeachers,
    numberOfComments,
    numberOfPendingComments,
  } = await fetchCardData();
  console.log('teacher authed is: ', teacher);

  return (
    <main>
      <div className="mt-0 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {teacher && teacher.length > 0 && teacher[0].role === 'teacher' ? (
          <TeacherDashboard id={teacher[0].id} />
        ) : (
          <div className="flex w-full flex-col gap-4 p-4 md:col-span-8">
            <h1 className={`${lusitana.className} mb-2 text-xl md:text-2xl`}>
              Dashboard
            </h1>
            <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {
                <Card
                  title="Total Teachers"
                  value={numberOfTeachers}
                  type="teachers"
                />
              }
              {
                <Card
                  title="Total Incidents"
                  value={numberOfIncidents}
                  type="incidents"
                />
              }
              {
                <Card
                  title="Total Comments"
                  value={numberOfComments}
                  type="comments"
                />
              }
              {
                <Card
                  title="Pending Comments"
                  value={numberOfPendingComments}
                  type="pending"
                />
              }
            </div>
            <Suspense fallback={<LatestCommentsSkeleton />}>
              <LatestComments />
            </Suspense>
          </div>
        )}
      </div>
    </main>
  );
}
