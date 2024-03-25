import { number } from "zod";
import Charts from "./chart";
import Navbar from "./navbar"
import { fetchIncidentsByTeacher } from "@/app/lib/data_analysis";
import { fetchCardData } from "@/app/lib/data";

export default async function Page() {

  return (
    <>
    <div className="flex">
    
    <main >
          <Navbar />
          <Charts/>
    </main>
    </div>
    </>
  )
}