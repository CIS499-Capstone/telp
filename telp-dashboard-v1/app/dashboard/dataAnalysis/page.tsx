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

    }]
  };

  return (
    <div className="mt-0 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8" style={{ width: '50%', height: '50%' }}>

      <ChartComponent data = {chartData} />
      {/* <h3> {data} </h3> */}
    </div>
  );
}
