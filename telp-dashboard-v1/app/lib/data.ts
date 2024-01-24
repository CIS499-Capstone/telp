import { sql} from '@vercel/postgres';

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
      time: row.time as string,
    }));

    return commentData;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comment data.');
  }
}
