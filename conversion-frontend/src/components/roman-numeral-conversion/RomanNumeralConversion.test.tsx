import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { RomanNumeralConversion } from "./RomanNumeralConversion";
import { defaultTheme, Provider } from "@adobe/react-spectrum";

describe("Roman Numeral Conversion", () => {
  it("renders correctly", async () => {
    render(
      <Provider theme={defaultTheme}>
        <RomanNumeralConversion />
      </Provider>
    );

    await screen.findByRole("heading");
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Roman Numeral Converter"
    );
  });
});
