import Head from 'next/head';
import MenuDropdownCategories from './MenuDropdownCategories';
import MenuDropdownLogin from './MenuDropdownLogin';
import ToggleDarkMode from './ToggleDarkMode';
import Logo from './Logo';
import InputSearch from './InputSearch';
import MenuMobile from './MenuMobile';

function Header({ title, description }) {
  return (
    <header className="grow-0 w-full py-5 bg-light-primary dark:bg-dark-primary flex items-center justify-center border-b-2 border-[#374151] border-opacity-10 dark:border-opacity-70">
      <Head>
        <title>{title}</title>
        <meta name="description " content={description} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content="https://api-explorer-br.s3.amazonaws.com/pagina.png"
        />
      </Head>
      <section className="container w-[80rem] px-3 flex items-center justify-between">
        <Logo />
        <div className="hidden w-full max-w-xl lg:flex">
          <InputSearch />
        </div>
        <div className="relative hidden lg:flex gap-5 items-center justify-between">
          <MenuDropdownCategories />
          <MenuDropdownLogin />
          <ToggleDarkMode />
        </div>
        <div className="lg:hidden">
          <MenuMobile />
        </div>
      </section>
    </header>
  );
}

export default Header;
