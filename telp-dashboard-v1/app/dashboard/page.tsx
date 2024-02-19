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

//useSession is on Client Side not server side ahhhhhhhhhhhhhhhhh!!!!!!!!!!!!!!

//async because its a server component
export default async function Page() {
  let session = await auth();
  console.log('session: ', session);
  let userEmail = session?.user?.email ?? ''; // Default value is an empty string if email is not available
  console.log('User: ', userEmail);
  const {
    numberOfIncidents,
    numberOfTeachers,
    numberOfComments,
    numberOfPendingComments,
  } = await fetchCardData();

  const teacher = await fetchUserFromAuthInfo(userEmail);
  console.log('teacher authed is: ', teacher);

  return (
    <main>
      <div className="mt-0 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {teacher[0].role === 'teacher' ? (
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
