import EditIncidentForm from '@/app/ui/incidents/editIncident';
// import Breadcrumbs from '@/app/ui/teachers/breadcrumbs';
import { fetchIncidentById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Incident',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const incident = await fetchIncidentById(id);

  if (!incident) {
    notFound();
  }

  return (
    <main>
      <EditIncidentForm incident={incident} />
    </main>
  );
}
