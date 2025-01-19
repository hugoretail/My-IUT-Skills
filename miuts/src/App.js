import { useEffect, useRef, useState } from "react";
import "./App.css";
import Details from './components/Details';
import Searchbar from './components/SearchBar';
import Title from './components/Title';

export default function App() {
  const [iutData, setIutData] = useState([]);
  const [technicalRessources, setTechnicalRessources] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    fetch("/data/iut_data.json")
      .then(response => response.json())
      .then(iutData => setIutData(iutData));
  }, []);

  useEffect(() => {
    fetch("/data/technical_ressources.json")
      .then(response => response.json())
      .then(technicalRessources => setTechnicalRessources(technicalRessources));
  }, []);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setTimeout(() => {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="App w-full">
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <Title />
        <Searchbar
          iutData={iutData}
          technicalRessources={technicalRessources}
          onSelect={handleSelect}
        />
      </main>
      {selectedItem && (
        <div ref={detailsRef} className="min-h-screen w-full flex items-center justify-center bg-gray-800 text-white py-8">
          <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-gray-700 p-8 rounded">
            <Details item={selectedItem} />
          </div>
        </div>
      )}
    </div>
  );
}