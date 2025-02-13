import "./App.css";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { RomanNumeralConversion } from "./components/roman-numeral-conversion/RomanNumeralConversion";
import { BinaryConversion } from "./components/binary-conversion/BinaryConversion";
import { styled } from "styled-components";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <ConversionWrapper>
        <RomanNumeralConversion />
        <BinaryConversion />
      </ConversionWrapper>
    </Provider>
  );
}

const ConversionWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export default App;
