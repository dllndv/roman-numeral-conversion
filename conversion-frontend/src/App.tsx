import "./App.css";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { RomanNumeralConversion } from "./components/roman-numeral-conversion/RomanNumeralConversion";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <RomanNumeralConversion />
    </Provider>
  );
}

export default App;
