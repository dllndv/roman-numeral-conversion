import axios from "axios";

const sendConversionRequest = async (
  numToConvert: number,
  conversionType: string
) => {
  try {
    const conversionResult = await axios(
      `http://localhost:8080/${conversionType}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        params: { query: numToConvert },
      }
    );
    return conversionResult.data;
  } catch (error) {
    console.error(error);
  }
};

const romanNumeralConversion = async (numToConvert: number) => {
  const romanNumeralConversionResult = await sendConversionRequest(
    numToConvert,
    "romannumeral"
  );
  return romanNumeralConversionResult;
};

export { romanNumeralConversion };
