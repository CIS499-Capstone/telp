import { sql} from '@vercel/postgres';
import { comment } from 'postcss';

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const teacherCountPromise = sql`SELECT COUNT(*) FROM users WHERE role = 'teacher'`;
    const incidentsCountPromise = sql`SELECT COUNT(*) FROM incidents`;
    const commentCountPromise = sql`SELECT COUNT(*) FROM incidents WHERE comment != ''`;

    const data = await Promise.all([
      teacherCountPromise,
      incidentsCountPromise,
      commentCountPromise
    ]);
    //console.log("Data on Cards: ",data[0]);

    const numberOfTeachers = Number(data[0].rows[0].count ?? '0');
    const numberOfIncidents = Number(data[1].rows[0].count ?? '0');
    const numberOfComments = Number(data[2].rows[0].count ?? '0');
    const numberOfPendingComments = numberOfIncidents - numberOfComments; // because every incident should have a comment

    return {
      numberOfIncidents,
      numberOfTeachers,
      numberOfComments,
      numberOfPendingComments
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}


export async function fetchCommentsData() {
  try {
    const query = sql`
      SELECT
        u.image_url,
        u.name,
        u.email,
        i.comment,
        i.time
      FROM
        users u
      INNER JOIN
        incidents i ON u.id = i.userId
      WHERE
        u.role = 'teacher' AND
        i.comment != ''
      ORDER BY
        i.time DESC;
    `;

    const result = await query;

    const commentData = result.rows.map((row) => ({
      image_url: row.image_url as string,
      name: row.name as string,
      email: row.email as string,
      comment: row.comment as string,
      time: row.time as Date,
    }));
    //console.log("Comment Data: ",commentData);

    return commentData;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comment data.');
  }
}

//feed id into this function
export async function fetchTeacherIncidents(id: number) {
  try {
    const query = sql`
      SELECT
        incidents.*,
        students.name
      FROM
        incidents
      INNER JOIN
        students ON incidents.student_id = students.student_id
      WHERE
        incidents.userId = ${id}
    `;

    const result = await query;
    console.log("Incident res: ",result.rows);

    const incidents = result.rows.map((row) => ({
      incidentid: row.id as number,
      comment: row.comment as string,
      time: row.time as string,
      studentId: row.student_id as number,
      name: row.name as string,
    }));

    return incidents;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch teacher incidents data.');
  }
}

export async function fetchUserFromAuthInfo(authEmail :string){
  //get user from email in authInfo
  //from user we can check the role
  
  try {
    const query = sql`
      SELECT
        *
      FROM
        users
      WHERE
        email = ${authEmail}
    `;

    const result = await query;

    const teacher = result.rows.map((row) => ({
      id: row.id as number,
      role: row.role as string,
      image_url: row.image_url as string,
      name: row.name as string,
      email: row.email as string,
    }));

    return teacher;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comment data.');
  }
}