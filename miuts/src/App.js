import './App.css';

export default function App() {
    return (
        <div className="App w-full">
            <Navbar />

            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
                <Title />
                <Searchbar />
                <Content />
            </main>

            <Footer />
        </div>
    );
}

function Navbar() {
    return (
        <nav className="bg-sky-950 p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
            <ul className="flex justify-between text-blue-100">
                <li className="flex w-full items-center justify-center">
                    <button className="px-[30%] py-5 text-white rounded hover:bg-sky-900">Logo</button>
                </li>
                <li className="flex w-full items-center justify-center">
                    <button className="px-[30%] py-5 text-white rounded hover:bg-sky-900">Période</button>
                </li>
                <li className="flex w-full items-center justify-center">
                    <button className="px-[30%] py-5 text-white rounded hover:bg-sky-900">Liste des Skills</button>
                </li>
            </ul>
        </nav>
    );
}

function Title() {
    return (
        <h1 className="text-4xl font-bold mb-6 animate-bounce">IUT Skills</h1>
    );
}

function Searchbar() {
    return (
        <div className="mb-6 md:w-96">
            <div className="relative flex items-stretch w-full">
                <input
                    type="search"
                    className="flex-auto rounded-l border border-solid border-neutral-300 bg-transparent px-3 py-2 text-base text-neutral-700 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Search"
                />
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                    Search
                </button>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="text-center">
            <p className="text-lg">Bienvenue sur My IUT Skills. Commencez par explorer les options ci-dessus !</p>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-sky-950 p-4 w-full">
            <ul className="flex justify-around text-blue-100">
                <li>
                    <button className="py-2 px-4 rounded hover:bg-sky-900">A propos</button>
                </li>
                <li>
                    <button className="py-2 px-4 rounded hover:bg-sky-900">Contact</button>
                </li>
                <li>
                    <button className="py-2 px-4 rounded hover:bg-sky-900">Settings</button>
                </li>
            </ul>
        </footer>
    );
}
