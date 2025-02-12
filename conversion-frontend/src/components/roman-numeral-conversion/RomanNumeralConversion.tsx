import { ConversionCard } from "../shared/ConversionCard";
import { romanNumeralConversion } from "../../utils/number-conversion-api";

// This uses a shared component to handle the user interface so that part can
// be used to make more conversion components later
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
