// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Users = {
  id: string;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  image_url: string;
};

export type AuthInfo = {
  email: string;
  password: string;
};

export type Incidents ={
  incidentId: number;
  userId: number;
  comment: string;
  time: string; 
  studentId: number;
}


// In TypeScript, this is called a string union type.
// It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//   status: 'pending' | 'paid';



// -----------------------------------------------------------------------------------------------------------------

export type UsersTable = {
  userid: string;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  image_url: string;
  id: string;
};

// export type CustomerField = {
//   id: string;
//   name: string;
// };

export type TeacherForm = {
  userid: string;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  password: string;
  image_url: string;
  id: string;
};

export type AdminForm = {
  id: string;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  password: string;
  image_url: string;
};
