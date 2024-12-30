import { render, screen } from "@testing-library/react";
import ResultsItem from "./results-item";
import { mockResults } from "../mocks/mock-data";
import { describe, it, expect, vi } from "vitest";

describe("ResultsItem Component", () => {
  // Mock the highlightText function
  const mockHighlightText = vi.fn(
    (text, query) => `Highlighted: ${query} ${text}`
  );

  const mockTestData = mockResults[0];

  it("renders the component with provided data", () => {
    render(
      <ResultsItem
        highlightText={mockHighlightText}
        query="apply"
        result={mockTestData}
      />
    );

    expect(
      screen.getByText(/Highlighted: apply Buy an HDB Flat - LifeSG A/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Highlighted: apply Plan Your Finances Applying for a Flat From HDB Before You Apply What to Expect Steps Involved Buying an HDB Resale Flat Eligibility Criteria What to Expect.../i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(mockTestData.DocumentURI)).toBeInTheDocument();
    expect(mockHighlightText).toHaveBeenCalledWith(
      mockTestData.DocumentTitle.Text,
      "apply"
    );
    expect(mockHighlightText).toHaveBeenCalledWith(
      mockTestData.DocumentExcerpt.Text,
      "apply"
    );
  });
});
