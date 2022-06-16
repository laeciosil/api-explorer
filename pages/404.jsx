import Image from 'next/image';

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-light-background dark:bg-dark-background space-y-8 px-4">
      <Image src="/images/not_found.svg" width={500} height={500} alt="Imagem de página não encontrada" />
      <h1 className="text-xl font-bold text-center">OPPS! PÁGINA NÃO ENCONTRADA</h1>
      <a
        href="/"
        className="inline-flex justify-center rounded-md border border-transparent text-dark-text bg-light-secondary px-4 py-2 text-sm font-medium hover:bg-[#737eff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Voltar para home
      </a>
    </div>
  );
}

export default NotFound;
