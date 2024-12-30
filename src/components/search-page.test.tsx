import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchPage from "./search-page";

describe("SearchPage Component", () => {
  it("renders correctly", () => {
    render(<SearchPage />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("updates the query on input change", async () => {
    render(<SearchPage />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "hello");
    expect(input).toHaveValue("hello");
  });
});
