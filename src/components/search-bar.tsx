import { Search } from "lucide-react";
import SearchInput from "./search-input";

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
}: SearchBarProps) => (
  <div className="flex w-full px-4 sm:px-6 md:px-16 lg:px-32 xl:px-[160px]">
    <SearchInput
      inputRef={inputRef}
      query={query}
      onQueryChange={onQueryChange}
      onClearSearch={onClearSearch}
    />
    <button
      onClick={() => onSearch(query)}
      className="px-6 py-2 bg-[#1C76D5] text-lg text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 sm:w-[160px]"
    >
      <Search className="h-5 w-5" />
      <span className="hidden sm:inline">Search</span>
    </button>
  </div>
);

export default SearchBar;
