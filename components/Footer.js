import Logo from "./Logo";

function Footer() {
  return (
    <footer className="grow-0 w-full p-3 bg-light-primary dark:bg-dark-primary flex-col text-center justify-center">
      <div className="w-full flex justify-center items-center p-3">
        <Logo />
      </div>
      <p>Desenvolvido com ❤ por Laecio, Paolo e Thiago.</p>
    </footer>
  );
}

export default Footer;