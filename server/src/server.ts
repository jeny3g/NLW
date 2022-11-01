import Fastify from "fastify";

async function bootstrap() {
  const app = Fastify({
    logger: true,
  });

  app.get("/pools/count", async () => {
    return { count: 0 };
  });∏

  await app.listen({ port: 3333 });
}

bootstrap();
