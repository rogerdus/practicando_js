import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET() {
  try {
    const notes = await prisma.note.findMany()
    return NextResponse.json(notes)
  } catch (error) {

    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 })
  }

}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json()
    const note = await prisma.note.create({
      data: {
        title,
        content
      }
    })
    return NextResponse.json(note)
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 })
  }

}