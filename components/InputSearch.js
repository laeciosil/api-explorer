import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useRouter } from 'next/router';
import { AppContext } from "../context/AppContext";

function InputSearch() {
  const router = useRouter();
  const {setFilterAPi} = useContext(AppContext);
  const changeName = ({target: {value}}) => {
    setFilterAPi({type: 'name', value});
  };
  function pressEnter ({keyCode}) {
    if(keyCode === 13) {
      router.push('/search')
    }
  }
  return (
    <div className="w-full max-w-xl relative flex">
    <span className="absolute left-4 top-3.5 text-gray-400 text-lg"> 
      <MagnifyingGlass />
    </span>
    <input
      type="text"
      className="w-full bg-light-background dark:bg-dark-background p-3 pl-12 border-r-0 rounded-l-md text-light-text dark:text-dark-text focus:border-light-secondary focus:ring-light-secondary focus:ring-0 resize-none focus:outline-none"
      onChange={changeName}
      onKeyUp={pressEnter}
      placeholder="Search API's"
    />
    <button
      type="button"
      className="bg-light-secondary text-dark-text px-8 border-r-0 rounded-r-md transition hover:bg-[#737eff]"
      onClick={() => router.push('/search')}
    >
      Search
    </button>
  </div>
  );
}

export default InputSearch;