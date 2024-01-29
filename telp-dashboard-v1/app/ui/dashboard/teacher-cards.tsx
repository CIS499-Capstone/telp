import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export function TeacherCards({
  id,
  image_url,
  name,
  email,
}: {
  id: Number;
  image_url: string;
  name: string;
  email: string;
}) {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      <Link href={`/teacher/${id}`}>
        <Image
          src={image_url}
          alt={`${name}'s profile picture`}
          className="mx-auto mb-4 rounded-full"
          width={64}
          height={64}
        />
        <h3 className="text-center text-sm font-medium">{name}</h3>
        <p
          className={`${lusitana.className} mt-2 truncate text-center text-sm`}
        >
          {email}
        </p>
      </Link>
    </div>
  );
}
