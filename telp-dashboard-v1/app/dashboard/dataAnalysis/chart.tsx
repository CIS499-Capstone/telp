import { fetchCardData } from "@/app/lib/data";
import { unstable_noStore as noStore } from 'next/cache';
import { Card } from "@/app/ui/dashboard/cards";
import AreaChart from "./AreaChartPlot";
import { getIncidentSeries, fetchIncidentsByTeacher } from "@/app/lib/data_analysis";
import ChartComponent from "./PolarAreaChart";
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

  return (
    <div className="h-auto">
      <section>
        <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {
            <Card
              title="Total Teachers"
              value={numberOfTeachers}
              type="teachers"
            />
          }
          {
            <Card
              title="Total Incidents"
              value={numberOfIncidents}
              type="incidents"
            />
          }
          {
            <Card
              title="Total Comments"
              value={numberOfComments}
              type="comments"
            />
          }
          {
            <Card
              title="Pending Comments"
              value={numberOfPendingComments}
              type="pending"
            />
          }
        </div>
      </section>

      <section className="flex h-auto">
    <div className="w-1/2" style={{ height: '6000px' }}>
      {/* Adjust height as needed */}
      <AreaChart data={lineData} />
    </div>
    <div className="w-1/2">
      <ChartComponent data={chartData} />
    </div>
  </section>

      {/* <section className="flex "> */}
       

      {/* </section> */}
    </div>
  );
};


