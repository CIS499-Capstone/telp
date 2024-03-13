import { NextResponse } from "next/server";
import { accountSid, authToken } from "./twilioKeys";
import { fetchEmpData, addIncident } from "@/app/lib/esp32_actions";
const client = require('twilio')(accountSid, authToken);
// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want

  const data = await request.json();
  const emp_name = await fetchEmpData(data.id);
  const dt = new Date().toTimeString();
  // client.messages
  //   .create({
  //     body: 'ALERT! Emergency with ' + emp_name['name'] + " in " + emp_name['location'] + ' @ ' + dt,
  //     messagingServiceSid: 'MGdd0541aa1a1002062aeef44512e39993',
  //     to: '+18033894070'
  //   })
  //   .then(message => console.log(message.sid));
  await addIncident(data.id);
  return NextResponse.json({ message: emp_name}, { status: 200 });
}
