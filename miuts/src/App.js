import "./App.css";
import Searchbar from './components/SearchBar';
import Title from './components/Title';

export default function App() {
  return (
    <div className="App w-full">

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <Title />
        <Searchbar />
      </main>

    </div>
  );
}


