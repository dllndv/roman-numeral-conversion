import { assertEquals, assertThrows } from "jsr:@std/assert";
import { numberToBinary } from "../../converters/binary/binary-conversion.ts";
import { CustomError } from "../../utils/CustomError.ts";

Deno.test("convert 10", () => {
  const ten = numberToBinary(10);
  assertEquals(ten, "1010");
});

Deno.test("handle 0", () => {
  const zero = numberToBinary(0);
  assertEquals(zero, "0");
});

Deno.test("convert 255", () => {
  const twoFiveFive = numberToBinary(255);
  assertEquals(twoFiveFive, "11111111");
});

Deno.test("handle invalid negative", () => {
  assertThrows(
    () => numberToBinary(-5),
    CustomError,
    "Invalid input:  Please provide a non-negative integer."
  );
});

Deno.test("handle invalid float", () => {
  assertThrows(
    () => numberToBinary(3.14),
    CustomError,
    "Invalid input:  Please provide a non-negative integer."
  );
});
