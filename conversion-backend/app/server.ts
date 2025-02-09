import { Application, Router, oakCors } from "../deps.ts";

const router = new Router();

const appServer = () => {
  router.get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  });

  const app = new Application();
  app.use(oakCors());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen({ port: 8080 });
  console.log("Listening on port 8080...");
};

export { appServer };
