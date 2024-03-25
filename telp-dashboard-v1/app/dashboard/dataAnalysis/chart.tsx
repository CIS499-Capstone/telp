import { fetchCardData, fetchStudents } from "@/app/lib/data";
import { unstable_noStore as noStore } from 'next/cache';
import { Card } from "@/app/ui/dashboard/cards";
import AreaChart from "./AreaChartPlot";
import { getIncidentSeries, fetchIncidentsByTeacher, getIncidentsByStudent } from "@/app/lib/data_analysis";
import ChartComponent from "./PolarAreaChart";
import BarChart from "./BarChart";
export default async function Charts(

) {
  noStore();
  const {
    numberOfIncidents,
    numberOfTeachers,
    numberOfComments,
    numberOfPendingComments,
  } = await fetchCardData();
  const timeData = await getIncidentSeries();
  const lineData = {
    labels: timeData[0].map(String),
    datasets: [{
      label: "Incident Counts over Time",
      data: timeData[1].map(value => typeof value === 'string' ? parseInt(value) : value),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      xAxisID: "Incident"
    }]
  }

  const pieData = await fetchIncidentsByTeacher();

  const chartData =
  {
    labels: pieData[0].map(String),
    datasets: [{
      label: "Incidents by Teacher",
      data: pieData[1].map(value => typeof value === 'string' ? parseInt(value) : value),

    }]
  };
  const studentBarData = await getIncidentsByStudent();
  const barData =
  {
    labels: studentBarData[0].map(String),
    datasets: [{
      label: "Incidents by Student",
      data: studentBarData[1].map(value => typeof value === 'string' ? parseInt(value) : value),
      borderWidth: 1
    }]
  }
  const students = await fetchStudents();
  return (
    <div className="p-4 w-full">
      {/* Section for cards */}
      <section className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Total Teachers" value={numberOfTeachers} type="teachers" />
        <Card title="Total Incidents" value={numberOfIncidents} type="incidents" />
        <Card title="Total Comments" value={numberOfComments} type="comments" />
        <Card title="Pending Comments" value={numberOfPendingComments} type="pending" />
      </section>

      {/* Section for charts */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Pie chart */}
        <div className="rounded-lg border bg-white p-4 lg:col-span-2">
          <ChartComponent data={chartData} />
        </div>

        {/* Area chart */}
        <div className="rounded-lg border bg-white p-4 lg:col-span-2">
          <AreaChart data={lineData} />
        </div>

        {/* Bar chart */}
        <div className="rounded-lg border bg-white p-4 lg:col-span-4">
          <BarChart data={barData} />
        </div>
      </div>

      {/* Dropdown */}
      <div className="mt-4">
        <select
          id="student_id"
          name="student_id"
          className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-500 outline-none"
        >
           <option disabled selected>Select Option</option>
          {students.map((student) => (
            <option key={student.student_id} value={student.student_id}>
              {`${student.student_id} - ${student.name}`}
            </option>
          ))}
        </select>
      </div>
    </div>

  );
};


