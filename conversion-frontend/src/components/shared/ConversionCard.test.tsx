import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, describe, it, vi } from "vitest";
import { ConversionCard } from "./ConversionCard";
import { defaultTheme, Provider } from "@adobe/react-spectrum";

describe("Conversion Card", () => {
  const mockConvertFunction = vi.fn().mockResolvedValue({
    message: `Converted 123 to roman numerals`,
    data: "CXXIII",
  });

  const renderComponent = () => {
    render(
      <Provider theme={defaultTheme}>
        <ConversionCard
          title="Roman Numeral Converter"
          buttonLabel="Convert to Roman Numeral"
          outputLabel="Roman Numeral"
          minimumValue={1}
          maximumValue={3999}
          conversionFunction={mockConvertFunction}
        />
      </Provider>
    );
  };

  it("renders correctly", async () => {
    renderComponent();
    await screen.findByRole("heading");
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Roman Numeral Converter"
    );
  });

  it("should call conversion function when form submitted", async () => {
    renderComponent();
    await screen.findByTestId("number-field");
    await userEvent.type(screen.getByTestId("number-field"), "23");
    await userEvent.click(screen.getByText("Convert to Roman Numeral"));
    expect(mockConvertFunction).toHaveBeenCalledWith(123);
  });
});
