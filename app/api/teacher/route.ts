import { prisma } from "@/prisma";
import { teacherSchema } from "@/schema/teacher";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const teachers = await prisma.teacher.findMany({
      include: {
        department: true,
      },
    });
    return NextResponse.json(teachers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const teacher = await req.json();
    const isValidateTeacher = await teacherSchema.validate(teacher, {
      abortEarly: false,
    });

    if (isValidateTeacher) {
      await prisma.teacher.create({
        data: teacher,
      });
    }
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error?.errors }, { status: 400 });
  }
};
