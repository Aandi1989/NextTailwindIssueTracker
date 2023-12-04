import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

// export function GET(request: NextRequest) {
//   return NextResponse.json([
//     { id: 1, name: "John" },
//     { id: 2, name: "Tony" },
//   ]);
// }

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  
  return NextResponse.json(users);
}

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   // Validate
//   // If invalid, return 400
//   const validation = schema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   // Else, return
//   return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
// }

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // If invalid, return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Else, return

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  })

  if(user){
    return NextResponse.json({error: 'User already exist'}, {status: 400})
  }
  
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  });
  return NextResponse.json(newUser, { status: 201 });
}
