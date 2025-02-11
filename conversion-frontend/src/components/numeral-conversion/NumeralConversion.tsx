import { ConversionCard } from "../shared/ConversionCard";

const NumeralConversion = () => {
  return (
    <ConversionCard
      title="Roman Numeral Converter"
      buttonLabel="Convert to Roman Numeral"
      outputLabel="Roman Numeral"
      minimumValue={1}
      maximumValue={3999}
    />
  );
};

export { NumeralConversion };
