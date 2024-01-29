import { UserIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { fetchTeacherData } from '@/app/lib/data';
import { TeacherCards } from '@/app/ui/dashboard/teacher-cards';

export default async function TeacherPage() {
  const teachers = await fetchTeacherData();
  console.log('teachers: ', teachers);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {teachers.map((teacher, i) => (
        <div key={i} className="w-72 rounded-md bg-white p-4 shadow-md">
          <TeacherCards
            id={teacher.id}
            image_url={teacher.image_url}
            name={teacher.name}
            email={teacher.email}
          />
        </div>
      ))}
    </div>
  );
}
