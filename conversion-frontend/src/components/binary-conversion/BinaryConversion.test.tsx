import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { BinaryConversion } from "./BinaryConversion";
import { defaultTheme, Provider } from "@adobe/react-spectrum";

describe("Roman Numeral Conversion", () => {
  it("renders correctly", async () => {
    render(
      <Provider theme={defaultTheme}>
        <BinaryConversion />
      </Provider>
    );

    await screen.findByRole("heading");
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Binary Number Converter"
    );
  });
});
