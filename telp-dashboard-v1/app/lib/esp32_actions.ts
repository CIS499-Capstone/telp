import { sql} from '@vercel/postgres';
import { comment } from 'postcss';

export async function fetchEmpData(id: number){
    try {
        const query = sql`
          SELECT name
          FROM users
          WHERE id = (
          SELECT
            userID
          FROM devices
          WHERE ${id} = id) 
        `;
    
        const result = await query;
        // console.log(result);
        console.log("EMP_ID res: ",result.rows[0]['name']);
        const dt = new Date();
        dt.setHours(13,15);
        const dayOfWeek = getDayOfWeek(dt);
        const timeSlot = getTimeSlot(dt);
        console.log(dayOfWeek + " " + timeSlot);
        const scheduleQuery = sql`
            SELECT
        `;
        
        return result.rows[0]['name'];
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
    dt.setHours(12,15);
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