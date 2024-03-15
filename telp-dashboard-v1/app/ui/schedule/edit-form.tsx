'use client';

import { 
  ScheduleForm,
  TeacherForm 
} from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateSchedule } from '@/app/lib/actions';

export default async function EditScheduleForm({
  teacher,
  schedule1,
  schedule2,
  schedule3,
  schedule4,
  schedule5,
}: {
  teacher: TeacherForm,
  schedule1: ScheduleForm,
  schedule2: ScheduleForm,
  schedule3: ScheduleForm,
  schedule4: ScheduleForm,
  schedule5: ScheduleForm,
}) {
  const updateScheduleWithId = updateSchedule.bind(null, teacher.id);

  return (
    <form action={updateScheduleWithId}>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            {/* <div className="md:hidden">
              {schedule?.map((schedule) => (
                <div
                  key={schedule.userid}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                          src={schedule.image_url}
                          className="mr-2 rounded-full"
                          width={28}
                          height={28}
                          alt={`${schedule.name}'s profile picture`}
                        />
                        <p>{schedule.name}</p>
                      </div>
                      <p className="text-sm text-gray-500">{schedule.email}</p>
                    </div>
                    <p>{schedule.id}</p>
                  </div>
                </div>
              ))}
            </div> */}
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Day
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    7:30
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    8:00
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    8:30
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    9:00
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    9:30
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    10:00
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    10:30
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    11:00
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    11:30
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    12:00
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    12:30
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    1:00
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    1:30
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    2:00
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    2:30
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* {schedule?.map((schedule) => ( */}
                  <tr
                    key={schedule1.day}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      {schedule1.day || "Monday"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['7:30'] || ""}
                        id="m730"
                        name="m730"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['8:00'] || ""}
                        id="m800"
                        name="m800"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['8:30'] || ""}
                        id="m830"
                        name="m830"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['9:00'] || ""}
                        id="m900"
                        name="m900"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['9:30'] || ""}
                        id="m930"
                        name="m930"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['10:00'] || ""}
                        id="m1000"
                        name="m1000"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['10:30'] || ""}
                        id="m1030"
                        name="m1030"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['11:00'] || ""}
                        id="m1100"
                        name="m1100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['11:30'] || ""}
                        id="m1130"
                        name="m1130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['12:00'] || ""}
                        id="m1200"
                        name="m1200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['12:30'] || ""}
                        id="m1230"
                        name="m1230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['1:00'] || ""}
                        id="m100"
                        name="m100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['1:30'] || ""}
                        id="m130"
                        name="m130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['2:00'] || ""}
                        id="m200"
                        name="m200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule1['2:30'] || ""}
                        id="m230"
                        name="m230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                  </tr>

                  <tr
                    key={schedule2.day}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      {schedule2.day || "Tuesday"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['7:30'] || ""}
                        id="t730"
                        name="t730"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['8:00'] || ""}
                        id="t800"
                        name="t800"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['8:30'] || ""}
                        id="t830"
                        name="t830"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['9:00'] || ""}
                        id="t900"
                        name="t900"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['9:30'] || ""}
                        id="t930"
                        name="t930"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['10:00'] || ""}
                        id="t1000"
                        name="t1000"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['10:30'] || ""}
                        id="t1030"
                        name="t1030"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['11:00'] || ""}
                        id="t1100"
                        name="t1100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['11:30'] || ""}
                        id="t1130"
                        name="t1130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['12:00'] || ""}
                        id="t1200"
                        name="t1200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['12:30'] || ""}
                        id="t1230"
                        name="t1230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['1:00'] || ""}
                        id="t100"
                        name="t100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['1:30'] || ""}
                        id="t130"
                        name="t130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['2:00'] || ""}
                        id="t200"
                        name="t200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule2['2:30'] || ""}
                        id="t230"
                        name="t230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                  </tr>

                  <tr
                    key={schedule3.day}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      {schedule3.day || "Wednesday"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['7:30'] || ""}
                        id="w730"
                        name="w730"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['8:00'] || ""}
                        id="w800"
                        name="w800"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['8:30'] || ""}
                        id="w830"
                        name="w830"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['9:00'] || ""}
                        id="w900"
                        name="w900"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['9:30'] || ""}
                        id="w930"
                        name="w930"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['10:00'] || ""}
                        id="w1000"
                        name="w1000"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['10:30'] || ""}
                        id="w1030"
                        name="w1030"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['11:00'] || ""}
                        id="w1100"
                        name="w1100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['11:30'] || ""}
                        id="w1130"
                        name="w1130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['12:00'] || ""}
                        id="w1200"
                        name="w1200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['12:30'] || ""}
                        id="w1230"
                        name="w1230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['1:00'] || ""}
                        id="w100"
                        name="w100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['1:30'] || ""}
                        id="w130"
                        name="w130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['2:00'] || ""}
                        id="w200"
                        name="w200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule3['2:30'] || ""}
                        id="w230"
                        name="w230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                  </tr>

                  <tr
                    key={schedule4.day}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      {schedule4.day || "Thursday"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['7:30'] || ""}
                        id="r730"
                        name="r730"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['8:00'] || ""}
                        id="r800"
                        name="r800"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['8:30'] || ""}
                        id="r830"
                        name="r830"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['9:00'] || ""}
                        id="r900"
                        name="r900"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['9:30'] || ""}
                        id="r930"
                        name="r930"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['10:00'] || ""}
                        id="r1000"
                        name="r1000"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['10:30'] || ""}
                        id="r1030"
                        name="r1030"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['11:00'] || ""}
                        id="r1100"
                        name="r1100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['11:30'] || ""}
                        id="r1130"
                        name="r1130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['12:00'] || ""}
                        id="r1200"
                        name="r1200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['12:30'] || ""}
                        id="r1230"
                        name="r1230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['1:00'] || ""}
                        id="r100"
                        name="r100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['1:30'] || ""}
                        id="r130"
                        name="r130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['2:00'] || ""}
                        id="r200"
                        name="r200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule4['2:30'] || ""}
                        id="r230"
                        name="r230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                  </tr>

                  <tr
                    key={schedule5.day}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      {schedule5.day || "Friday"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['7:30'] || ""}
                        id="f730"
                        name="f730"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['8:00'] || ""}
                        id="f800"
                        name="f800"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['8:30'] || ""}
                        id="f830"
                        name="f830"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['9:00'] || ""}
                        id="f900"
                        name="f900"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['9:30'] || ""}
                        id="f930"
                        name="f930"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['10:00'] || ""}
                        id="f1000"
                        name="f1000"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['10:30'] || ""}
                        id="f1030"
                        name="f1030"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['11:00'] || ""}
                        id="f1100"
                        name="f1100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['11:30'] || ""}
                        id="f1130"
                        name="f1130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['12:00'] || ""}
                        id="f1200"
                        name="f1200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['12:30'] || ""}
                        id="f1230"
                        name="f1230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['1:00'] || ""}
                        id="f100"
                        name="f100"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['1:30'] || ""}
                        id="f130"
                        name="f130"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['2:00'] || ""}
                        id="f200"
                        name="f200"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <input
                        defaultValue={schedule5['2:30'] || ""}
                        id="f230"
                        name="f230"
                        type="number"
                        className="peer block w-full rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </td>
                  </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/dashboard/teachers/${teacher.id}/details`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Schedule</Button>
      </div>
    </form>
  );
}
