import { sql } from '@vercel/postgres';
import { resourceLimits } from 'worker_threads';

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
        console.log("query executed");
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

export async function getIncidents(){
    try {
        
        const query = sql`SELECT COUNT(*) FROM incidents;
        
        `;
        console.log("query executed");
        const result = await query;
        
        return result.rows;
    } catch {
        console.log("error");
        return [[],[]];
    }

}