import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from './components/SearchBar';
import Title from './components/Title';

export default function App() {
  const [iutData, setIutData] = useState([]);

  useEffect(() => {
    fetch("/data/iut_data.json")
      .then(response => response.json())
      .then(iutData => setIutData(iutData));
  }, []);

  const [technicalRessources, setTechnicalRessources] = useState([]);

  useEffect(() => {
    fetch("/data/technical_ressources.json")
      .then(response => response.json())
      .then(technicalRessources => setTechnicalRessources(technicalRessources));
  }, []);

  return (
    <div className="App w-full">

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <Title />
        <Searchbar iutData={iutData} technicalRessources={technicalRessources} />
      </main>

    </div>
  );
}


