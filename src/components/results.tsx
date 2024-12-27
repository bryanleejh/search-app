import type { SearchResult } from "../types/types";

type ResultsProps = {
  searchResults: SearchResult[];
  totalResults: number;
};

const Results = ({ searchResults, totalResults }: ResultsProps) => (
  <div className="mt-8 mx-[160px] pr-[160px]">
    <p className="text-sm text-gray-600 mb-4">
      Showing 1-10 of {totalResults} results
    </p>
    <div className="space-y-8">
      {searchResults.map((result) => (
        <div key={result.title} className="space-y-2">
          <h2 className="text-xl">
            <a href={result.url} className="text-blue-600 hover:underline">
              {result.title}
            </a>
          </h2>
          <p className="text-sm text-gray-600">
            {result.date} — {result.description}
          </p>
          <p className="text-sm text-gray-500">{result.url}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Results;
