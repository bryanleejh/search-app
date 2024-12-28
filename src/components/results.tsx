import type { SearchResult } from "../types/types";

type ResultsProps = {
  searchResults: SearchResult[];
  totalResults: number;
  query: string;
};

const highlightText = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(\\b\\w*${escapeRegExp(query)}\\w*\\b)`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    part.toLowerCase().includes(query.toLowerCase()) ? (
      <strong key={part + index}>{part}</strong>
    ) : (
      part
    )
  );
};

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const Results = ({ searchResults, totalResults, query }: ResultsProps) => {
  return (
    <div className="mt-8 mx-[160px]">
      <div className="font-semibold text-[22px] leading-7 font-['Open_Sans'] mb-10">
        Showing 1-10 of {totalResults} results
      </div>
      <div className="space-y-8 w-[816px]">
        {searchResults?.length > 0 ? (
          searchResults.map((result: SearchResult) => (
            <div key={result.DocumentId} className="space-y-2">
              <h2 className="font-semibold text-[22px] leading-7 font-sans">
                <a
                  href={result.DocumentURI}
                  className="text-blue-600 hover:underline"
                >
                  {highlightText(result.DocumentTitle.Text, query)}
                </a>
              </h2>
              <p className="font-sans text-base font-normal leading-6 text-left">
                {"1 Sep 2021"} —{" "}
                {highlightText(result.DocumentExcerpt.Text, query)}
              </p>
              <p className="text-sm text-gray-500">{result.DocumentURI}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
