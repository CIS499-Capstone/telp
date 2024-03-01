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
  id: string;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  image_url: string;
  deviceid: string;
};

// export type CustomerField = {
//   id: string;
//   name: string;
// };

export type TeacherForm = {
  id: string;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  password: string;
  image_url: string;
  deviceid: string;
};

export type IncidentForm = {
  incidentid: string;
  name: string;
  comment: string;
  time: string;
};

export type AdminForm = {
  id: string;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  password: string;
  image_url: string;
};

export type ScheduleForm = {
  userid: string;
  day: string;
  "7:30": number;
  "8:00": number;
  "8:30": number;
  "9:00": number;
  "9:30": number;
  "10:00": number;
  "10:30": number;
  "11:00": number;
  "11:30": number;
  "12:00": number;
  "12:30": number;
  "1:00": number;
  "1:30": number;
  "2:00": number;
  "2:30": number;
};