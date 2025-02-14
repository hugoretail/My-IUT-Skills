import React, { useState } from "react";
import { RiBookShelfLine } from "react-icons/ri";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Details({ item, iutData, technicalRessources }) {
  const [showNotions, setShowNotions] = useState(false);

  if (!item) return null;

  const getRessourceDetails = (ressourceName) => {
    return technicalRessources.find(
      (ressource) => ressource.Ressource === ressourceName
    );
  };

  const getIutData = (itemName) => {
    return iutData.filter((data) =>
      data.Langages.split(";").includes(itemName) ||
      data["IDE / Environnement de travail"].split(";").includes(itemName) ||
      data["Frameworks / Librairies"].split(";").includes(itemName) ||
      data["Outils / Outils de gestion"].split(";").includes(itemName) ||
      data["Compilateurs / Outils de build"].split(";").includes(itemName) ||
      data["Outils de design / Maquettage"].split(";").includes(itemName)
    );
  }

  const iutDataList = getIutData(item.Ressource);

  const handleIutResourceClick = (data) => {
    console.log("TODO: Will handle the click on a ressource.")
    console.log(data);
  }

  const handleKeyNotionClick = (data) => {
    console.log("TODO: Click on a key notion.");
    console.log(data);
  }

  const handleTechRessourceClick = (data) => {
    console.log("TODO: Click on a technological ressource.");
    console.log(data);
  }

  return (
    <div className="mt-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl relative">
      {item.IUT === "TRUE" && (
        <div className="absolute top-3 right-3 group">
          <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all duration-300 cursor-help">
            <span className="text-sm text-cyan-400 font-medium">IUT</span>
          </div>
          <div className="absolute right-0 mt-2 px-3 py-2 bg-gray-800 border border-cyan-500/20 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-300 whitespace-nowrap z-10">
            Utilisé à l'IUT
          </div>
        </div>
      )}

      {(item.NomImage || !item.NomImage) && (
        <div className="absolute top-3 left-3">
          <div className="w-14 h-14 rounded-full p-2 bg-gray-700/50 border border-gray-600 hover:border-cyan-500/30 shadow-lg transform hover:scale-110 transition-all duration-300">
            {item.NomImage ? (
              <img
                src={`/logo/${item.NomImage}.webp`}
                alt={item.Ressource}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <RiBookShelfLine size="1.5em" className="text-cyan-300" />
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-white text-center mt-8">
          {item.Ressource && <span className="px-2">{item.Ressource}</span>}
          {item.Nom && <span className="px-2">{item.Nom}</span>}
          {item.Semestre && <span className="px-2">S{item.Semestre}</span>}
        </h2>
      </div>

      {item.Description && (
        <div className="mt-2 p-4 bg-gray-800/40 border border-gray-700/50 rounded-lg">
          <p className="text-gray-200 leading-relaxed">{item.Description}</p>
        </div>
      )}

      {iutDataList.length > 0 && (
        <div className="mt-4 p-4 bg-gray-800/40 border border-gray-700/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-cyan-100">
            IUT
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {iutDataList.map((data, index) => (
              <button
                key={index}
                onClick={() => handleIutResourceClick(data.Ressource)}
                className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50
                         text-gray-300 hover:text-cyan-300
                         rounded-lg border border-gray-600
                         hover:border-cyan-500/50
                         transition-all duration-300
                         flex items-center space-x-2
                         group"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full
                               group-hover:scale-125 transition-transform"></span>
                <span>{data.Ressource} {data.Nom}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {item.NotionsCles && (
        <div className="mt-6 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
          <button 
            onClick={() => setShowNotions(!showNotions)}
            className="w-full flex items-center justify-between text-lg font-semibold text-cyan-100 hover:text-cyan-300 transition-colors duration-300"
          >
            <span>Notions Clés</span>
            {showNotions ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showNotions && (
            <div className="flex flex-wrap justify-center gap-2 mt-3 transition-all duration-300">
              {item.NotionsCles.map((notion, index) => (
                <button
                  onClick={() => handleKeyNotionClick(notion)}
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-full
                            border border-gray-600 hover:border-cyan-500/50 transition-all duration-300
                            text-sm flex items-center space-x-2 hover:text-cyan-300"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  <span>{notion}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {item.RessourcesLiees && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 text-cyan-100">
            Ressources Liées
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(item.RessourcesLiees).map(([key, value], index) => {
              const ressourceDetails = getRessourceDetails(key);
              return (
                <div key={index}>
                  {ressourceDetails && (
                    <div className="relative">
                      {ressourceDetails["Nom image"] ? (
                        <img
                          onClick={() => handleTechRessourceClick(key)}
                          src={`/logo/${ressourceDetails["Nom image"]}.webp`}
                          alt={key}
                          className="w-16 h-16 object-contain hover:scale-110 transition-all duration-300 hover:cursor-pointer peer rounded-lg p-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/50"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:cursor-pointer peer rounded-lg p-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/50">
                          <span onClick={() => handleTechRessourceClick(key)} className="text-cyan-300 text-sm text-center">
                            {key}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 p-4 bg-gray-800/95 backdrop-blur-sm text-gray-200 text-sm opacity-0 peer-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-lg border border-cyan-500/20 shadow-xl">
                        <div className="relative">
                          <h4 className="text-cyan-300 font-medium mb-2 pb-2 border-b border-cyan-500/20">
                            {key}
                          </h4>
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800/95 border-r border-b border-cyan-500/20 rotate-45"></div>
                          <p className="pb-2">{value}</p>
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