// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
  {
    id: 1000,
    role: 'admin',
    name: 'Delba de Oliveira',
    email: 'delba.oliveira@school.edu',
    //password: 'safestphrase',
    //assigned_room: 'LL1',
    image_url: '/users/delba-de-oliveira.png',
  },
  {
    id: 1001,
    role: 'teacher',
    name: 'Lee Robinson',
    email: 'lee.robinson@school.edu',
    //password: 'safestphrase2',
    //assigned_room: 'LL2',
    image_url: '/users/lee-robinson.png',
  },
  {
    id: 1002,
    role: 'teacher',
    name: 'Hector Simpson',
    email: 'hector.simpson@school.edu',
    //password: 'safestphrase3',
    //assigned_room: 'LL3',
    image_url: '/users/hector-simpson.png',
  },
  {
    id: 1003,
    role: 'teacher',
    name: 'Steven Tey',
    email: 'steven.tey@school.edu',
    //password: 'safestphrase4',
    //assigned_room: 'LL4',
    image_url: '/users/steven-tey.png',
  },
  {
    id: 1004,
    role: 'teacher',
    name: 'Steph Dietz',
    email: 'steph.dietz@school.edu',
    //password: 'safestphrase5',
    //assigned_room: 'LL5',
    image_url: '/users/steph-dietz.png',
  },
  {
    id: 1005,
    role: 'teacher',
    name: 'Michael Novotny',
    email: 'michael.novotny@school.edu',
    //password: 'safestphrase6',
    //assigned_room: 'LL6',
    image_url: '/users/michael-novotny.png',
  },/*
  {
    id: 1006,
    role: 'teacher',
    name: 'Evil Rabbit',
    email: 'evil.rabbit@school.edu',
    password: 'safestphrase7',
    //assigned_room: 'LL7',
    num_incidents: 1,
    image_url: '/users/evil-rabbit.png',
  },
  {
    id: 1007,
    role: 'teacher',
    name: 'Emil Kowalski',
    email: 'emil.kowalski@school.edu',
    password: 'safestphrase8',
    //assigned_room: 'LL8',
    num_incidents: 2,
    image_url: '/users/emil-kowalski.png',
  },
  {
    id: 1008,
    role: 'teacher',
    name: 'Amy Burns',
    email: 'amy.burns@school.edu',
    password: 'safestphrase9',
    //assigned_room: 'LL9',
    num_incidents: 1,
    image_url: '/users/amy-burns.png',
  },
  {
    id: 1009,
    role: 'teacher',
    name: 'Balazs Orban',
    email: 'balazs.orban@school.edu',
    password: 'safestphrase10',
    //assigned_room: 'LL10',
    num_incidents: 0,
    image_url: '/users/balazs-orban.png',
  },*/
];

const authinfo = [
  { email: "delba.oliveira@school.edu", password: 'safestphrase2' },
  { email: 'lee.robinson@school.edu', password: 'safestphrase2' },
  { email: 'hector.simpson@school.edu', password: 'safestphrase3' },
  { email: 'steven.tey@school.edu', password: 'safestphrase4' },
  { email: 'steph.dietz@school.edu', password: 'safestphrase5' },
  { email: 'michael.novotny@school.edu', password: 'safestphrase6' },
];



const incidents = [
  {
    "incidentId": 1,
    "userId": 1001,
    "comment": "Student was causing a major disturbance, talking loudly during the lecture.",
    "time": "2024-02-02 07:45:00",
    "studentId": 7001
  },
  {
    "incidentId": 2,
    "userId": 1002,
    "comment": "Disruptive behavior in the classroom; the student was confrontational.",
    "time": "2024-02-02 08:15:00",
    "studentId": 7002
  },
  {
    "incidentId": 3,
    "userId": 1003,
    "comment": "Student refused to follow instructions and was not cooperating.",
    "time": "2024-02-02 09:00:00",
    "studentId": 7003
  },
  {
    "incidentId": 4,
    "userId": 1004,
    "comment": "Caught cheating during an exam; a major incident of academic dishonesty.",
    "time": "2024-02-02 10:30:00",
    "studentId": 7004
  },
  {
    "incidentId": 5,
    "userId": 1005,
    "comment": "Using a mobile phone during class; confrontational when asked to stop.",
    "time": "2024-02-02 11:45:00",
    "studentId": 7005
  },
  {
    "incidentId": 6,
    "userId": 1001,
    "comment": "Student was sleeping in the back row, causing a major disturbance.",
    "time": "2024-02-03 07:35:00",
    "studentId": 7006
  },
  {
    "incidentId": 7,
    "userId": 1002,
    "comment": "Engaged in a verbal altercation with a peer; confrontational behavior.",
    "time": "2024-02-03 08:45:00",
    "studentId": 7007
  },
  {
    "incidentId": 8,
    "userId": 1003,
    "comment": "Repeatedly disrupting the class with loud laughter; not cooperating with the teacher.",
    "time": "2024-02-03 10:00:00",
    "studentId": 7008
  },
  {
    "incidentId": 9,
    "userId": 1004,
    "comment": "Refusal to participate in group activities; confrontational attitude.",
    "time": "2024-02-03 11:15:00",
    "studentId": 7009
  },
  {
    "incidentId": 10,
    "userId": 1005,
    "comment": "Inappropriate language used towards the teacher; a major confrontation.",
    "time": "2024-02-03 12:30:00",
    "studentId": 7010
  },
  {
    "incidentId": 11,
    "userId": 1001,
    "comment": "Caught skipping class; a major disturbance to the school routine.",
    "time": "2024-02-04 07:55:00",
    "studentId": 7011
  },
  {
    "incidentId": 12,
    "userId": 1002,
    "comment": "Distracting others by playing music on headphones; confrontational when approached.",
    "time": "2024-02-04 09:10:00",
    "studentId": 7012
  },
  {
    "incidentId": 13,
    "userId": 1003,
    "comment": "Defacing school property with graffiti; a major act of vandalism.",
    "time": "2024-02-04 10:25:00",
    "studentId": 7013
  },
  {
    "incidentId": 14,
    "userId": 1004,
    "comment": "Unauthorized use of electronic devices during a test; confrontational when caught.",
    "time": "2024-02-04 11:40:00",
    "studentId": 7014
  },
  {
    "incidentId": 15,
    "userId": 1005,
    "comment": "Failure to complete assigned homework; confrontational response to teacher inquiry.",
    "time": "2024-02-04 12:55:00",
    "studentId": 7015
  },
  {
    "incidentId": 16,
    "userId": 1001,
    "comment": "Late arrival to class without a valid excuse; causing a major disturbance.",
    "time": "2024-02-05 07:40:00",
    "studentId": 7016
  },
  {
    "incidentId": 17,
    "userId": 1002,
    "comment": "Disruptive behavior by constantly leaving the classroom; confrontational attitude.",
    "time": "2024-02-05 09:00:00",
    "studentId": 7017
  },
  {
    "incidentId": 18,
    "userId": 1003,
    "comment": "Argumentative attitude towards the teacher; causing a major disturbance.",
    "time": "2024-02-05 10:15:00",
    "studentId": 7018
  },
  {
    "incidentId": 19,
    "userId": 1004,
    "comment": "Failure to comply with the dress code; confrontational response to school policy.",
    "time": "2024-02-05 11:30:00",
    "studentId": 7019
  },
  {
    "incidentId": 20,
    "userId": 1005,
    "comment": "Excessive talking during an exam; confrontational when reminded of exam rules.",
    "time": "2024-02-05 12:45:00",
    "studentId": 7020
  },
  {
    "incidentId": 21,
    "userId": 1001,
    "comment": "Using a mobile phone for non-educational purposes; major disturbance to the class.",
    "time": "2024-02-06 07:50:00",
    "studentId": 7021
  },
  {
    "incidentId": 22,
    "userId": 1002,
    "comment": "Refusal to complete in-class assignments; confrontational behavior.",
    "time": "2024-02-06 09:05:00",
    "studentId": 7022
  },
  {
    "incidentId": 23,
    "userId": 1003,
    "comment": "Creating a disturbance by playing music loudly; confrontational when asked to stop.",
    "time": "2024-02-06 10:20:00",
    "studentId": 7023
  },
  {
    "incidentId": 24,
    "userId": 1004,
    "comment": "Disrespectful behavior towards a staff member; a major incident of insubordination.",
    "time": "2024-02-06 11:35:00",
    "studentId": 7024
  },
  {
    "incidentId": 25,
    "userId": 1005,
    "comment": "Sleeping during a presentation; causing a major disturbance in the class.",
    "time": "2024-02-06 12:50:00",
    "studentId": 7025
  }
];

const schedule = [
  {
    "userID": 1001,
    "day": "Monday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 2,
    "9:30": 2,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1001,
    "day": "Tuesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 3,
    "9:30": 3,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1001,
    "day": "Wednesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 4,
    "9:30": 4,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1001,
    "day": "Thursday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 5,
    "9:30": 5,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1001,
    "day": "Friday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 8,
    "9:30": 8,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1002,
    "day": "Monday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 2,
    "9:30": 2,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1002,
    "day": "Tuesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 3,
    "9:30": 3,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1002,
    "day": "Wednesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 4,
    "9:30": 4,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1002,
    "day": "Thursday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 3,
    "9:30": 3,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1002,
    "day": "Friday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 2,
    "9:30": 2,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1003,
    "day": "Monday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 3,
    "9:30": 3,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1003,
    "day": "Tuesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 4,
    "9:30": 4,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1003,
    "day": "Wednesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 5,
    "9:30": 5,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1003,
    "day": "Thursday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 6,
    "9:30": 6,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1003,
    "day": "Friday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 2,
    "9:30": 2,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1004,
    "day": "Monday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 3,
    "9:30": 3,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1004,
    "day": "Tuesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 4,
    "9:30": 4,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1004,
    "day": "Wednesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 8,
    "9:30": 8,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1004,
    "day": "Thursday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 5,
    "9:30": 5,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1004,
    "day": "Friday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 4,
    "9:30": 4,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1005,
    "day": "Monday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 8,
    "9:30": 8,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1005,
    "day": "Tuesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 5,
    "9:30": 5,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1005,
    "day": "Wednesday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 4,
    "9:30": 4,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1005,
    "day": "Thursday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 3,
    "9:30": 3,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  },
  {
    "userID": 1005,
    "day": "Friday",
    "7:30": 1,
    "8:00": 1,
    "8:30": 1,
    "9:00": 8,
    "9:30": 8,
    "10:00": 1,
    "10:30": 1,
    "11:00": 7,
    "11:30": 6,
    "12:00": 1,
    "12:30": 1,
    "1:00": 1,
    "1:30": 1,
    "2:00": 1,
    "2:30": 1
  }


  // Other entries follow the same pattern
];

const devices = [
  { 1: 1001 },
  { 2: 1002 },
  { 3: 1003 },
  { 4: 1004 },
  { 5: 1005 }
]

const locations = [
  { 1: "Classroom" },
  { 2: "Music" },
  { 3: "PE" },
  { 4: "Library" },
  { 5: "Computer Lab" },
  { 6: "Recess" },
  { 7: "Lunch" },
  { 8: "Art" }
]

const students = [
  { 7001: "John Doe" }, { 7002: "Jane Doe" }, { 7003: "Alex Johnson" }, { 7004: "Emily Smith" }, { 7005: "Michael Brown" },
  { 7006: "Jessica Wilson" }, { 7007: "David Lee" }, { 7008: "Sarah Taylor" }, { 7009: "Daniel Martinez" },
  { 7010: "Emma Anderson" }, { 7011: "Samantha Johnson" }, { 7012: "Kevin Wilson" },
  { 7013: "Rachel Davis" }, { 7014: "Christopher Thompson" },
  { 7015: "Olivia Martinez" }, { 7016: "Brandon Garcia" }, { 7017: "Lauren Miller" },
  { 7018: "Nicholas Hernandez" },
  { 7019: "Ashley Lopez" }, { 7020: "Jonathan Gonzalez" }, { 7021: "Amanda Perez" },
  { 7022: "Joshua Adams" }, { 7023: "Nicole Ramirez" }, { 7024: "Tyler King" }, { 7025: "Megan Scott" },
]



module.exports = {
  users,
  incidents,
  schedule,
  devices,
  locations,
  authinfo,
  students,
};
