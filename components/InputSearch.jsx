import { MagnifyingGlass } from 'phosphor-react';
import { useRouter } from 'next/router';
import { useData } from '../hooks/useData';

function InputSearch() {
  const router = useRouter();
  const { setFilterAPi } = useData();
  const changeName = ({ target: { value } }) => {
    setFilterAPi({ type: 'name', value });
  };
  function pressEnter({ keyCode }) {
    if (keyCode === 13) {
      router.push('/search');
    }
  }
  return (
    <div className="w-full max-w-xl relative flex">
      <input
        type="text"
        className="w-full bg-light-background dark:bg-dark-background p-2 pl-3 pr-12 border rounded-md text-light-text dark:text-dark-text focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none"
        onChange={changeName}
        onKeyUp={pressEnter}
        placeholder="Pesquisar API's"
      />
      <button
        type="button"
        className="absolute right-3 top-[9px] text-light-secondary"
        onClick={() => router.push('/search')}
      >
        <MagnifyingGlass weight="bold" size={25} />
      </button>
    </div>
  );
}

export default InputSearch;
