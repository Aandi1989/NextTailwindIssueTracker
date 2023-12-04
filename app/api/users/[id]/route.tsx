import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

// export function GET(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   // Fetch data from a database
//   // If not found, return 404 error
//   // Else return data
//   if (params.id > 10)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });

//   return NextResponse.json({ id: 1, name: "John" });
// }

export async function GET(
  request: NextRequest,
  { params }: {params: {id: string}}){

    const user = await prisma.user.findUnique({
      where: {id: parseInt(params.id)}
    });

    if(!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(user);
  }

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   // Validate the request body
//   // If invalid, return 400
//   const body = await request.json();
//   const validation = schema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   // Fetch the user with the given id
//   // If doesn't exist, return 404
//   if (params.id > 10)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   // update the user
//   // Return the updated user
//   return NextResponse.json({ id: 1, name: body.name });
// }

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }
  })
  
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email
    }
  })
  
  return NextResponse.json(updatedUser);
}



// export function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//     // Fetch user from dataBase
//     // If not found, return 404
//     if(params.id > 10)
//         return NextResponse.json({ error: 'User not found'}, {status: 404})
//     // Delete the user
//     // Return 200
//     return NextResponse.json({});
// }

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {id: parseInt(params.id)}
  }) 

    if(!user){
      return NextResponse.json({ error: 'User not found'}, {status: 404})
    }
        
  await prisma.user.delete({
    where: { id: user.id }
  });

  return NextResponse.json({});
}
