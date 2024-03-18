import { sql} from '@vercel/postgres';
import { comment } from 'postcss';
import {
  UsersTable,
  TeacherForm,
  AdminForm,
  ScheduleForm,
  IncidentForm,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCardData() {
  try {
    const teacherCountPromise = sql`SELECT COUNT(*) FROM users WHERE role = 'teacher'`;
    const incidentsCountPromise = sql`SELECT COUNT(*) FROM incidents`;
    const commentCountPromise = sql`SELECT COUNT(*) FROM incidents WHERE comment != ''`;

    const data = await Promise.all([
      teacherCountPromise,
      incidentsCountPromise,
      commentCountPromise
    ]);

    const numberOfTeachers = Number(data[0].rows[0].count ?? '0');
    const numberOfIncidents = Number(data[1].rows[0].count ?? '0');
    const numberOfComments = Number(data[2].rows[0].count ?? '0');
    const numberOfPendingComments = numberOfIncidents - numberOfComments; 

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

    return commentData;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comment data.');
  }
}


export async function fetchTeacherIncidents(id: string) {
  try {
    const query = sql`
      SELECT
        incidents.*,
        students.name
      FROM
        incidents
      LEFT JOIN
        students ON incidents.student_id = students.student_id
      WHERE
        incidents.userId = ${id}
    `;

    const result = await query;

    const incidents = result.rows.map((row) => ({
      incidentid: row.incidentid as string,
      comment: row.comment as string,
      time: row.time as string,
      studentId: row.student_id as string,
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
      id: row.id as string,
      role: row.role === 'teacher' || row.role === 'admin' ? row.role : 'unknown', // Ensure role is 'teacher' or 'admin'
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

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredTeachers(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const users = await sql<UsersTable>`
      SELECT *
      FROM users
      JOIN devices ON users.id = devices.userID
      WHERE
        users.role = 'teacher' AND
        (users.name ILIKE ${`%${query}%`} OR users.email ILIKE ${`%${query}%`})
      ORDER BY users.id ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return users.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch teachers.');
  }
}

export async function fetchFilteredAdmins(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const users = await sql<UsersTable>`
      SELECT *
      FROM users
      WHERE
        users.role = 'admin' AND
        (users.name ILIKE ${`%${query}%`} OR users.email ILIKE ${`%${query}%`})
      ORDER BY users.id ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return users.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch admins.');
  }
}

export async function fetchTeachersPages(query: string) {
  noStore();
  try {
    const count = await sql`
    SELECT *
    FROM users
    JOIN devices ON users.id = devices.userid
    WHERE
      users.role = 'teacher'
  `;
    const totalPages = Math.ceil(Number(count.rowCount) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of teachers.');
  }
}

export async function fetchAdminsPages(query: string) {
  noStore();
  try {
    const count = await sql`
    SELECT *
    FROM users
    WHERE
      users.role = 'admin'
  `;
    const totalPages = Math.ceil(Number(count.rowCount) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of admins.');
  }
}

export async function fetchTeacherById(id: string) {
  noStore();
  try {
    const data = await sql<TeacherForm>`
      SELECT *
      FROM users
      JOIN authinfo ON users.email = authinfo.email
      JOIN devices ON users.id = devices.userid
      WHERE users.id = ${id};
    `;

    const teacher = data.rows.map((teacher) => ({
      ...teacher,
    }));

    console.log(teacher); 
    return teacher[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Teacher.');
  }
}

export async function fetchAdminById(id: string) {
  noStore();
  try {
    const data = await sql<AdminForm>`
      SELECT *
      FROM users
      JOIN authinfo ON users.email = authinfo.email
      WHERE users.id = ${id};
    `;

    const admin = data.rows.map((admin) => ({
      ...admin,
    }));

    console.log(admin); 
    return admin[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Admin.');
  }
}

export async function fetchScheduleById(id: string) {
  noStore();
  try {
    const data = await sql<ScheduleForm>`
      SELECT *
      FROM schedule
      WHERE userid = ${id}
      ORDER BY
        CASE
          WHEN day = 'Monday' THEN 1
          WHEN day = 'Tuesday' THEN 2
          WHEN day = 'Wednesday' THEN 3
          WHEN day = 'Thursday' THEN 4
          ELSE 5
        END
    `;
    
    return data.rows;
  } catch (error) {
    console.log('Database Error:', error);
    throw new Error('Failed to fetch Teacher Schedule.');
  }
}

export async function fetchIncidentById(id: string) {
  noStore();
  try {
    console.log("prior testing")
    console.log("*****************************");
    console.log("id is: ",id);
    const data = await sql<IncidentForm>`
      SELECT 
        incidents.*
      FROM incidents
      WHERE incidents.incidentid = ${id};
    `;
    console.log("specific Incident: ",data.rows[0])

    const incident = data.rows.map((incident) => ({
      ...incident,
    }));
    return incident[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Incident.');
  }
}
