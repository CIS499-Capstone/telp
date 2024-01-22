import { Card } from '@/app/ui/dashboard/cards';
import { LatestComments } from '../ui/dashboard/latest-comments';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData, fetchCommentsData } from '@/app/lib/data';
import { Suspense } from 'react';
import {
  //   RevenueChartSkeleton,
  LatestCommentsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  const {
    numberOfIncidents,
    numberOfTeachers,
    numberOfComments,
    numberOfPendingComments,
  } = await fetchCardData();

  const { image_url, name, email, comment } = (
    await fetchCommentsData()
  )[0] || {
    image_url: '',
    name: '',
    email: '',
    comment: '',
  };

  // Wait for promises to resolve
  const resolvedImageURL = await image_url;
  const resolvedName = await name;
  const resolvedEmail = await email;
  const resolvedComment = await comment;
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {
          //the type relates to which icon is selected
          //from iconMap in /ui/dashboard/cards.tsx
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
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/*<Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
      </Suspense>*/}
        <Suspense fallback={<LatestCommentsSkeleton />}>
          <LatestComments
            image_url={resolvedImageURL}
            name={resolvedName}
            email={resolvedEmail}
            comment={resolvedComment}
          />
        </Suspense>
      </div>
    </main>
  );
}
