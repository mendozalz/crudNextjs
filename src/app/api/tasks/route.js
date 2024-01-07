import { NextResponse } from "next/server";
import { prisma } from "@/src/libs/prisma";

export async function GET() {
  const task = await prisma.task.findMany();
  return NextResponse.json(task);
}

export async function POST(req) {
  const { title, description } = await req.json();
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
}
