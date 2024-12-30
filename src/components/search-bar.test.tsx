import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./search-bar";

describe("SearchBar Component", () => {
  const mockOnQueryChange = vi.fn();
  const mockOnClearSearch = vi.fn();
  const mockOnSearch = vi.fn();
  const inputRef = { current: document.createElement("input") };

  it("renders SearchInput with the correct props", () => {
    const query = "test";
    render(
      <SearchBar
        query={query}
        onQueryChange={mockOnQueryChange}
        onClearSearch={mockOnClearSearch}
        onSearch={mockOnSearch}
        inputRef={inputRef}
      />
    );

    // Check if SearchInput receives the correct props
    const inputElement = screen.getByDisplayValue(query);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("value", query);
  });

  it("calls onSearch when the search button is clicked", () => {
    const query = "test";
    render(
      <SearchBar
        query={query}
        onQueryChange={mockOnQueryChange}
        onClearSearch={mockOnClearSearch}
        onSearch={mockOnSearch}
        inputRef={inputRef}
      />
    );

    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(query);
  });
});
