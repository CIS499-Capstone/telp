import { NextResponse } from "next/server";
import { accountSid, authToken } from "./twilioKeys";
import { fetchEmpID } from "@/app/lib/esp32_actions";
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
  const emp_id = await fetchEmpID(data.id);
  console.log(emp_id);
  const dt = new Date().toTimeString();
  console.log(dt);
  // client.messages
  //   .create({
  //     body: 'ALERT! Emergency in Mr. Jones CLASSROOM @' + dt,
  //     messagingServiceSid: 'MGdd0541aa1a1002062aeef44512e39993',
  //     to: '+18033894070'
  //   })
  //   .then(message => console.log(message.sid));
  return NextResponse.json({ message: emp_id}, { status: 200 });
}
