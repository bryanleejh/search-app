import { SearchResult } from "../types/types";

type ResultsItemProps = {
  highlightText: (
    text: string,
    query: string
  ) => string | (string | JSX.Element)[];
  query: string;
  result: SearchResult;
};

const ResultsItem = ({ highlightText, query, result }: ResultsItemProps) => {
  return (
    <>
      <h2 className="font-semibold text-[22px] leading-7 font-sans">
        <a
          href={result.DocumentURI}
          className="text-blue-600 hover:underline"
          aria-label={`Link to read more about ${result.DocumentTitle.Text}`}
        >
          {highlightText(result.DocumentTitle.Text, query)}
        </a>
      </h2>
      <p className="font-sans text-base font-normal leading-6 text-left">
        {"1 Sep 2021"} — {highlightText(result.DocumentExcerpt.Text, query)}
      </p>
      <p className="text-sm text-gray-500 truncate">{result.DocumentURI}</p>
    </>
  );
};

export default ResultsItem;
