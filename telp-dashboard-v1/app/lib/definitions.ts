// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Users = {
  id: number;
  role: 'teacher' | 'admin';
  name: string;
  email: string;
  password: string;
  assigned_room: string;
  num_incidents: number;
  image_url: string;
};

export type Incidents ={
  incidentId: number;
  userId: number;
  comment: string;
  time: string;  
}
// definitions.ts
// export interface CommentData {
//   image_url: string;
//   name: string;
//   email: string;
//   comment: string;
// }


/* TODO: Load Schedule DataStructure in ESP32
export type Schedule = {
  scheduleId: number;
  user_id: number;
  day_of_week: string;
  start_time: string;
  end_time: string;
  class_name: string;
};
*/


// In TypeScript, this is called a string union type.
// It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//   status: 'pending' | 'paid';


