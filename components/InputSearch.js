import { MagnifyingGlass } from "phosphor-react";

function InputSearch() {
  return (
    <div className="w-full max-w-xl relative flex">
    <span className="absolute left-4 top-3.5 text-gray-400 text-lg"> 
      <MagnifyingGlass />
    </span>
    <input
      type="text"
      className="w-full bg-light-background dark:bg-dark-background p-3 pl-12 border-r-0 rounded-l-md focus:outline-none focus:ring-0 focus:ring-light-secondary text-light-text dark:text-dark-text"
      onChange={() => {}}
      placeholder="Search API's"
    />
    <button
      type="button"
      className="bg-light-secondary text-dark-text px-8 border-r-0 rounded-r-md transition hover:bg-[#44419D]"
    >
      Search
    </button>
  </div>
  );
}

export default InputSearch;