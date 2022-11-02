import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import Fastify from "fastify";

const prisma = new PrismaClient({
  log: ["query"],
});

async function bootstrap() {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: true,
  });

  app.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });

  await app.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
