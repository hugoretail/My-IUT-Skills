import React from "react";
import { FaGear } from "react-icons/fa6";
import { RiBookShelfLine } from "react-icons/ri";

export default function Details({ item }) {
  if (!item) return null;

  return (
    <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded shadow-lg">
      <div className="flex items-center justify-center mb-2">
        {item.NomImage && <FaGear size="1.5em" className="mr-1" />}
        {!item.NomImage && <RiBookShelfLine size="1.5em" className="mr-1" />}
        <h2 className="text-2xl font-bold">
          {item.Ressource && <span className="p-3">{item.Ressource}</span>}
          {item.Nom && <span className="p-3">{item.Nom}</span>}
          {item.Semestre && <span className="p-3">S{item.Semestre}</span>}
        </h2>
      </div>

      {item.IUT === "TRUE" && <p className="text-sm text-gray-400">(IUT)</p>}

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
