import { Application, Router, oakCors } from "../deps.ts";
import { convertNumber } from "./converters/roman-numeral/numeral-conversion.ts";
import { numberToBinary } from "./converters/binary/binary-conversion.ts";

const router = new Router();

const appServer = () => {
  // test route at root, could be used for a health check
  router.get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  });

  router.get("/romannumeral", (ctx) => {
    const queryParams = ctx.request.url.searchParams;
    const query = queryParams.get("query");

    if (!query) {
      ctx.response.status = 400;
      ctx.response.body = { error: "query is required." };
      return;
    }
    try {
      const romanNumeral = convertNumber(+query);
      ctx.response.body = {
        message: `Converted ${query} to roman numerals`,
        data: romanNumeral,
      };
      // deno-lint-ignore no-explicit-any
    } catch (error: any) {
      ctx.response.status = error.statusCode;
      ctx.response.body = { error: error.message };
    }
  });

  router.get("/binary", (ctx) => {
    const queryParams = ctx.request.url.searchParams;
    const query = queryParams.get("query");

    if (!query) {
      ctx.response.status = 400;
      ctx.response.body = { error: "query is required." };
      return;
    }
    try {
      const binaryNumber = numberToBinary(+query);
      ctx.response.body = {
        message: `Converted ${query} to binary`,
        data: binaryNumber,
      };
      // deno-lint-ignore no-explicit-any
    } catch (error: any) {
      ctx.response.status = error.statusCode;
      ctx.response.body = { error: error.message };
    }
  });

  const app = new Application();
  app.use(oakCors());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen({ port: 8080 });
  console.log("Listening on port 8080...");
};

export { appServer };
