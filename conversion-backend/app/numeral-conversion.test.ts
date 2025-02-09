import { assertEquals } from "jsr:@std/assert";
import { convertNumber } from "./numeral-conversion.ts";

Deno.test("1 through 10", () => {
  const one = convertNumber(1);
  assertEquals(one, "I");
  const two = convertNumber(2);
  assertEquals(two, "II");
  const three = convertNumber(3);
  assertEquals(three, "III");
  const four = convertNumber(4);
  assertEquals(four, "IV");
  const five = convertNumber(5);
  assertEquals(five, "V");
  const six = convertNumber(6);
  assertEquals(six, "VI");
  const seven = convertNumber(7);
  assertEquals(seven, "VII");
  const eight = convertNumber(8);
  assertEquals(eight, "VIII");
  const nine = convertNumber(9);
  assertEquals(nine, "IX");
  const ten = convertNumber(10);
  assertEquals(ten, "X");
});

Deno.test("20 through 100 by 10s", () => {
  const twenty = convertNumber(20);
  assertEquals(twenty, "XX");
  const three = convertNumber(30);
  assertEquals(three, "XXX");
  const four = convertNumber(40);
  assertEquals(four, "XL");
  const five = convertNumber(50);
  assertEquals(five, "L");
  const six = convertNumber(60);
  assertEquals(six, "LX");
  const seven = convertNumber(70);
  assertEquals(seven, "LXX");
  const eight = convertNumber(80);
  assertEquals(eight, "LXXX");
  const nine = convertNumber(90);
  assertEquals(nine, "XC");
  const ten = convertNumber(100);
  assertEquals(ten, "C");
});

Deno.test("200 through 1000 by 100s", () => {
  const twenty = convertNumber(200);
  assertEquals(twenty, "CC");
  const three = convertNumber(300);
  assertEquals(three, "CCC");
  const four = convertNumber(400);
  assertEquals(four, "CD");
  const five = convertNumber(500);
  assertEquals(five, "D");
  const six = convertNumber(600);
  assertEquals(six, "DC");
  const seven = convertNumber(700);
  assertEquals(seven, "DCC");
  const eight = convertNumber(800);
  assertEquals(eight, "DCCC");
  const nine = convertNumber(900);
  assertEquals(nine, "CM");
  const ten = convertNumber(1000);
  assertEquals(ten, "M");
});

Deno.test("2000 through max number", () => {
  const twenty = convertNumber(2000);
  assertEquals(twenty, "MM");
  const three = convertNumber(3000);
  assertEquals(three, "MMM");
  const four = convertNumber(3999);
  assertEquals(four, "MMMCMXCIX");
});

// Todo: Add tests for errors
// above 3999
// below 1
// Input that's not a number
