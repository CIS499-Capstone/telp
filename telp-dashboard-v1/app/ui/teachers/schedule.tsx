import { fetchScheduleById } from '@/app/lib/data';
import { UpdateSchedule } from './buttons';

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
                    {schedule['7:30'] === 1 ? 'Classroom' :
                     schedule['7:30'] === 2 ? 'Music' :
                     schedule['7:30'] === 3 ? 'PE' :
                     schedule['7:30'] === 4 ? 'Library' :
                     schedule['7:30'] === 5 ? 'Computer Lab' :
                     schedule['7:30'] === 6 ? 'Recess' :
                     schedule['7:30'] === 7 ? 'Lunch' :
                     schedule['7:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['8:00'] === 1 ? 'Classroom' :
                     schedule['8:00'] === 2 ? 'Music' :
                     schedule['8:00'] === 3 ? 'PE' :
                     schedule['8:00'] === 4 ? 'Library' :
                     schedule['8:00'] === 5 ? 'Computer Lab' :
                     schedule['8:00'] === 6 ? 'Recess' :
                     schedule['8:00'] === 7 ? 'Lunch' :
                     schedule['8:00'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['8:30'] === 1 ? 'Classroom' :
                     schedule['8:30'] === 2 ? 'Music' :
                     schedule['8:30'] === 3 ? 'PE' :
                     schedule['8:30'] === 4 ? 'Library' :
                     schedule['8:30'] === 5 ? 'Computer Lab' :
                     schedule['8:30'] === 6 ? 'Recess' :
                     schedule['8:30'] === 7 ? 'Lunch' :
                     schedule['8:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['9:00'] === 1 ? 'Classroom' :
                     schedule['9:00'] === 2 ? 'Music' :
                     schedule['9:00'] === 3 ? 'PE' :
                     schedule['9:00'] === 4 ? 'Library' :
                     schedule['9:00'] === 5 ? 'Computer Lab' :
                     schedule['9:00'] === 6 ? 'Recess' :
                     schedule['9:00'] === 7 ? 'Lunch' :
                     schedule['9:00'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['9:30'] === 1 ? 'Classroom' :
                     schedule['9:30'] === 2 ? 'Music' :
                     schedule['9:30'] === 3 ? 'PE' :
                     schedule['9:30'] === 4 ? 'Library' :
                     schedule['9:30'] === 5 ? 'Computer Lab' :
                     schedule['9:30'] === 6 ? 'Recess' :
                     schedule['9:30'] === 7 ? 'Lunch' :
                     schedule['9:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['10:00'] === 1 ? 'Classroom' :
                     schedule['10:00'] === 2 ? 'Music' :
                     schedule['10:00'] === 3 ? 'PE' :
                     schedule['10:00'] === 4 ? 'Library' :
                     schedule['10:00'] === 5 ? 'Computer Lab' :
                     schedule['10:00'] === 6 ? 'Recess' :
                     schedule['10:00'] === 7 ? 'Lunch' :
                     schedule['10:00'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['10:30'] === 1 ? 'Classroom' :
                     schedule['10:30'] === 2 ? 'Music' :
                     schedule['10:30'] === 3 ? 'PE' :
                     schedule['10:30'] === 4 ? 'Library' :
                     schedule['10:30'] === 5 ? 'Computer Lab' :
                     schedule['10:30'] === 6 ? 'Recess' :
                     schedule['10:30'] === 7 ? 'Lunch' :
                     schedule['10:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['11:00'] === 1 ? 'Classroom' :
                     schedule['11:00'] === 2 ? 'Music' :
                     schedule['11:00'] === 3 ? 'PE' :
                     schedule['11:00'] === 4 ? 'Library' :
                     schedule['11:00'] === 5 ? 'Computer Lab' :
                     schedule['11:00'] === 6 ? 'Recess' :
                     schedule['11:00'] === 7 ? 'Lunch' :
                     schedule['11:00'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['11:30'] === 1 ? 'Classroom' :
                     schedule['11:30'] === 2 ? 'Music' :
                     schedule['11:30'] === 3 ? 'PE' :
                     schedule['11:30'] === 4 ? 'Library' :
                     schedule['11:30'] === 5 ? 'Computer Lab' :
                     schedule['11:30'] === 6 ? 'Recess' :
                     schedule['11:30'] === 7 ? 'Lunch' :
                     schedule['11:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['12:00'] === 1 ? 'Classroom' :
                     schedule['12:00'] === 2 ? 'Music' :
                     schedule['12:00'] === 3 ? 'PE' :
                     schedule['12:00'] === 4 ? 'Library' :
                     schedule['12:00'] === 5 ? 'Computer Lab' :
                     schedule['12:00'] === 6 ? 'Recess' :
                     schedule['12:00'] === 7 ? 'Lunch' :
                     schedule['12:00'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['12:30'] === 1 ? 'Classroom' :
                     schedule['12:30'] === 2 ? 'Music' :
                     schedule['12:30'] === 3 ? 'PE' :
                     schedule['12:30'] === 4 ? 'Library' :
                     schedule['12:30'] === 5 ? 'Computer Lab' :
                     schedule['12:30'] === 6 ? 'Recess' :
                     schedule['12:30'] === 7 ? 'Lunch' :
                     schedule['12:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['1:00'] === 1 ? 'Classroom' :
                     schedule['1:00'] === 2 ? 'Music' :
                     schedule['1:00'] === 3 ? 'PE' :
                     schedule['1:00'] === 4 ? 'Library' :
                     schedule['1:00'] === 5 ? 'Computer Lab' :
                     schedule['1:00'] === 6 ? 'Recess' :
                     schedule['1:00'] === 7 ? 'Lunch' :
                     schedule['1:00'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['1:30'] === 1 ? 'Classroom' :
                     schedule['1:30'] === 2 ? 'Music' :
                     schedule['1:30'] === 3 ? 'PE' :
                     schedule['1:30'] === 4 ? 'Library' :
                     schedule['1:30'] === 5 ? 'Computer Lab' :
                     schedule['1:30'] === 6 ? 'Recess' :
                     schedule['1:30'] === 7 ? 'Lunch' :
                     schedule['1:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['2:00'] === 1 ? 'Classroom' :
                     schedule['2:00'] === 2 ? 'Music' :
                     schedule['2:00'] === 3 ? 'PE' :
                     schedule['2:00'] === 4 ? 'Library' :
                     schedule['2:00'] === 5 ? 'Computer Lab' :
                     schedule['2:00'] === 6 ? 'Recess' :
                     schedule['2:00'] === 7 ? 'Lunch' :
                     schedule['2:00'] === 8 ? 'Art' : 'Not set'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {schedule['2:30'] === 1 ? 'Classroom' :
                     schedule['2:30'] === 2 ? 'Music' :
                     schedule['2:30'] === 3 ? 'PE' :
                     schedule['2:30'] === 4 ? 'Library' :
                     schedule['2:30'] === 5 ? 'Computer Lab' :
                     schedule['2:30'] === 6 ? 'Recess' :
                     schedule['2:30'] === 7 ? 'Lunch' :
                     schedule['2:30'] === 8 ? 'Art' : 'Not set'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <UpdateSchedule id={id} /> 
        </div>
      </div>
    </div>
  );
}
