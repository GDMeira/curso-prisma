import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true }
  })
  console.log(students);

  const studentsJobless = await prisma.student.groupBy({
    by: ["class", "jobId"],
    _count: { id: true },
    having: {
      jobId: { equals: null }
    }
  })
  console.log(studentsJobless);
})()