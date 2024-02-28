import Image from 'next/image';
import { fetchScheduleById } from '@/app/lib/data';

export default async function ScheduleTable({
  id,
}: {
  id: string;
}) {
  const schedule = await fetchScheduleById(id);

  return (
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
              {schedule?.map((schedule) => (
                <tr
                  key={schedule.day}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {schedule.day}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t730}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t800}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t830}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t900}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t930}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t1000}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t1030}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t1100}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t1130}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t1200}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t1230}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t100}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t130}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t200}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule.t230}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
