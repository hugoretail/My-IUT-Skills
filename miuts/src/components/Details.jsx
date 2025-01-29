import React from "react";
import { RiBookShelfLine } from "react-icons/ri";

export default function Details({ item, technicalRessources }) {
  if (!item) return null;

  const getRessourceDetails = (ressourceName) => {
    return technicalRessources.find(
      (ressource) => ressource.Ressource === ressourceName
    );
  };

  return (
    <div className="mt-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl">
      <div className="flex items-center justify-center mb-4">
        {!item.NomImage && <RiBookShelfLine size="1.5em" className="mr-1" />}
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          {item.Ressource && <span className="p-3">{item.Ressource}</span>}
          {item.Nom && <span className="p-3">{item.Nom}</span>}
          {item.Semestre && <span className="p-3">S{item.Semestre}</span>}
        </h2>
      </div>

      {item.IUT === "TRUE" && (
        <p className="text-sm text-cyan-400 font-medium mb-4 text-center">
          (IUT)
        </p>
      )}

      {item.NomImage && (
        <img
          src={`/logo/${item.NomImage}.webp`}
          alt={item.Ressource}
          className="w-12 h-12 mt-2 object-contain mx-auto hover:scale-110 transition-transform duration-300"
        />
      )}

      {item.Description && (
        <p className="text-gray-300 mt-4 leading-relaxed">{item.Description}</p>
      )}

      {item.NotionsCles && (
        <div className="mt-6 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-3 text-cyan-300">
            Notions Clés :
          </h3>
          <ul className="space-y-2 text-gray-300">
            {item.NotionsCles.map((notion, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                {notion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.RessourcesLiees && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 text-cyan-300">
            Ressources Liées :
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(item.RessourcesLiees).map(([key, value], index) => {
              const ressourceDetails = getRessourceDetails(key);
              return (
                <div key={index}>
                  {ressourceDetails && (
                    <div className="relative">
                      <img
                        src={`/logo/${ressourceDetails["Nom image"]}.webp`}
                        alt={key}
                        className="w-16 h-16 object-contain hover:scale-110 transition-all duration-300 hover:cursor-pointer peer rounded-lg p-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/50"
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 p-4 bg-gray-800/95 backdrop-blur-sm text-gray-200 text-sm opacity-0 peer-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-lg border border-cyan-500/20 shadow-xl">
                        <div className="relative">
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800/95 border-r border-b border-cyan-500/20 rotate-45"></div>
                          <p className="pb-4">{value}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
