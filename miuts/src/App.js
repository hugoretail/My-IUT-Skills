import './App.css';

export default function App() {
  return (
    <div className="App">

      <Navbar />

      <header className="">
        <h1 className="text-3xl font-bold animate-bounce">
          IUT Skills
        </h1>

      </header>

    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
      <ul className="flex space-x-4 text-blue-100">
        <li>Logo</li>
        <li>Période</li>
        <li>Liste des Skills</li>
        <li>A propos</li>
        <li>Contact</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}