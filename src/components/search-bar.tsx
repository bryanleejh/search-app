import { Search, X } from "lucide-react";

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
  <div className="flex">
    <div className="relative flex-1">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={onQueryChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-[56px] w-[960px]"
        placeholder="Search..."
      />
      {query && (
        <button
          onClick={onClearSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 "
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
    <button
      onClick={() => onSearch(query)}
      className="px-6 py-2 bg-[#1C76D5] text-lg text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 w-[160px]"
    >
      <Search className="h-5 w-5" />
      Search
    </button>
  </div>
);

export default SearchBar;
