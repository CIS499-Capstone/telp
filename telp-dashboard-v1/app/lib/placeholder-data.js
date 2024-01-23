// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
  {
    id: 1,
    role: 'admin',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    password: 'safestphrase',
    assigned_room: 'LL1',
    num_incidents: 0,
    image_url: '/users/delba-de-oliveira.png',
  },
  {
    id: 2,
    role: 'teacher',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    password: 'safestphrase2',
    assigned_room: 'LL2',
    num_incidents: 5,
    image_url: '/users/lee-robinson.png',
  },
  {
    id: 3,
    role: 'teacher',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    password: 'safestphrase3',
    assigned_room: 'LL3',
    num_incidents: 2,
    image_url: '/users/hector-simpson.png',
  },
  {
    id: 4,
    role: 'teacher',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    password: 'safestphrase4',
    assigned_room: 'LL4',
    num_incidents: 1,
    image_url: '/users/steven-tey.png',
  },
  {
    id: 5,
    role: 'teacher',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    password: 'safestphrase5',
    assigned_room: 'LL5',
    num_incidents: 1,
    image_url: '/users/steph-dietz.png',
  },
  {
    id: 6,
    role: 'teacher',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    password: 'safestphrase6',
    assigned_room: 'LL6',
    num_incidents: 2,
    image_url: '/users/michael-novotny.png',
  },
  {
    id: 7,
    role: 'teacher',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    password: 'safestphrase7',
    assigned_room: 'LL7',
    num_incidents: 1,
    image_url: '/users/evil-rabbit.png',
  },
  {
    id: 8,
    role: 'teacher',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    password: 'safestphrase8',
    assigned_room: 'LL8',
    num_incidents: 2,
    image_url: '/users/emil-kowalski.png',
  },
  {
    id: 9,
    role: 'teacher',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    password: 'safestphrase9',
    assigned_room: 'LL9',
    num_incidents: 1,
    image_url: '/users/amy-burns.png',
  },
  {
    id: 10,
    role: 'teacher',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    password: 'safestphrase10',
    assigned_room: 'LL10',
    num_incidents: 0,
    image_url: '/users/balazs-orban.png',
  },
];


const incidents = [
  {
    incidentId: 0,
    userId: 2,
    comment: '',
    time: '2023-01-14 08:30:00',
  },
  {
    incidentId: 1,
    userId: 3,
    comment: 'pending further investigation',
    time: '2022-11-14 14:45:30',
  },
  {
    incidentId: 2,
    userId: 4,
    comment: 'false alarm',
    time: '2022-10-29 09:15:00',
  },
  {
    incidentId: 3,
    userId: 2,
    comment: 'kid literally tried to bribe me',
    time: '2023-09-10 18:20:45',
  },
  {
    incidentId: 4,
    userId: 5,
    comment: 'tantrum!!!',
    time: '2023-08-05 12:30:00',
  },
  {
    incidentId: 5,
    userId: 7,
    comment: '',
    time: '2023-07-16 07:55:20',
  },
  {
    incidentId: 6,
    userId: 6,
    comment: '',
    time: '2023-06-27 22:10:15',
  },
  {
    incidentId: 7,
    userId: 9,
    comment: 'I dont get paid enough for this',
    time: '2023-06-09 15:40:30',
  },
  {
    incidentId: 8,
    userId: 8,
    comment: '',
    time: '2023-06-17 10:05:00',
  },
  {
    incidentId: 9,
    userId: 3,
    comment: '[sighs]',
    time: '2023-06-07 05:22:45',
  },
  {
    incidentId: 10,
    userId: 2,
    comment: '',
    time: '2023-08-19 19:55:30',
  },
  {
    incidentId: 11,
    userId: 2,
    comment: '',
    time: '2023-06-03 14:18:10',
  },
  {
    incidentId: 12,
    userId: 6,
    comment: '',
    time: '2023-06-18 23:59:59',
  },
  {
    incidentId: 13,
    userId: 2,
    comment: 'room for improvement',
    time: '2023-10-04 03:30:15',
  },
  {
    incidentId: 14,
    userId: 8,
    comment: '',
    time: '2022-06-05 08:00:00',
  },
];



module.exports = {
  users,
  incidents,
};
