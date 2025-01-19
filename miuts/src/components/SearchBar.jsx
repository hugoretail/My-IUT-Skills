import React, { useState } from "react";

const Searchbar = ({ iutData, technicalRessources, onSelect }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const iutSearchable = iutData.map((item) => ({
    Ressource: item.Ressource,
    Nom: item.Nom,
    Semestre: item.Semestre,
  }));

  const technicalSearchable = technicalRessources.map((item) => ({
    Ressource: item.Ressource,
    IUT: item.IUT,
    NomImage: item["Nom image"],
  }));

  const filteredIut = iutSearchable.filter(
    (item) =>
      item.Ressource.toLowerCase().includes(query.toLowerCase()) ||
      item.Nom.toLowerCase().includes(query.toLowerCase()) ||
      item.Semestre.toString().includes(query)
  );

  const filteredTechnical = technicalSearchable.filter((item) =>
    item.Ressource.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    onSelect(item);
    setQuery("");
  };

  return (
    <div className="mb-6 md:w-96 relative">
      <div className="relative flex items-stretch w-full">
        <input
          type="search"
          className="flex-auto text-white rounded border border-solid border-neutral-300 bg-transparent px-3 py-2 text-base text-neutral-700 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Ressource, technologie, outil..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {isFocused && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg max-h-60 overflow-y-auto z-10">
          <ul>
            {filteredIut.map((item, index) => (
              <li
                key={index}
                className="p-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
                onMouseDown={() => handleSelect(item)}
              >
                <strong>{item.Ressource}</strong> - {item.Nom} - Semestre{" "}
                {item.Semestre}
              </li>
            ))}
            {filteredTechnical.map((item, index) => (
              <li
                key={index}
                className="p-2 border-b border-gray-700 flex items-center cursor-pointer hover:bg-gray-700"
                onMouseDown={() => handleSelect(item)}
              >
                {item.NomImage && (
                  <img
                    src={`/logo/${item.NomImage}.png`}
                    alt={item.Ressource}
                    className="w-6 h-6 mr-2"
                  />
                )}
                <strong>{item.Ressource}</strong>
                {item.IUT === "TRUE" && (
                  <span className="ml-2 text-sm text-gray-400">(IUT)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
