import MenuDropdownCategories from './MenuDropdownCategories';
import MenuDropdownLogin from './MenuDropdownLogin';
import ToggleDarkMode from './ToggleDarkMode';
import Logo from './Logo';
import InputSearch from './InputSearch';
import MenuMobile from './MenuMobile';

function Header() {
  return (
    <header className="grow-0 w-full py-5 bg-light-primary dark:bg-dark-primary flex items-center justify-center border-b-2 border-[#374151] border-opacity-10 dark:border-opacity-70">
      <section className="container w-[80rem] px-3 flex items-center justify-between">
        <Logo />
        <div className="hidden w-full max-w-xl lg:flex">
          <InputSearch />
        </div>
        <div className="hidden lg:flex gap-5 items-center">
          <MenuDropdownCategories />
          <MenuDropdownLogin />
          <ToggleDarkMode />
        </div>
        <MenuMobile />
      </section>
    </header>
  );
}

export default Header;
