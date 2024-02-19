import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { fetchCommentsData } from '@/app/lib/data';

export default async function LatestComments() {
  const lastComments = await fetchCommentsData();

  // Convert time strings to Date objects
  lastComments.forEach((comment) => {
    comment.time = new Date(comment.time) as Date;
  });

  // Sort comments by time in descending order
  lastComments.sort((a, b) => b.time.getTime() - a.time.getTime());

  // Get the latest 5 comments
  const latestComments = lastComments.slice(0, 5);

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Comments
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {latestComments.map((comment, i) => (
          <div
            key={i}
            className="flex items-center border-b border-gray-200 py-2"
          >
            <Image
              src={comment.image_url}
              alt={`${comment.name}'s profile picture py-3 border-b border-gray-200`}
              className="mr-4 rounded-full"
              width={32}
              height={32}
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold md:text-base">
                {comment.name}
              </p>
              <p className="hidden text-sm text-gray-500 sm:block">
                {comment.email}
              </p>
            </div>

            <div className="ml-auto min-w-0">
              <p
                className={`${lusitana.className} md:text-base, ml-auto truncate text-sm font-medium font-semibold
                        text-gray-500`}
              >
                {comment.comment}
              </p>
              <p
                style={{ fontSize: '10px' }}
                className="ml-auto hidden text-sm text-gray-500 sm:block"
              >
                {comment.time.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
