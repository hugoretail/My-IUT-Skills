import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-sky-950 p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
      <ul className="flex justify-between text-blue-100">
        <li className="flex w-full items-center justify-center">
          <button className="px-[30%] py-5 text-white rounded hover:bg-sky-900">
            Logo
          </button>
        </li>
        <li className="flex w-full items-center justify-center">
          <button className="px-[30%] py-5 text-white rounded hover:bg-sky-900">
            Période
          </button>
        </li>
        <li className="flex w-full items-center justify-center">
          <button className="px-[30%] py-5 text-white rounded hover:bg-sky-900">
            Liste des Skills
          </button>
        </li>
      </ul>
    </nav>
  );
}
