export default function Footer() {
  return (
    <footer className="bg-sky-950 p-4 w-full">
      <ul className="flex justify-around text-blue-100">
        <li>
          <button className="py-2 px-4 rounded hover:bg-sky-900">
            A propos
          </button>
        </li>
        <li>
          <button className="py-2 px-4 rounded hover:bg-sky-900">
            Contact
          </button>
        </li>
        <li>
          <button className="py-2 px-4 rounded hover:bg-sky-900">
            Settings
          </button>
        </li>
      </ul>
    </footer>
  );
}