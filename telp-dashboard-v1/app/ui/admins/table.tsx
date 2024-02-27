import Image from 'next/image';
import { ViewAdmin } from '@/app/ui/admins/buttons';
import { fetchFilteredAdmins } from '@/app/lib/data';

export default async function AdminsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const admins = await fetchFilteredAdmins(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {admins?.map((admin) => (
              <div
                key={admin.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={admin.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${admin.name}'s profile picture`}
                      />
                      <p>{admin.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{admin.email}</p>
                  </div>
                  <p>{admin.id}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <ViewAdmin id={admin.userid} />
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
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {admins?.map((admin) => (
                <tr
                  key={admin.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={admin.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${admin.name}'s profile picture`}
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {admin.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {admin.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {admin.email}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewAdmin id={admin.userid} />
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
