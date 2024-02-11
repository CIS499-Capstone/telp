// const { db } = require('@vercel/postgres');
// const {
//   users, incidents, schedule,
//   devices, locations, students, authinfo
// } = require('../app/lib/placeholder-data.js');

// const bcrypt = require('bcrypt');

// async function seedUsers(client) {
//   try {
//     // Drop the "users" table if it exists along with dependent objects
//     await client.sql`
//       DROP TABLE IF EXISTS users CASCADE;
//     `;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         role VARCHAR(50) CHECK (role IN ('teacher', 'admin')),
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         image_url TEXT
//       );
//     `;

//     console.log(`Created "users" table`);

//     // Insert data into the "users" table
//     const insertedUsers = await Promise.all(
//       users.map(async (user) => {
//         //const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.query(
//           'INSERT INTO users (id, role, name, email, image_url) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING RETURNING *',
//           [user.id, user.role, user.name, user.email, user.image_url]
//         );
//       }),
//     );

//     console.log(`Seeded ${insertedUsers.length} users`);

//     return {
//       createTable,
//       users: insertedUsers,
//     };
//   } catch (error) {
//     console.error('Error seeding users:', error);
//     throw error;
//   }
// }

// async function seedAuthInfo(client) {
//   try {
//     await client.sql`
//       DROP TABLE IF EXISTS authInfo CASCADE;
//     `;

//     const createAuthTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS authInfo (
//         email TEXT NOT NULL UNIQUE,
//         FOREIGN KEY (email) REFERENCES users(email),
//         password TEXT NOT NULL
//       );
//     `;
//     console.log(`Created "authInfo" table`);

//     const insertedAuthInfo = await Promise.all(
//       authinfo.map(async (auth) => {
//         const hashedPassword = await bcrypt.hash(auth.password, 10);
//         return client.query(
//           'INSERT INTO authInfo (email, password) VALUES ($1, $2)',
//           [auth.email, hashedPassword]
//         );
//       }),
//     );

//     console.log(`Seeded ${insertedAuthInfo.length} authinfo`);

//     return {
//       createAuthTable,
//       authInfo: insertedAuthInfo
//     };
//   } catch (error) {
//     console.error('Error seeding authinfo:', error);
//     throw error;
//   }
// }

// async function seedStudents(client) {
//   try {
//     // Drop the "students" table if it exists along with dependent objects
//     await client.sql`
//       DROP TABLE IF EXISTS students CASCADE;
//     `;

//     // Create the "students" table if it doesn't exist
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS students (
//         student_id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL
//       );
//     `;

//     console.log(`Created "students" table`);

//     // Insert data into the "students" table
//     const insertedStudents = await Promise.all(
//       students.map(async (student) => {
//         const studentId = Object.keys(student)[0];
//         const name = Object.values(student)[0];
//         return client.query(
//           'INSERT INTO students (student_id, name) VALUES ($1, $2) RETURNING *',
//           [studentId, name]
//         );
//       }),
//     );

//     console.log(`Seeded ${insertedStudents.length} students`);

//     return insertedStudents;
//   } catch (error) {
//     console.error('Error seeding students:', error);
//     throw error;
//   }
// }



// async function seedIncidents(client) {
//   try {
//     // Drop the "incidents" table if it exists along with dependent objects
//     await client.sql`
//       DROP TABLE IF EXISTS incidents CASCADE;
//     `;
//     // Create the "incidents" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS incidents (
//         incidentId SERIAL PRIMARY KEY,
//         userID INT REFERENCES users(id),
//         comment TEXT DEFAULT NULL,
//         time TIMESTAMP,
//         student_id INT REFERENCES students(student_id)
//       );
//     `;

//     console.log(`Created "incidents" table`);

//     // Insert data into the "incidents" table
//     const insertedIncidents = await Promise.all(
//       incidents.map(
//         (incident) => client.sql`
//         INSERT INTO incidents (incidentId, userID, comment, time, student_id)
//         VALUES (${incident.incidentId}, ${incident.userId}, ${incident.comment}, ${incident.time}, ${incident.studentId})
//         ON CONFLICT (incidentId) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedIncidents.length} incidents`);

//     return {
//       createTable,
//       incidents: insertedIncidents,
//     };
//   } catch (error) {
//     console.error('Error seeding incidents:', error);
//     throw error;
//   }
// }

// async function seedLocations(client) {
//   try {
//     // Drop the "locations" table if it exists along with dependent objects
//     await client.sql`
//       DROP TABLE IF EXISTS locations CASCADE;
//     `;
//     // Create the "locations" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS locations (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL UNIQUE
//       );
//     `;

//     console.log(`Created "locations" table`);

//     // Insert data into the "locations" table
//     const insertedLocations = await Promise.all(
//       locations.map(async (location) => {
//         const [id, name] = Object.entries(location)[0];
//         return client.query(
//           'INSERT INTO locations (id, name) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING RETURNING *',
//           [id, name]
//         );
//       }),
//     );

//     console.log(`Seeded ${insertedLocations.length} locations`);

//     return {
//       createTable,
//       locations: insertedLocations,
//     };
//   } catch (error) {
//     console.error('Error seeding locations:', error);
//     throw error;
//   }
// }

// async function seedDevices(client) {
//   try {
//     // Drop the "devices" table if it exists along with dependent objects
//     await client.sql`
//       DROP TABLE IF EXISTS devices CASCADE;
//     `;
//     // Create the "devices" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS devices (
//         id SERIAL PRIMARY KEY,
//         userID INTEGER UNIQUE
//       );
//     `;

//     console.log(`Created "devices" table`);

//     // Insert data into the "devices" table
//     const insertedDevices = await Promise.all(
//       devices.map(async (device) => {
//         const [id, userID] = Object.entries(device)[0];
//         return client.query(
//           'INSERT INTO devices (id, userID) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING RETURNING *',
//           [id, userID]
//         );
//       }),
//     );

//     console.log(`Seeded ${insertedDevices.length} devices`);

//     return {
//       createTable,
//       devices: insertedDevices,
//     };
//   } catch (error) {
//     console.error('Error seeding devices:', error);
//     throw error;
//   }
// }

// async function seedSchedule(client) {
//   try {
//     // Drop the "schedule" table if it exists along with dependent objects
//     await client.sql`
//       DROP TABLE IF EXISTS schedule CASCADE;
//     `;

//     // Create the "schedule" table if it doesn't exist
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS schedule (
//         userID INT REFERENCES users(id),
//         day VARCHAR(50),
//         "7:30" INT,
//         "8:00" INT,
//         "8:30" INT,
//         "9:00" INT,
//         "9:30" INT,
//         "10:00" INT,
//         "10:30" INT,
//         "11:00" INT,
//         "11:30" INT,
//         "12:00" INT,
//         "12:30" INT,
//         "1:00" INT,
//         "1:30" INT,
//         "2:00" INT,
//         "2:30" INT
//       );
//     `;

//     console.log(`Created "schedule" table`);

//     // Insert data into the "schedule" table
//     const insertedSchedule = await Promise.all(
//       schedule.map(async (entry) => {
//         const { userID, day, ...timeSlots } = entry;
//         const columnNames = Object.keys(timeSlots).map(slot => `"${slot}"`).join(', ');
//         const columnValues = Object.values(timeSlots);

//         const query = `
//           INSERT INTO schedule (userID, day, ${columnNames}) 
//           VALUES ($1, $2, ${columnValues.map((_, i) => `$${i + 3}`).join(', ')})
//           RETURNING *;
//         `;

//         const values = [userID, day, ...columnValues];

//         return client.query(query, values);
//       }),
//     );

//     console.log(`Seeded ${insertedSchedule.length} schedule entries`);

//     return insertedSchedule;
//   } catch (error) {
//     console.error('Error seeding schedule:', error);
//     throw error;
//   }
// }






// async function main() {
//   const client = await db.connect();

//   await seedUsers(client);
//   await seedStudents(client)
//   await seedIncidents(client);
//   await seedLocations(client);
//   await seedDevices(client);
//   await seedSchedule(client);
//   await seedAuthInfo(client);

//   await client.end();
// }

// main().catch((err) => {
//   console.error(
//     'An error occurred while attempting to seed the database:',
//     err,
//   );
// });

const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedAuthInfo(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Insert data into the "users" table
    const hashedPassword1 = await bcrypt.hash('safestphrase', 10);
    const hashedPassword2 = await bcrypt.hash('passphrase', 10);
    const hashedPassword3 = await bcrypt.hash('codephrase', 10);
    const hashedPassword4 = await bcrypt.hash('passcode', 10);
    const hashedPassword5 = await bcrypt.hash('password', 10);
    const insertedAuthInfo = await client.sql`
      INSERT INTO authinfo (email, password) VALUES
      ('lee.robinson@school.edu', ${hashedPassword1}),
      ('hector.simpson@school.edu', ${hashedPassword2}),
      ('steven.tey@school.edu', ${hashedPassword3}),
      ('steph.dietz@school.edu', ${hashedPassword4}),
      ('michael.novotny@school.edu', ${hashedPassword5});
    `;

    console.log(`Seeded 5 authInfo`);

    return {
      authInfo: insertedAuthInfo,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedAuthInfo(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
