import { Form, NumberField, Button } from "@adobe/react-spectrum";
import { romanNumeralConversion } from "../../utils/number-conversion-api";
import { useState } from "react";
import { styled } from "styled-components";

type ConversionCardParams = {
  title: string;
  buttonLabel: string;
  outputLabel: string;
  minimumValue: number;
  maximumValue: number;
};

const ConversionCard = ({
  title,
  buttonLabel,
  outputLabel,
  minimumValue,
  maximumValue,
}: ConversionCardParams) => {
  const [numToConvert, setNumToConvert] = useState(1);
  const [numberConvertResult, setNumberConvertResult] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const conversionResult = await romanNumeralConversion(numToConvert);
    setNumberConvertResult(conversionResult.data);
  };

  return (
    <CardContainer>
      <h2>{title}</h2>
      <Form
        validationBehavior="native"
        maxWidth="size-3600"
        onSubmit={handleSubmit}
        justifySelf={"left"}
      >
        <NumberField
          label="Number to convert"
          name="numToConvert"
          minValue={minimumValue}
          maxValue={maximumValue}
          description={`Number must be between ${minimumValue} and ${maximumValue}`}
          value={numToConvert}
          onChange={setNumToConvert}
          isRequired
          errorMessage={({ validationDetails }) =>
            validationDetails.valueMissing
              ? "You must input a number to convert"
              : ""
          }
        />
        <Button type="submit" variant="primary">
          {buttonLabel}
        </Button>
      </Form>
      <p>
        {outputLabel}: {numberConvertResult}
      </p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export { ConversionCard };
