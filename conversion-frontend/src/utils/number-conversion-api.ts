import axios from "axios";
import type { ConversionReturnType } from "../components/shared/ConversionCard";

// shared send function for future expandability
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
    throw new Error(
      `Conversion of ${numToConvert} to ${conversionType} failed`
    );
  }
};

// This one specifically handles roman numeral conversion
const romanNumeralConversion = async (
  numToConvert: number | undefined
): Promise<ConversionReturnType> => {
  if (!numToConvert) {
    throw new Error("number to convert cannot be undefined");
  }
  const romanNumeralConversionResult = await sendConversionRequest(
    numToConvert,
    "romannumeral"
  );
  return romanNumeralConversionResult;
};

// And this one handles Binary
const binaryNumberConversion = async (
  numToConvert: number | undefined
): Promise<ConversionReturnType> => {
  if (!numToConvert) {
    throw new Error("number to convert cannot be undefined");
  }
  const binaryNumberConversionResult = await sendConversionRequest(
    numToConvert,
    "binary"
  );
  return binaryNumberConversionResult;
};

export { romanNumeralConversion, binaryNumberConversion };
