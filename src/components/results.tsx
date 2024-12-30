import type { SearchResult } from "../types/types";
import ResultsItem from "./results-item";

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
      <strong key={part + index} aria-label="Highlighted text">
        {part}
      </strong>
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
    <section className="mt-8 px-4 sm:px-6 md:px-16 lg:px-32 xl:p-0 xl:mx-[160px] xl:w-[832px]">
      <div className="font-semibold text-[22px] leading-7 font-['Open_Sans'] mb-10">
        Showing 1-10 of {totalResults} results
      </div>
      <ul className="space-y-8">
        {searchResults?.length > 0 ? (
          searchResults.map((result: SearchResult) => (
            <li key={result.DocumentId} className="space-y-2">
              <ResultsItem
                highlightText={highlightText}
                query={query}
                result={result}
              />
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </section>
  );
};

export default Results;
