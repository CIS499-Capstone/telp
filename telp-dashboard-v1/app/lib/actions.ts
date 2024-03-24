'use server';

import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
const bcrypt = require('bcrypt');

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const FormSchema = z.object({
  id: z.string({
    invalid_type_error: "Please enter an ID number.",
  }),
  role: z.enum(['teacher', 'admin']),
  name: z.string({
    invalid_type_error: "Please enter a Name.",
  }),
  email: z.string({
    invalid_type_error: "Please enter an Email.",
  }),
  password: z.string({
    invalid_type_error: "Please enter a Password.",
  }),
  image_url: z.string({
    invalid_type_error: "Please enter an Image URL.",
  }),
  deviceid: z.string({
    invalid_type_error: "Please enter a Device number.",
  }),
});

const IncidentFormSchema = z.object({
  incidentid: z.string({
    invalid_type_error: "Please enter a valid incident ID.",
  }),
  name: z.string({
    invalid_type_error: "Please enter a name for the incident.",
  }),
  comment: z.string({
    invalid_type_error: "Please enter a comment for the incident.",
  }),
    student_id: z.string({
    invalid_type_error: "Please enter a student_id for the incident.",
  }),
  time: z.string({
    invalid_type_error: "Please enter a valid timestamp for the incident.",
  }),
});

const ScheduleFormSchema = z.object({
  userid: z.string({
    invalid_type_error: "Please enter an ID number.",
  }),
  day: z.string({
    invalid_type_error: "Please enter a day.",
  }),
  m730: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m800: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m830: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m900: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m930: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m1000: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m1030: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m1100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m1130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m1200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m1230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  m230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t730: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t800: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t830: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t900: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t930: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t1000: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t1030: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t1100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t1130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t1200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t1230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  t230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w730: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w800: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w830: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w900: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w930: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w1000: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w1030: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w1100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w1130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w1200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w1230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  w230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r730: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r800: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r830: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r900: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r930: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r1000: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r1030: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r1100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r1130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r1200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r1230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  r230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f730: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f800: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f830: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f900: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f930: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f1000: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f1030: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f1100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f1130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f1200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f1230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f100: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f130: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f200: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
  f230: z.string({
    invalid_type_error: "Please enter a room number.",
  }),
})
 
const RegisterTeacher = FormSchema;
const RegisterAdmin = FormSchema.omit({deviceid: true});
const UpdateTeacher = FormSchema.omit({id: true, role: true, email: true, password: true, image_url: true})
const UpdateAdmin = FormSchema.omit({id: true, role: true, email: true, password: true, image_url: true, deviceid: true})

const UpdateIncident = IncidentFormSchema.pick({ comment: true, student_id: true });

const UpdateSchedule = ScheduleFormSchema.omit({userid: true, day: true});

export type State = {
  errors?: {
    id?: string[];
    role?: string[];
    name?: string[];
    email?: string[];
    password?: string[];
    image_url?: string[];
    deviceid?: string[];
  };
  message?: string | null;
};

export async function registerTeacher(prevState: State, formData: FormData) {
  const validatedFields = RegisterTeacher.safeParse({
    id: formData.get('id'),
    role: 'teacher',
    name: formData.get('name'),
    email: formData.get('email') + '@school.edu',
    password: await bcrypt.hash(formData.get('password'), 10),
    image_url: formData.get('image_url'),
    deviceid: formData.get('deviceid'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Register Teacher.',
    };
  }
  
  // Prepare data for insertion into the database
  const { id, role, name, email, password, image_url, deviceid } = validatedFields.data;
 
  try {
    await sql`
      INSERT INTO users (id, role, name, email, image_url)
      VALUES (${id}, ${role}, ${name}, ${email}, ${image_url})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Teacher User Info.',
    };
  }

  try {
    await sql`
      INSERT INTO authinfo (email, password)
      VALUES (${email}, ${password})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Teacher Auth Info.',
    };
  }
 
  console.log(deviceid, id)
  try {
    await sql`
      INSERT INTO devices (deviceid, userID)
      VALUES (${deviceid}, ${id})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Teacher Device Info.',
    };
  }

  try {
    await sql`
      INSERT INTO schedule (userID, day, "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30")
      VALUES (${id}, 'Monday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 )
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Monday Schedule Info.',
    };
  }

  try {
    await sql`
      INSERT INTO schedule (userID, day, "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30")
      VALUES (${id}, 'Tuesday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 )
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Tuesday Schedule Info.',
    };
  }

  try {
    await sql`
      INSERT INTO schedule (userID, day, "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30")
      VALUES (${id}, 'Wednesday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 )
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Wednesday Schedule Info.',
    };
  }

  try {
    await sql`
      INSERT INTO schedule (userID, day, "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30")
      VALUES (${id}, 'Thursday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 )
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Thursday Schedule Info.',
    };
  }

  try {
    await sql`
      INSERT INTO schedule (userID, day, "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30")
      VALUES (${id}, 'Friday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 )
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Friday Schedule Info.',
    };
  }

  // Revalidate the cache for the teachers page and redirect the user.
  revalidatePath('/dashboard/teachers');
  redirect('/dashboard/teachers');
}

export async function registerAdmin(prevState: State, formData: FormData) {
  const validatedFields = RegisterAdmin.safeParse({
    id: formData.get('id'),
    role: 'admin',
    name: formData.get('name'),
    email: formData.get('email') + '@school.edu',
    password: await bcrypt.hash(formData.get('password'), 10),
    image_url: formData.get('image_url'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Register Admin.',
    };
  }
  
  // Prepare data for insertion into the database
  const { id, role, name, email, password, image_url } = validatedFields.data;
  console.log(validatedFields.data);

  try {
    await sql`
      INSERT INTO users (id, role, name, email, image_url)
      VALUES (${id}, ${role}, ${name}, ${email}, ${image_url})
    `;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Create Admin User Info.',
    };
  }

  try {
    await sql`
      INSERT INTO authinfo (email, password)
      VALUES (${email}, ${password})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Admin Auth Info.',
    };
  }

  // Revalidate the cache for the teachers page and redirect the user.
  revalidatePath('/dashboard/admins');
  redirect('/dashboard/admins');
}

export async function updateTeacher(id: string, formData: FormData) {
  console.log("ID: ", id);
  const { name, deviceid } = UpdateTeacher.parse({
    name: formData.get('name'),
    deviceid: formData.get('deviceid'),
  });
 
  try {
    await sql`
        UPDATE users
        SET name = ${name}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update User Info.' };
  }
 
  // try {
  //   await sql`
  //       UPDATE authinfo
  //       SET password = ${password}
  //       WHERE email = ${email}
  //     `;
  // } catch (error) {
  //   return { message: 'Database Error: Failed to Update Auth Info.' };
  // }
 
  try {
    await sql`
        UPDATE devices
        SET deviceid = ${deviceid}
        WHERE userid = ${id}
      `;
  } catch (error) {
    console.log("Error Device: ", error)
    return { message: 'Database Error: Failed to Update Device Info.' };
  }
 
  revalidatePath('/dashboard/teachers');
  redirect('/dashboard/teachers');
}

export async function updateAdmin(id: string, formData: FormData) {
  console.log("ID: ", id);
  const { name } = UpdateAdmin.parse({
    name: formData.get('name'),
  });
 
  try {
    await sql`
        UPDATE users
        SET name = ${name}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update User Info.' };
  }
 
  // try {
  //   await sql`
  //       UPDATE authinfo
  //       SET password = ${password}
  //       WHERE email = ${email}
  //     `;
  // } catch (error) {
  //   return { message: 'Database Error: Failed to Update Auth Info.' };
  // }
 
  revalidatePath('/dashboard/admins');
  redirect('/dashboard/admins');
}

export async function deleteTeacher(id: string) {
  console.log("Deleting ID: " + Number(id));
  try {
    await sql`DELETE FROM schedule WHERE userID = ${id}`;
    await sql`DELETE FROM incidents WHERE userID = ${id}`;
    await sql`DELETE FROM devices WHERE userid = ${id}`;
    await sql`DELETE FROM authinfo USING users WHERE users.id = ${id} AND users.email = authInfo.email`;
    await sql`DELETE FROM users WHERE users.id = ${Number(id)}`;
    revalidatePath('/dashboard/teachers');
    redirect('/dashboard/teachers');
    return { message: 'Deleted teacher.' };
  } catch (error) {
    console.log("Not Deleted, Error: ", error);
    return { message: 'Database Error: Failed to Delete Teacher.' };
  }
}

export async function deleteAdmin(id: string) {
  console.log("Deleting ID: " + Number(id));
  try {
    await sql`DELETE FROM authinfo USING users WHERE users.id = ${id} AND users.email = authInfo.email`;
    await sql`DELETE FROM users WHERE users.id = ${Number(id)}`;
    revalidatePath('/dashboard/admins');
    redirect('/dashboard/admins');
    return { message: 'Deleted Admin.' };
  } catch (error) {
    console.log("Not Deleted, Error: ", error);
    return { message: 'Database Error: Failed to Delete Admin.' };
  }
}

export async function updateIncident(id: string, formData: FormData) {

  try {
    const { comment, student_id } = UpdateIncident.parse(formDataToObject(formData));
    await sql`
      UPDATE incidents
      SET comment = ${comment},
        student_id = ${student_id}
      WHERE incidentid = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Incident Info.' };
  }

  // Revalidate the cache for the appropriate page
  revalidatePath('/dashboard');

  // Redirect the user to the appropriate dashboard
  redirect('/dashboard');
}
// Helper function to convert FormData to plain object
function formDataToObject(formData: FormData): Record<string, string> {
  const object: Record<string, string> = {};
  formData.forEach((value, key) => {
    object[key] = value.toString();
  });
  return object;
}

export async function updateSchedule(id: string, formData: FormData) {
  console.log("ID: ", id);
  const { 
    m730, m800, m830, m900, m930, m1000, m1030, m1100, m1130, m1200, m1230, m100, m130, m200, m230,
    t730, t800, t830, t900, t930, t1000, t1030, t1100, t1130, t1200, t1230, t100, t130, t200, t230,
    w730, w800, w830, w900, w930, w1000, w1030, w1100, w1130, w1200, w1230, w100, w130, w200, w230,
    r730, r800, r830, r900, r930, r1000, r1030, r1100, r1130, r1200, r1230, r100, r130, r200, r230,
    f730, f800, f830, f900, f930, f1000, f1030, f1100, f1130, f1200, f1230, f100, f130, f200, f230
  } = UpdateSchedule.parse({
    m730: formData.get('m730'),
    m800: formData.get('m800'),
    m830: formData.get('m830'),
    m900: formData.get('m900'),
    m930: formData.get('m930'),
    m1000: formData.get('m1000'),
    m1030: formData.get('m1030'),
    m1100: formData.get('m1100'),
    m1130: formData.get('m1130'),
    m1200: formData.get('m1200'),
    m1230: formData.get('m1230'),
    m100: formData.get('m100'),
    m130: formData.get('m130'),
    m200: formData.get('m200'),
    m230: formData.get('m230'),
    t730: formData.get('t730'),
    t800: formData.get('t800'),
    t830: formData.get('t830'),
    t900: formData.get('t900'),
    t930: formData.get('t930'),
    t1000: formData.get('t1000'),
    t1030: formData.get('t1030'),
    t1100: formData.get('t1100'),
    t1130: formData.get('t1130'),
    t1200: formData.get('t1200'),
    t1230: formData.get('t1230'),
    t100: formData.get('t100'),
    t130: formData.get('t130'),
    t200: formData.get('t200'),
    t230: formData.get('t230'),
    w730: formData.get('w730'),
    w800: formData.get('w800'),
    w830: formData.get('w830'),
    w900: formData.get('w900'),
    w930: formData.get('w930'),
    w1000: formData.get('w1000'),
    w1030: formData.get('w1030'),
    w1100: formData.get('w1100'),
    w1130: formData.get('w1130'),
    w1200: formData.get('w1200'),
    w1230: formData.get('w1230'),
    w100: formData.get('w100'),
    w130: formData.get('w130'),
    w200: formData.get('w200'),
    w230: formData.get('w230'),
    r730: formData.get('r730'),
    r800: formData.get('r800'),
    r830: formData.get('r830'),
    r900: formData.get('r900'),
    r930: formData.get('r930'),
    r1000: formData.get('r1000'),
    r1030: formData.get('r1030'),
    r1100: formData.get('r1100'),
    r1130: formData.get('r1130'),
    r1200: formData.get('r1200'),
    r1230: formData.get('r1230'),
    r100: formData.get('r100'),
    r130: formData.get('r130'),
    r200: formData.get('r200'),
    r230: formData.get('r230'),
    f730: formData.get('f730'),
    f800: formData.get('f800'),
    f830: formData.get('f830'),
    f900: formData.get('f900'),
    f930: formData.get('f930'),
    f1000: formData.get('f1000'),
    f1030: formData.get('f1030'),
    f1100: formData.get('f1100'),
    f1130: formData.get('f1130'),
    f1200: formData.get('f1200'),
    f1230: formData.get('f1230'),
    f100: formData.get('f100'),
    f130: formData.get('f130'),
    f200: formData.get('f200'),
    f230: formData.get('f230'),
  });

  try {
    await sql`
        UPDATE schedule
        SET "7:30" = ${m730},
            "8:00" = ${m800},
            "8:30" = ${m830},
            "9:00" = ${m900},
            "9:30" = ${m930},
            "10:00" = ${m1000},
            "10:30" = ${m1030},
            "11:00" = ${m1100},
            "11:30" = ${m1130},
            "12:00" = ${m1200},
            "12:30" = ${m1230},
            "1:00" = ${m100},
            "1:30" = ${m130},
            "2:00" = ${m200},
            "2:30" = ${m230}
        WHERE userid = ${id} AND day = 'Monday'
      `;
  } catch (error) {
    console.log("M:", error);
    return { message: 'Database Error: Failed to Update Monday Schedule Info.' };
  }
 
  try {
    await sql`
        UPDATE schedule
        SET "7:30" = ${t730},
            "8:00" = ${t800},
            "8:30" = ${t830},
            "9:00" = ${t900},
            "9:30" = ${t930},
            "10:00" = ${t1000},
            "10:30" = ${t1030},
            "11:00" = ${t1100},
            "11:30" = ${t1130},
            "12:00" = ${t1200},
            "12:30" = ${t1230},
            "1:00" = ${t100},
            "1:30" = ${t130},
            "2:00" = ${t200},
            "2:30" = ${t230}
        WHERE userid = ${id} AND day = 'Tuesday'
      `;
  } catch (error) {
    console.log("T:", error);
    return { message: 'Database Error: Failed to Update Tuseday Schedule Info.' };
  }
 
  try {
    await sql`
        UPDATE schedule
        SET "7:30" = ${w730},
            "8:00" = ${w800},
            "8:30" = ${w830},
            "9:00" = ${w900},
            "9:30" = ${w930},
            "10:00" = ${w1000},
            "10:30" = ${w1030},
            "11:00" = ${w1100},
            "11:30" = ${w1130},
            "12:00" = ${w1200},
            "12:30" = ${w1230},
            "1:00" = ${w100},
            "1:30" = ${w130},
            "2:00" = ${w200},
            "2:30" = ${w230}
        WHERE userid = ${id} AND day = 'Wednesday'
      `;
  } catch (error) {
    console.log("W:", error);
    return { message: 'Database Error: Failed to Update Wednesday Schedule Info.' };
  }
 
  try {
    await sql`
        UPDATE schedule
        SET "7:30" = ${r730},
            "8:00" = ${r800},
            "8:30" = ${r830},
            "9:00" = ${r900},
            "9:30" = ${r930},
            "10:00" = ${r1000},
            "10:30" = ${r1030},
            "11:00" = ${r1100},
            "11:30" = ${r1130},
            "12:00" = ${r1200},
            "12:30" = ${r1230},
            "1:00" = ${r100},
            "1:30" = ${r130},
            "2:00" = ${r200},
            "2:30" = ${r230}
        WHERE userid = ${id} AND day = 'Thursday'
      `;
  } catch (error) {
    console.log("R:", error);
    return { message: 'Database Error: Failed to Update Thursday Schedule Info.' };
  }
 
  try {
    await sql`
        UPDATE schedule
        SET "7:30" = ${f730},
            "8:00" = ${f800},
            "8:30" = ${f830},
            "9:00" = ${f900},
            "9:30" = ${f930},
            "10:00" = ${f1000},
            "10:30" = ${f1030},
            "11:00" = ${f1100},
            "11:30" = ${f1130},
            "12:00" = ${f1200},
            "12:30" = ${f1230},
            "1:00" = ${f100},
            "1:30" = ${f130},
            "2:00" = ${f200},
            "2:30" = ${f230}
        WHERE userid = ${id} AND day = 'Friday'
      `;
  } catch (error) {
    console.log("F:", error);
    return { message: 'Database Error: Failed to Update Friday Schedule Info.' };
  }
 
  revalidatePath('/dashboard/teachers');
  redirect('/dashboard/teachers');
}