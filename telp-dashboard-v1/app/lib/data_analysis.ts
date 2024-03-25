import { sql } from '@vercel/postgres';


export async function fetchIncidentsByTeacher() {
    try {
        interface IncidentResult {
            name: string;
            incident_count: string;
        }
        const query = sql<IncidentResult>`SELECT u.name, COUNT(i.userID) AS incident_count
        FROM users u
        JOIN incidents i ON u.id = i.userID
        GROUP BY u.name;
        
        `;
        // console.log("query executed");
        const result = await query;



        const names: string[] = result.rows.map(item => item.name);
        // console.log(result.rows)
        const incidentCounts: number[] = result.rows.map(item => parseInt(item.incident_count));
        // console.log(typeof(names));


        return [names, incidentCounts];
    } catch {
        console.log("error");
        return [[], []];
    }

}

export async function getIncidentSeries() {
    try {
        const query = sql`
        SELECT EXTRACT(HOUR FROM time) AS hour_of_day,
       COUNT(*) AS incident_count
FROM incidents
GROUP BY EXTRACT(HOUR FROM time)
ORDER BY hour_of_day;

        `;
        const result = await query;
        // console.log(result.rows);
        const times: string[] = result.rows.map(item => item.hour_of_day);
        // console.log(times);
        const incidentCounts: number[] = result.rows.map(item => parseInt(item.incident_count));
        console.log(incidentCounts);
        return [times,incidentCounts];
    }catch {
        console.log("error");
        return [[],[]];
    }
    
}