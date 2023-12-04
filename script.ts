import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.createMany({
    data: [
      {
        name: "Mayso",
        age: 28,
        email: "maysoka@gmail.com",
      },
      { name: "Omego", age: 29, email: "omegoken@gmailcom" },
    ],
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
