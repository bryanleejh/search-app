import { useRef, useState } from "react";
import Header from "./header";
import SearchBar from "./search-bar";
import SuggestionsDropdown from "./suggestions-dropdown";
import Results from "./results";
import { mockSuggestions } from "../mocks/mock-data";
import type { DocumentText, SearchResult } from "../types/types";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (searchQuery: string) => {
    console.log("handleSearch: ", searchQuery);
    setShowSuggestions(false);
    setQuery(searchQuery);

    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json"
      );
      const data = await response.json();
      console.log("data", data);

      const filteredResults = data.ResultItems.filter(
        (result: {
          DocumentTitle: DocumentText;
          DocumentExcerpt: DocumentText;
        }) =>
          result.DocumentTitle.Text.toLowerCase().includes(
            searchQuery.toLowerCase()
          ) ||
          result.DocumentExcerpt.Text.toLowerCase().includes(
            searchQuery.toLowerCase()
          )
      );

      setSearchResults(filteredResults);
      setTotalResults(filteredResults.length);
      console.log("filteredResults: ", filteredResults);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
      setSearchResults([]);
      setTotalResults(0);
    }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 2);
  };

  const clearSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery("");
    setShowSuggestions(false);
    setSearchResults([]);
    setTotalResults(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="main py-12 h-[152px] w-full">
        <div className="relative w-full xl:w-[1120px] xl:mx-auto">
          <SearchBar
            query={query}
            onQueryChange={handleQueryChange}
            onClearSearch={clearSearch}
            onSearch={handleSearch}
            inputRef={inputRef}
          />
          {showSuggestions && (
            <SuggestionsDropdown
              onSuggestionSelect={(suggestion) => {
                setQuery(suggestion);
                handleSearch(suggestion);
              }}
              suggestions={mockSuggestions}
            />
          )}
        </div>
      </div>
      {searchResults.length > 0 && (
        <Results
          searchResults={searchResults}
          totalResults={totalResults}
          query={query}
        />
      )}
    </div>
  );
}
