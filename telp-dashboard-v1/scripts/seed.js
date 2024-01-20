const { db } = require('@vercel/postgres');
const {
  users,
  incidents
} = require('../app/lib/placeholder-data.js');

const bcrypt = require('bcrypt');

// async function seedUsers(client) {
//   try {
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         role VARCHAR(50) CHECK (role IN ('teacher', 'admin')), -- Ensuring role is either 'teacher' or 'admin'
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL,
//         assigned_room VARCHAR(100),
//         num_incidents INT DEFAULT 0,
//         image_url TEXT
//       );
//     `;

//     console.log(`Created "users" table`);

//     // Insert data into the "users" table
//     const insertedUsers = await Promise.all(
//       users.map(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.query`
//           INSERT INTO users (id, role, name, email, password, assigned_room, num_incidents, image_url)
//           VALUES (${user.id}, ${user.role}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.assigned_room}, ${user.num_incidents}, ${user.image_url})
//           ON CONFLICT (id) DO NOTHING
//           RETURNING *;`;
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

async function seedUsers(client) {
  try {
    // Drop the "users" table if it exists
    await client.sql`DROP TABLE IF EXISTS users;`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        role VARCHAR(50) CHECK (role IN ('teacher', 'admin')),
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        assigned_room VARCHAR(100),
        num_incidents INT DEFAULT 0,
        image_url TEXT
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.query(
          'INSERT INTO users (id, role, name, email, password, assigned_room, num_incidents, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT (id) DO NOTHING RETURNING *',
          [user.id, user.role, user.name, user.email, hashedPassword, user.assigned_room, user.num_incidents, user.image_url]
        );
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}



async function seedIncidents(client) {
  try {
    // Drop the "incidents" table if it exists along with dependent objects
    await client.sql`
      DROP TABLE IF EXISTS incidents CASCADE;
    `;
    // Create the "incidents" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS incidents (
        incidentId SERIAL PRIMARY KEY,
        userID INT REFERENCES users(id),
        comment TEXT DEFAULT NULL,
        time TIMESTAMP
      );
    `;

    console.log(`Created "incidents" table`);

    // Insert data into the "incidents" table
    const insertedIncidents = await Promise.all(
      incidents.map(
        (incident) => client.sql`
        INSERT INTO incidents (incidentId, userID, comment, time)
        VALUES (${incident.incidentId}, ${incident.userID}, ${incident.comment}, ${incident.time})
        ON CONFLICT (incidentId) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedIncidents.length} incidents`);

    return {
      createTable,
      incidents: insertedIncidents,
    };
  } catch (error) {
    console.error('Error seeding incidents:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedIncidents(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
