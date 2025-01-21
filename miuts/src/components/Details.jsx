import React from "react";

export default function Details({ item }) {
  if (!item) return null;

  return (
    <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{item.Ressource}</h2>
      {item.Nom && (
        <p>
          <strong>Nom :</strong> {item.Nom}
        </p>
      )}
      {item.Semestre && (
        <p>
          <strong>Semestre :</strong> {item.Semestre}
        </p>
      )}
      {item.IUT && (
        <p>
          <strong>IUT :</strong> {item.IUT}
        </p>
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
