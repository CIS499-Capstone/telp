import { number } from "zod";
import ChartComponent from "./chart";
import { fetchIncidentsByTeacher } from "@/app/lib/data_analysis";
export default async function Page() {
  const data = await fetchIncidentsByTeacher();

  const chartData =
  {
    labels: data[0].map(String),
    datasets: [{
      label: "Incidents by Teacher",
      data: data[1].map(value => typeof value === 'string' ? parseInt(value) : value),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };

  return (
    <div className="mt-0 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8" style={{ width: '75%', height: '75%' }}>

      <ChartComponent data = {chartData} />
      {/* <h3> {data} </h3> */}
    </div>
  );
}
