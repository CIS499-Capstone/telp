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
const UpdateInvoice = FormSchema;

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

// export async function updateInvoice(id: string, formData: FormData) {
//   const { customerId, amount, status } = UpdateInvoice.parse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });
 
//   const amountInCents = amount * 100;
 
//   try {
//     await sql`
//         UPDATE invoices
//         SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//         WHERE id = ${id}
//       `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update Invoice.' };
//   }
 
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
// }

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}