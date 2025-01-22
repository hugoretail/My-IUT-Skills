import React from "react";

export default function Details({ item }) {
  if (!item) return null;

  return (
    <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-2">
        {item.Ressource}
        {item.Nom && (
          <span>
            {' - '}
            {item.Nom}
          </span>
        )}
        {item.Semestre && (
          <span>
            {' - '}
            S{item.Semestre}
          </span>
        )}
      </h2>

      {item.IUT === "TRUE" && (
        <p className="text-sm text-gray-400">(IUT)</p>
      )}
      
      {item.NomImage && (
        <img
          src={`/logo/${item.NomImage}.webp`}
          alt={item.Ressource}
          className="w-12 h-12 mt-2 object-contain"
        />
      )}
    </div>
  );
}
