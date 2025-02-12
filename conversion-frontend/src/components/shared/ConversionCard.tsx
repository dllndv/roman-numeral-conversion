import { Form, NumberField, Button } from "@adobe/react-spectrum";
import { ToastContainer, ToastQueue } from "@react-spectrum/toast";
import { useState } from "react";
import { styled } from "styled-components";

export type ConversionReturnType = {
  message: string;
  data: string;
};

type ConversionCardParams = {
  title: string;
  buttonLabel: string;
  outputLabel: string;
  minimumValue: number;
  maximumValue: number;
  conversionFunction: (numToConvert: number) => Promise<ConversionReturnType>;
};

const ConversionCard = ({
  title,
  buttonLabel,
  outputLabel,
  minimumValue,
  maximumValue,
  conversionFunction,
}: ConversionCardParams) => {
  const [numToConvert, setNumToConvert] = useState(1);
  const [numberConvertResult, setNumberConvertResult] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const conversionResult = await conversionFunction(numToConvert);
    setNumberConvertResult(conversionResult.data);
    ToastQueue.positive(conversionResult.message, { timeout: 5000 });
  };

  return (
    <>
      <CardContainer>
        <h2>{title}</h2>
        <Form
          validationBehavior="native"
          maxWidth="size-3600"
          onSubmit={handleSubmit}
          justifySelf={"left"}
        >
          <NumberField
            data-testid="number-field"
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
      <ToastContainer />
    </>
  );
};

const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export { ConversionCard };
