import { UserIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { fetchTeacherIncidents } from '@/app/lib/data';
import { TeacherCards } from '@/app/ui/dashboard/teacher-cards';
import TeacherDashboard from '@/app/ui/dashboard/teacher-dashboard';

export default async function TeacherPage() {
  //const teachers = await fetchTeacherIncidents();
  //console.log('teachers: ', teachers);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <div>
        {/*teachers.map((teacher, i) => (
          <div key={i} className="w-72 rounded-md bg-white p-4 shadow-md">
            <TeacherCards
              id={teacher.id}
              image_url={teacher.image_url}
              name={teacher.name}
              email={teacher.email}
            />
          </div>
        ))*/}
      </div>
    </div>
  );
}
