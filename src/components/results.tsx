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

const Results = ({ searchResults, totalResults, query }: ResultsProps) => (
  <div className="mt-8 mx-[160px] pr-[160px]">
    <div className="font-semibold text-[22px] leading-7 font-['Open_Sans'] mb-10">
      Showing 1-10 of {totalResults} results
    </div>
    <div className="space-y-8">
      {searchResults.map((result) => (
        <div key={result.title + result.date} className="space-y-2">
          <h2 className="text-xl">
            <a href={result.url} className="text-blue-600 hover:underline">
              {highlightText(result.title, query)}
            </a>
          </h2>
          <p className="text-sm text-gray-600">
            {result.date} — {highlightText(result.description, query)}
          </p>
          <p className="text-sm text-gray-500">{result.url}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Results;
