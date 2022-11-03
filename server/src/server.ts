import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { poolRoutes } from "./routes/pool";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";

async function bootstrap() {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: true,
  });

  await app.register(jwt, {
    secret: "nlwcopa", // Em producao, usar variavel de ambiente
  });

  await app.register(poolRoutes);
  await app.register(authRoutes);
  await app.register(gameRoutes);
  await app.register(guessRoutes);
  await app.register(userRoutes);

  await app.listen({ port: 3333, host: "0.0.0.0" });
  await app.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
