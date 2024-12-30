import { useState, useEffect, useRef } from "react";

type SuggestionsDropdownProps = {
  onSuggestionSelect: (text: string) => void;
  suggestions: string[];
};

const SuggestionsDropdown = ({
  onSuggestionSelect,
  suggestions,
}: SuggestionsDropdownProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const suggestionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    suggestionRefs.current = suggestionRefs.current.slice(
      0,
      suggestions.length
    );
  }, [suggestions]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" && selectedIndex < suggestions.length - 1) {
        event.preventDefault();
        setSelectedIndex((prevIndex) => prevIndex + 1);
      } else if (event.key === "ArrowUp" && selectedIndex > 0) {
        event.preventDefault();
        setSelectedIndex((prevIndex) => prevIndex - 1);
      } else if (event.key === "Enter" && selectedIndex >= 0) {
        event.preventDefault();
        onSuggestionSelect(suggestions[selectedIndex]);
      } else if (event.key === "Tab") {
        event.preventDefault();
        const shiftKey = event.shiftKey;
        if (shiftKey) {
          const prevIndex =
            selectedIndex > 0 ? selectedIndex - 1 : suggestions.length - 1;
          setSelectedIndex(prevIndex);
        } else {
          const nextIndex =
            selectedIndex < suggestions.length - 1 ? selectedIndex + 1 : 0;
          setSelectedIndex(nextIndex);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSuggestionSelect, selectedIndex, suggestions]);

  useEffect(() => {
    if (selectedIndex >= 0 && selectedIndex < suggestionRefs.current.length) {
      const ref = suggestionRefs.current[selectedIndex];
      ref?.focus();
    }
  }, [selectedIndex]);

  return (
    <div className="mx-4 top-full left-0 right-0 bg-white border rounded-lg mt-1 shadow-lg z-10 md:mx-16 lg:mx-32 xl:mx-[160px] xl:w-[960px]">
      {suggestions.map((suggestion, index) => (
        <button
          key={suggestion}
          ref={(el) => (suggestionRefs.current[index] = el)}
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
