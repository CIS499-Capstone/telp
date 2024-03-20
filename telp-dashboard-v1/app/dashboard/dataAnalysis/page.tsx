import ChartComponent from "./chart";

export default async function Page(){
  
  return(
    <div  className="mt-0 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8" style={{ width: '75%', height: '75%' }}>
      <h1>My Next.js Chart</h1>
      <ChartComponent />
    </div>
  );
}