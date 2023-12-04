import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: {
      name: "Hillary",
      age: 28,
      email: "hillarymuboka@gmail.com"
      
    },
  })
  console.log(user)
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
