import { X } from "lucide-react";

type SearchInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: (e: { preventDefault: () => void }) => void;
};

const SearchInput = ({
  inputRef,
  query,
  onQueryChange,
  onClearSearch,
}: SearchInputProps) => (
  <div className="relative flex-1">
    <label htmlFor="search-input" className="sr-only">
      Search
    </label>
    <input
      ref={inputRef}
      type="text"
      value={query}
      onChange={onQueryChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 h-[56px] xl:w-[960px]"
      placeholder="Search..."
      aria-label="search input"
    />
    {query && (
      <button
        onClick={onClearSearch}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 "
        aria-label="clear search button"
        data-testid="clear-button"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
    )}
  </div>
);

export default SearchInput;
