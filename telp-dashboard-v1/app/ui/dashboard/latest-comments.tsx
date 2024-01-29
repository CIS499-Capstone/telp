import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { fetchCommentsData } from '@/app/lib/data';

// TODO: remove props. call fetchCommentData in here, use a map function to render all latest comments.
export default async function LatestComments() {
  const lastComments = await fetchCommentsData();
  //console.log('lastComments: ', lastComments);
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Comments
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {
          <div className="bg-white px-6">
            {lastComments.map((comment, i) => {
              return (
                <div key={i} className="flex items-center">
                  <Image
                    src={comment.image_url}
                    alt={`${comment.name}'s profile picture`}
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
                        text-gray-500`} // right-align the comment
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
              );
            })}
          </div>
        }
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
