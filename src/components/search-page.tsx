import { useState } from "react";
import Header from "./header";
import SearchBar from "./search-bar";
import SuggestionsDropdown from "./suggestions-dropdown";
import Results from "./results";
import { mockResults } from "../mocks/mock-data";
import type { SearchResult } from "../types/types";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = (searchQuery: string) => {
    console.log("handleSearch: ", searchQuery);
    setShowSuggestions(false);
    setQuery(searchQuery);

    const filteredResults = mockResults.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("filteredResults: ", filteredResults);
    setSearchResults(filteredResults);
    setTotalResults(filteredResults.length);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 2);
  };

  const clearSearch = () => {
    setQuery("");
    setShowSuggestions(false);
    setSearchResults([]);
    setTotalResults(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="main mx-auto py-8 h-[152px] w-full">
        <div className="relative w-[1120px] mx-auto">
          <SearchBar
            query={query}
            onQueryChange={handleQueryChange}
            onClearSearch={clearSearch}
            onSearch={handleSearch}
          />
          {showSuggestions && (
            <SuggestionsDropdown
              onSuggestionSelect={(suggestion) => {
                setQuery(suggestion);
                handleSearch(suggestion);
              }}
            />
          )}
        </div>
      </div>
      {searchResults.length > 0 && (
        <Results searchResults={searchResults} totalResults={totalResults} />
      )}
    </div>
  );
}
