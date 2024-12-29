import { useState, useEffect } from "react";

type SuggestionsDropdownProps = {
  onSuggestionSelect: (text: string) => void;
  suggestions: string[];
};

const SuggestionsDropdown = ({
  onSuggestionSelect,
  suggestions,
}: SuggestionsDropdownProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event: { keyCode: number }) => {
      if (event.keyCode === 40 && selectedIndex < suggestions.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else if (event.keyCode === 38 && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      } else if (event.keyCode === 13 && selectedIndex >= 0) {
        onSuggestionSelect(suggestions[selectedIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSuggestionSelect, selectedIndex, suggestions]);

  return (
    <div className="mx-4 top-full left-0 right-0 bg-white border rounded-lg mt-1 shadow-lg z-10 md:mx-16 lg:mx-32 xl:mx-[160px] xl:w-[960px]">
      {suggestions.map((suggestion: string, index: number) => (
        <button
          key={suggestion}
          className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
            index === selectedIndex ? "bg-gray-200" : ""
          }`}
          onClick={() => onSuggestionSelect(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default SuggestionsDropdown;
