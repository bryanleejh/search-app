import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SuggestionsDropdown from "./suggestions-dropdown";
import userEvent from "@testing-library/user-event";

describe("SuggestionsDropdown", () => {
  const mockOnSuggestionSelect = vi.fn();
  const suggestions = ["Apple", "Banana", "Cherry"];

  beforeEach(() => {
    vi.clearAllMocks(); // Reset mocks for each test
  });

  it("renders suggestions", () => {
    render(
      <SuggestionsDropdown
        onSuggestionSelect={mockOnSuggestionSelect}
        suggestions={suggestions}
      />
    );

    suggestions.forEach((suggestion) => {
      expect(screen.getByText(suggestion)).toBeInTheDocument();
    });
  });

  it("calls onSuggestionSelect when a suggestion is clicked", () => {
    render(
      <SuggestionsDropdown
        onSuggestionSelect={mockOnSuggestionSelect}
        suggestions={suggestions}
      />
    );

    const firstButton = screen.getByText("Apple");
    fireEvent.click(firstButton);
    expect(mockOnSuggestionSelect).toHaveBeenCalledWith("Apple");
  });

  it("handles keyboard navigation and selection", async () => {
    render(
      <SuggestionsDropdown
        onSuggestionSelect={mockOnSuggestionSelect}
        suggestions={suggestions}
      />
    );

    const user = userEvent.setup();
    await user.keyboard("[ArrowDown]");
    await user.keyboard("[ArrowDown]");
    await user.keyboard("[ArrowDown]");
    await user.keyboard("{Enter}");

    expect(mockOnSuggestionSelect).toHaveBeenCalledWith("Cherry");
  });
});
