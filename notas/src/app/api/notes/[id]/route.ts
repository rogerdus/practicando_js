import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";

interface Params {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: Params) {
    try {
        const note = await prisma.note.findFirst({
            where: {
                id: Number(params.id)
            }
        });

        if (!note) return NextResponse.json({ error: "Note not found" }, { status: 404 });

        return NextResponse.json(note);

    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: Params) {
    try {
        const deletedNote = await prisma.note.delete({
            where: {
                id: Number(params.id)
            }
        });

        if (!deletedNote) return NextResponse.json({ error: "Note not found" }, { status: 404 });

        return NextResponse.json(deletedNote);

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code === "P2025")
                return NextResponse.json({ error: "Note not found" }, { status: 404 });
        }
            return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function PUT(request: Request, { params }: Params) {
    try{
        const { title, content } = await request.json();

        const updatedNote = await  prisma.note.update({
            where: {
                id: Number(params.id)
            },
            data: {
                title,
                content
            }
        });

        return NextResponse.json(updatedNote);

    }catch(error){
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 })
    }
}