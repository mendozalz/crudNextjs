import { NextResponse } from "next/server";
import { prisma } from "@/src/libs/prisma";

export async function GET(req, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(req, { params }) {
  const data = await req.json();
  const taskUpdate = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(taskUpdate);
}

export async function DELETE(req, { params }) {
  try {
    const taskDel = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(taskDel);
  } catch (error) {
    return NextResponse.json("No hay nada que eliminar");
  }
}
