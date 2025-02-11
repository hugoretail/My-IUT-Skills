import React, { useEffect, useRef, useState } from "react";

const Searchbar = ({ iutData, technicalRessources, onSelect }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const resultsRef = useRef(null);

  const iutContent = iutData.map((item) => ({
    Ressource: item.Ressource,
    Nom: item.Nom,
    Semestre: item.Semestre,
  }));

  const technicalContent = technicalRessources.map((item) => ({
    Ressource: item.Ressource,
    Description: item.Description,
    IUT: item.IUT,
    NomImage: item["Nom image"],
    NotionsCles: item["Notions clés"],
    RessourcesLiees: item["Ressources liées"],
  }));

  const filteredIut = iutContent.filter(
    (item) =>
      item.Ressource.toLowerCase().includes(query.toLowerCase()) ||
      item.Nom.toLowerCase().includes(query.toLowerCase()) ||
      item.Semestre.toString().includes(query)
  );

  const filteredTechnical = technicalContent.filter((item) =>
    item.Ressource.toLowerCase().includes(query.toLowerCase())
  );

  const combinedResults = [...filteredIut, ...filteredTechnical];

  const handleSelect = (item) => {
    onSelect(item);
    setQuery("");
    setIsFocused(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < combinedResults.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0 && highlightedIndex < combinedResults.length) {
        handleSelect(combinedResults[highlightedIndex]);
      }
      if (combinedResults.length > 0 && highlightedIndex === -1) {
        handleSelect(combinedResults[0]);
      }
    } else if (e.key === "Escape") {
      //setIsFocused(false);
      setHighlightedIndex(-1);
    }
  };

  useEffect(() => {
    if (isFocused && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  return (
    <div className="mb-6 md:w-96 relative">
      <div className="relative flex items-stretch w-full">
        <input
          type="search"
          className="flex-auto text-white rounded border border-solid border-neutral-300 bg-transparent px-3 py-2 text-base text-neutral-700 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Ressource, technologie, outil..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsFocused(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {isFocused && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg max-h-60 overflow-y-auto z-10">
          <ul>
            {combinedResults.map((item, index) => (
              <li
                key={index}
                ref={index === highlightedIndex ? resultsRef : null}
                className={`p-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700 ${
                  index === highlightedIndex ? "bg-gray-700" : ""
                }`}
                onMouseDown={() => handleSelect(item)}
              >
                <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                  {item.NomImage ? (
                    <img
                      src={`/logo/${item.NomImage}.webp`}
                      alt={item.Ressource}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <div></div>
                  )}
                  <div>
                    <p className="font-bold">{item.Ressource}</p>
                    {item.Nom && <p>{item.Nom}</p>}
                    {item.Semestre && <p>S{item.Semestre}</p>}
                    {item.IUT === "TRUE" && (
                      <p className="text-sm text-gray-400">(IUT)</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
