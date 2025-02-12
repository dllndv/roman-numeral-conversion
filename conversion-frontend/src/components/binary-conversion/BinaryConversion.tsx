import { ConversionCard } from "../shared/ConversionCard";
import { binaryNumberConversion } from "../../utils/number-conversion-api";

// This uses a shared component to handle the user interface so that part can
// be used to make more conversion components later
const BinaryConversion = () => {
  return (
    <ConversionCard
      title="Binary Number Converter"
      buttonLabel="Convert to Binary"
      outputLabel="Binary"
      minimumValue={1}
      maximumValue={5000}
      conversionFunction={binaryNumberConversion}
    />
  );
};

export { BinaryConversion };
