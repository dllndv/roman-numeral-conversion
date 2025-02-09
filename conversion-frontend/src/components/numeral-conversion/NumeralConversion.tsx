import axios from "axios";

const backendResult = await axios("http://localhost:8080", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("result of backend call: ", backendResult);

const NumeralConversion = () => {
  return (
    <>
      <div>This is the Numeral Conversion Component</div>
      <h3>{backendResult.data}</h3>
    </>
  );
};

export { NumeralConversion };
