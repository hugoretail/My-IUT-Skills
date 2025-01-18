import "./App.css";
import Title from './components/Title';
import Navbar from './components/Navbar';
import Searchbar from './components/SearchBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App w-full">
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <Title />
        <Searchbar />
      </main>

      <Footer />
    </div>
  );
}


