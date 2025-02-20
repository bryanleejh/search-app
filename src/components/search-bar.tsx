import { Search } from "lucide-react";
import SearchInput from "./search-input";
import { useEffect } from "react";

type SearchBarProps = {
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: (e: { preventDefault: () => void }) => void;
  onSearch: (query: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

const SearchBar = ({
  query,
  onQueryChange,
  onClearSearch,
  onSearch,
  inputRef,
}: SearchBarProps) => {
  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onSearch(query);
      }
    };

    document.addEventListener("keydown", handleEnter);
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [onSearch, query]);

  return (
    <div className="flex w-full px-4 sm:px-6 md:px-16 lg:px-32 xl:px-[160px]">
      <SearchInput
        inputRef={inputRef}
        query={query}
        aria-label="search field"
        onQueryChange={onQueryChange}
        onClearSearch={onClearSearch}
      />
      <button
        onClick={() => onSearch(query)}
        aria-label="perform search button"
        className="px-6 py-2 bg-[#1C76D5] text-lg text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 sm:w-[160px]"
      >
        <Search className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
