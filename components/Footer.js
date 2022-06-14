import Logo from "./Logo";

function Footer() {
  return (
    <footer className="grow-0 w-full py-8 bg-light-primary dark:bg-dark-primary flex-col text-center justify-center">
      <div className="w-full flex justify-center items-center p-3">
        <Logo />
      </div>
      <p className="text-[#979899] font-normal">Desenvolvido com ♥ por
        {' '}
        <a 
          href="https://www.linkedin.com/in/laecio/"
          className="hover:text-light-secondary underline"
          target="_blank" rel="noreferrer"
        >
          Laecio
        </a>,
        {' '}
        <a 
          href="https://www.linkedin.com/in/paolofullone/"
          className="hover:text-light-secondary underline"
          target="_blank" rel="noreferrer"
        >
          Paolo
        </a> e
        {' '}
        <a 
          href="https://www.linkedin.com/in/thiagodanobrega/"
          className="hover:text-light-secondary underline"
          target="_blank" rel="noreferrer"
        >
          Thiago
        </a>
      </p>
    </footer>
  );
}

export default Footer;