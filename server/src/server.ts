import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

const prisma = new PrismaClient({
  log: ["query"],
});

async function bootstrap() {
  const app = Fastify({
    logger: true,
  });

  app.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });

  await app.listen({ port: 3333 });
}

bootstrap();
