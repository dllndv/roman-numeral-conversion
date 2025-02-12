import { ConversionCard } from "../shared/ConversionCard";
import { romanNumeralConversion } from "../../utils/number-conversion-api";

const RomanNumeralConversion = () => {
  return (
    <ConversionCard
      title="Roman Numeral Converter"
      buttonLabel="Convert to Roman Numeral"
      outputLabel="Roman Numeral"
      minimumValue={1}
      maximumValue={3999}
      conversionFunction={romanNumeralConversion}
    />
  );
};

export { RomanNumeralConversion };
