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

      {item.NomImage && item.NomImage !== "?" && (
        <img
          src={`/logo/${item.NomImage}.webp`}
          alt={item.Ressource}
          className="w-12 h-12 mt-2 object-contain"
        />
      )}

      {item.Description && <p>{item.Description}</p>}

      {item.NotionsCles && (
        <div>
          <h3 className="text-lg font-semibold mt-4">Notions Clés :</h3>
          <ul className="mx-8 list-disc list-inside text-left">
            {item.NotionsCles.map((notion, index) => (
              <li key={index}>{notion}</li>
            ))}
          </ul>
        </div>
      )}

      {item.RessourcesLiees && (
        <div>
          <h3 className="text-lg font-semibold">Ressources Liées :</h3>
          <ul className="list-disc list-inside">
            {Object.entries(item.RessourcesLiees).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
