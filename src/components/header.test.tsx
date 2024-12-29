import { render, screen } from "@testing-library/react";
import Header from "./header";
import { expect, it, describe } from "vitest";

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
    // Using 'banner' role which is a default role for header tag in ARIA
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  it("displays the correct image and alt text", () => {
    render(<Header />);
    // 'getByRole' can infer types for better IntelliSense support
    const image = screen.getByRole("img", {
      name: /singapore government logo/i,
    });
    expect(image).toBeInTheDocument();
    expect((image as HTMLImageElement).src).toContain("/singapore-lion.svg");
  });

  it("displays the correct text", () => {
    render(<Header />);
    expect(
      screen.getByText("An Official Website of the Singapore Government")
    ).toBeInTheDocument();
  });
});
