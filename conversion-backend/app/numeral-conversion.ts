import { CustomError } from "./CustomError.ts";

const convertNumber = (numToConvert: number) => {
  // First, throw an error if the number happens to be out of bounds
  if (numToConvert > 3999 || numToConvert < 1) {
    throw new CustomError("Number to convert is out of bounds.", 400);
  }

  // Using enum here lets us clearly label each row in the map while also allowing
  // easy iteration using the number array's index later
  enum digits {
    ones,
    tens,
    huns,
    thou,
  }

  const numeralsMap = new Map([
    [digits.ones, ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]],
    [digits.tens, ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]],
    [digits.huns, ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]],
    [digits.thou, ["", "M", "MM", "MMM"]],
  ]);

  // It's easier to iterate through and work with a string array so we're converting it here,
  // and reversing it so that we don't have to worry about how many digits the number
  // has when iterating through it
  const numString = numToConvert.toString();
  const numReverseArray = numString.split("").reverse();

  // Using the numReverseArray's index we can iterate through the Map and use the
  // digit itself as the index to query the array in each row of the Map
  const romanNumerals = numReverseArray.map(
    (digit, index) => numeralsMap.get(index)![+digit]
  );

  // turn it back around the right way and join it together into a string again
  // and return the result
  return romanNumerals.reverse().join("");
};

export { convertNumber };
