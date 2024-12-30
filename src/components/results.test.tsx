import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Results from "./results";
import { mockResults } from "../mocks/mock-data";

describe("Results Component", () => {
  it("should display the correct number of results", () => {
    render(
      <Results searchResults={mockResults} totalResults={3} query="document" />
    );
    expect(screen.getByText(/Showing 1-10 of 3 results/)).toBeInTheDocument();
  });

  it("should render ResultsItem for each search result", () => {
    render(
      <Results searchResults={mockResults} totalResults={3} query="document" />
    );
    expect(screen.getAllByText(/Plan/).length).toBe(3); // Checks if excerpts from mock results are displayed
  });

  it("should display a message when no results are found", () => {
    render(<Results searchResults={[]} totalResults={0} query="nothing" />);
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });
});
