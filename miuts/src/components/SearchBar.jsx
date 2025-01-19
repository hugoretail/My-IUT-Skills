export default function Searchbar() {
  return (
    <div className="mb-6 md:w-96">
      <div className="relative flex items-stretch w-full">
        <input
          type="search"
          className="flex-auto text-white rounded border border-solid border-neutral-300 bg-transparent px-3 py-2 text-base text-neutral-700 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
