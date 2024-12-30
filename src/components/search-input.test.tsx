import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./search-input";

describe("SearchInput Component", () => {
  it("should render input element with correct placeholder", () => {
    const mockQueryChange = vi.fn();
    const mockClearSearch = vi.fn();
    const inputRef = { current: document.createElement("input") };

    render(
      <SearchInput
        inputRef={inputRef}
        query=""
        onQueryChange={mockQueryChange}
        onClearSearch={mockClearSearch}
      />
    );

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call onQueryChange when user types in the input", () => {
    const mockQueryChange = vi.fn();
    const mockClearSearch = vi.fn();
    const inputRef = { current: document.createElement("input") };

    render(
      <SearchInput
        inputRef={inputRef}
        query=""
        onQueryChange={mockQueryChange}
        onClearSearch={mockClearSearch}
      />
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(mockQueryChange).toHaveBeenCalledTimes(1);
  });

  it("should display clear button when there is a query and call onClearSearch when clicked", () => {
    const mockQueryChange = vi.fn();
    const mockClearSearch = vi.fn();
    const inputRef = { current: document.createElement("input") };

    render(
      <SearchInput
        inputRef={inputRef}
        query="test"
        onQueryChange={mockQueryChange}
        onClearSearch={mockClearSearch}
      />
    );

    const clearButton = screen.getByRole("button");
    expect(clearButton).toBeInTheDocument();
    fireEvent.click(clearButton);
    expect(mockClearSearch).toHaveBeenCalledTimes(1);
  });
});
