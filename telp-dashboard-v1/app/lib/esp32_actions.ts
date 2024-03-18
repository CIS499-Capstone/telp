import { sql} from '@vercel/postgres';
import { comment } from 'postcss';

export async function fetchEmpData(id: number){
    try {
        const dt = new Date();
        // dt.setHours(9,15);
        const dayOfWeek = getDayOfWeek(dt);
        const timeSlot = getTimeSlot(dt);
        const query = sql`
        SELECT *
        FROM schedule as s
        INNER JOIN users AS u ON u.id = s.userID
        INNER JOIN devices AS d ON d.userID = s.userID
        WHERE (d.deviceid = ${id}) AND (s.day = ${dayOfWeek})
        `;
    
        const result = await query;
        const name = result.rows[0]['name'];
        const query2 = sql`
        SELECT name 
        FROM locations
        WHERE id = ${result.rows[0][timeSlot]}
        `;
        const result2 = await query2;
        const location = result2.rows[0]['name'];
        return {'name': name, 'location': location};
        
 
        
        // return result.rows[0]['name'];
        return'';
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch teacher incidents data.');
      }
}
function getDayOfWeek(dt: Date){
    
    const dayOfWeekInt = new Date().getDay();
    switch(dayOfWeekInt){
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';       
    }
}
function getTimeSlot(dt: Date){
    
    const ts = dt.toTimeString().substring(0,5);
    // console.log(ts);
    if(ts < '08:00'){
        return "7:30";
    }else if (ts >= '08:00' && ts < '08:30'){
        return "8:00";
    }else if (ts >= '08:30' && ts < '09:00'){
        return "8:30";
    }else if (ts >= '09:00' && ts < '09:30'){
        return "9:00";
    }else if (ts >= '09:30' && ts < '10:00'){
        return "9:30";
    }else if (ts >= '10:00' && ts < '10:30'){
        return "10:00";
    }else if (ts >= '10:30' && ts < '11:00'){
        return "10:30";
    }else if (ts >= '11:00' && ts < '11:30'){
        return "11:00";
    }else if (ts >= '11:30' && ts < '12:00'){
        return "11:30";
    }else if (ts >= '12:00' && ts < '12:30'){
        return "12:00";
    }else if (ts >= '12:30' && ts < '13:00'){
        return "12:30";
    }else if (ts >= '13:00' && ts < '13:30'){
        return "1:00";
    }else if (ts >= '13:30' && ts < '14:00'){
        return "1:30";
    }else if (ts >= '14:00' && ts < '14:30'){
        return "2:00";
    }else{
        return "2:30";
    }
}
export async function addIncident(id:number){
    const dt = new Date().toISOString().replace("T", " ").replace('\"','\'');
    const query = sql`
    INSERT INTO incidents (userID, time)
VALUES (
    (SELECT userID
    FROM devices
    WHERE deviceID = ${id}),
    ${dt}
);`
    
    
    const result = await query;
}