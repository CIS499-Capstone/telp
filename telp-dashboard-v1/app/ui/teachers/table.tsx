import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/teachers/buttons';
import { fetchFilteredTeachers } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const teachers = await fetchFilteredTeachers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {teachers?.map((teacher) => (
              <div
                key={teacher.userid}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={teacher.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${teacher.name}'s profile picture`}
                      />
                      <p>{teacher.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{teacher.email}</p>
                  </div>
                  <p>{teacher.id}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    {/* <UpdateInvoice id={user.id} />
                    <DeleteInvoice id={user.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Avatar
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Device
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {teachers?.map((teacher) => (
                <tr
                  key={teacher.userid}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={teacher.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${teacher.name}'s profile picture`}
                      />
                      {/* <p>{teacher.userid}</p> */}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {teacher.userid}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {teacher.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {teacher.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {teacher.id}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateInvoice id={teacher.userid} />
                      <DeleteInvoice id={teacher.userid} /> */}
                    </div>
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
