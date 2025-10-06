import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";
import { shorts } from "../data/shorts";

// Combine movies and shorts into a single items array
const items = [
  ...movies.map((movie) => ({
    title: movie.title,
    type: "movie",
    route: movie.url,
  })),
  ...shorts.map((short) => ({
    title: short.title,
    type: "short",
    route: short.url,
  })),
];

// Simple fuzzy search function
function fuzzySearch(query: string, text: string): number {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();

  // Exact match gets highest score
  if (textLower.includes(queryLower)) {
    return 100;
  }

  // Calculate fuzzy match score
  let score = 0;
  let queryIndex = 0;

  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      score += 1;
      queryIndex++;
    }
  }

  // Return score as percentage of query length matched
  return queryIndex === queryLower.length
    ? (score / queryLower.length) * 80
    : 0;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const filtered = items
    .map((item) => ({
      ...item,
      score: fuzzySearch(query, item.title),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const showSuggestions = query.trim().length > 0 && filtered.length > 0;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered.length > 0) {
        setQuery("");
        setSelectedIndex(0);
        navigate(filtered[selectedIndex].route);
      }
    }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0); // Reset selection when query changes
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search movies & shorts..."
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg text-gray-900 placeholder-gray-500 shadow-sm transition-colors duration-200 focus:border-blue-500 focus:outline-none"
        />

        {showSuggestions && (
          <div className="absolute top-full right-0 left-0 z-50 mt-1 max-h-[218px] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
            {filtered.map((item, index) => (
              <Link
                key={item.route}
                to={item.route}
                onClick={() => {
                  setQuery("");
                  setSelectedIndex(0);
                }}
                className={`flex items-center justify-between px-4 py-3 transition-colors duration-150 ${
                  index !== filtered.length - 1
                    ? "border-b border-gray-100"
                    : ""
                } ${
                  index === selectedIndex
                    ? "bg-blue-50 hover:bg-blue-100"
                    : "hover:bg-blue-50"
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-medium text-gray-900">
                    {item.title}
                  </span>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold tracking-wide uppercase ${
                      item.type === "movie"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
