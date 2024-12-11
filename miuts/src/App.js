import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold animate-bounce">
          IUT Skills
        </h1>

        <SearchBar />
      </header>
    </div>
  );
}

function SearchBar() {
  return (
    <input 
      type="text" 
      placeholder="Search..." 
      className="border rounded py-2 px-4 text-blue-800 my-4"  
    />
  );
}