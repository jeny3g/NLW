import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "john.doe@gmail.com",
      avatarUrl: "https://github.com/jeny3g.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Pool 1",
      code: "1234",
      ownerId: user.id,
      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-02T12:54:44.229Z",
      fistTeamContryCode: "DE",
      secondTeamContryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-02T12:54:44.229Z",
      fistTeamContryCode: "BR",
      secondTeamContryCode: "AR",

      guesses: {
        create: {
          fistTeamPoints: 1,
          secondTeamPoints: 2,

          participant: {
            connect: {
              userId_poolId: {
                poolId: pool.id,
                userId: user.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
