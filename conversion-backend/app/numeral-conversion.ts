const convertNumber = (numToConvert: number) => {
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

  const numString = numToConvert.toString();
  const numReverseArray = numString.split("").reverse();

  const romanNumerals = numReverseArray.map(
    (digit, index) => numeralsMap.get(index)![+digit]
  );

  return romanNumerals.reverse().join("");
};

export { convertNumber };
