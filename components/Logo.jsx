import { useRouter } from 'next/router';

function Logo() {
  const router = useRouter();
  return (
    <button
      type="button"
      name="Botão que redireciona para a página inicial"
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => router.push('/')}
    >
      <img src="/images/file.svg" alt="Logo composto pelo ícone de um arquivo" />
      <span className="self-center text-2xl font-bold whitespace-nowrap text-light-text dark:text-dark-text">ApiExplorer</span>
    </button>
  );
}

export default Logo;
