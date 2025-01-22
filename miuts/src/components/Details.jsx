import React from "react";
import { RiBookShelfLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";

export default function Details({ item }) {
  if (!item) return null;

  return (
    <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded shadow-lg">
      <div className="flex items-center justify-center mb-2">
        {item.NomImage && (
          <FaGear size="1.5em" className="mr-1" />
        )}
        {!item.NomImage && (
          <RiBookShelfLine size="1.5em" className="mr-1" />
        )}
        <h2 className="text-2xl font-bold">
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
      </div>

      {item.IUT === "TRUE" && (
        <p className="text-sm text-gray-400">(IUT)</p>
      )}

      {item.NomImage && (
        <img
          src={`/logo/${item.NomImage}.png`}
          alt={item.Ressource}
          className="w-12 h-12 mt-2 object-contain"
        />
      )}
    </div>
  );
}