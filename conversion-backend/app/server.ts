import { Application, Router, oakCors } from "../deps.ts";
import { convertNumber } from "./numeral-conversion.ts";

const router = new Router();

const appServer = () => {
  router.get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  });
  router.get("/romannumeral", (ctx) => {
    const queryParams = ctx.request.url.searchParams;
    const query = queryParams.get("query");

    if (!query) {
      ctx.response.status = 400;
      ctx.response.body = { error: "query is required" };
      return;
    }
    const romanNumeral = convertNumber(+query);
    ctx.response.body = {
      message: `Converted ${query} to roman numerals`,
      data: romanNumeral,
    };
  });

  const app = new Application();
  app.use(oakCors());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen({ port: 8080 });
  console.log("Listening on port 8080...");
};

export { appServer };
