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
 
const RegisterTeacher = FormSchema;
const RegisterAdmin = FormSchema.omit({deviceid: true});
const UpdateTeacher = FormSchema.omit({id: true, role: true, email: true, password: true, image_url: true})
const UpdateAdmin = FormSchema.omit({id: true, role: true, email: true, password: true, image_url: true, deviceid: true})

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
    userid: formData.get('id'),
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
      INSERT INTO devices (id, userID)
      VALUES (${deviceid}, ${id})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Teacher Device Info.',
    };
  }

  // Revalidate the cache for the teachers page and redirect the user.
  revalidatePath('/dashboard/teachers');
  redirect('/dashboard/teachers');
}

export async function registerAdmin(prevState: State, formData: FormData) {
  const validatedFields = RegisterAdmin.safeParse({
    userid: formData.get('id'),
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
 
  try {
    await sql`
      INSERT INTO users (id, role, name, email, image_url)
      VALUES (${id}, ${role}, ${name}, ${email}, ${image_url})
    `;
  } catch (error) {
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
        SET id = ${deviceid}
        WHERE userid = ${id}
      `;
  } catch (error) {
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
    await sql`DELETE FROM incidents WHERE userID = ${id}`;
    await sql`DELETE FROM devices WHERE userid = ${id}`;
    await sql`DELETE FROM authinfo WHERE users.id = ${id} AND users.email = authInfo.email`;
    await sql`DELETE FROM users AS user WHERE user.id = ${id}`;
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
    await sql`DELETE FROM authinfo WHERE users.id = ${id} AND users.email = authInfo.email`;
    await sql`DELETE FROM users AS user WHERE user.id = ${id}`;
    revalidatePath('/dashboard/admins');
    redirect('/dashboard/admins');
    return { message: 'Deleted Admin.' };
  } catch (error) {
    console.log("Not Deleted, Error: ", error);
    return { message: 'Database Error: Failed to Delete Admin.' };
  }
}