import "./App.css";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { NumeralConversion } from "./components/numeral-conversion/NumeralConversion";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <NumeralConversion />
    </Provider>
  );
}

export default App;
