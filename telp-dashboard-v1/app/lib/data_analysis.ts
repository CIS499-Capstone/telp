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
        const result = await query;
        
       
        
        const names: string [] = result.rows.map(item => item.name);
        console.log(result.rows)
        const incidentCounts: number[] = result.rows.map(item => parseInt(item.incident_count));
        // console.log(typeof(names));
       
        
        return [names,incidentCounts];
    } catch {
        console.log("error");
        return [[],[]];
    }
}