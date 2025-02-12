import { CustomError } from "../../utils/CustomError.ts";
// I actually looked this function up, I wasn't about to figure out
// how to write a second algorithm just to demonstrate expanding the
// app with a PR.
const numberToBinary = (num: number): string => {
  if (!Number.isInteger(num) || num < 0) {
    throw new CustomError(
      "Invalid input:  Please provide a non-negative integer.",
      400
    );
  }

  if (num === 0) {
    return "0"; // Special case for 0
  }

  let binaryString = "";
  while (num > 0) {
    binaryString = (num % 2) + binaryString; // Prepend the remainder
    num = Math.floor(num / 2); // Integer division
  }

  return binaryString;
};

export { numberToBinary };
