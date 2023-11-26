import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "Tony" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // If invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // Else, return
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
