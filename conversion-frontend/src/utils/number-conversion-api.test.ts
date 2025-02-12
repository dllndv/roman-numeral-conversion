import { expect, describe, it } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { romanNumeralConversion } from "./number-conversion-api";

describe("conversion api tests", () => {
  const romanNumeralConversionResult = {
    message: "Converted 123 to roman numerals",
    data: "CXXIII",
  };
  const restHandlers = [
    http.get("http://localhost:8080/romannumeral", () => {
      return HttpResponse.json(romanNumeralConversionResult);
    }),
  ];

  const server = setupServer(...restHandlers);

  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("should return data for roman numerals", async () => {
    const romanNumeralResult = await romanNumeralConversion(123);
    expect(romanNumeralResult).toEqual(romanNumeralConversionResult);
  });
});
