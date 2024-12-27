import { mockSuggestions } from "../mocks/mock-data";

type SuggestionsDropdownProps = {
  onSuggestionSelect: (text: string) => void;
};

console.log("mockSuggestions: ", mockSuggestions);

const SuggestionsDropdown = ({
  onSuggestionSelect,
}: SuggestionsDropdownProps) => (
  <div className="top-full left-0 right-0 bg-white border rounded-lg mt-1 shadow-lg z-10">
    {mockSuggestions.map((suggestion) => (
      <button
        key={suggestion.text}
        className="w-full px-4 py-2 text-left hover:bg-gray-50 last:border-b-0"
        onClick={() => onSuggestionSelect(suggestion.text)}
      >
        {suggestion.text}
      </button>
    ))}
  </div>
);

export default SuggestionsDropdown;
