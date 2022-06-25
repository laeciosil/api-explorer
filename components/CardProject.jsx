import { LinkSimple } from 'phosphor-react';
import { AiFillGithub } from 'react-icons/ai';

const NUMBER_LENGTH = 15;

function CardProject({ front }) {
  return (
    <div className="mr-2 p-3 bg-light-primary rounded-md dark:bg-dark-primary shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col space-y-3">
      <div className="w-full h-32 ">
        <img src={front.url_img || '/images/explorer.png'} alt="Imagem do projeto" className="object-cover h-32 w-56 rounded-md" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-light-text dark:text-dark-text">
          {front.name.length > NUMBER_LENGTH ? `${front.name.slice(0, NUMBER_LENGTH)}...` : front.name}
        </p>
        <div className="flex items-center">
          <a
            href={front.url_repo}
            target="_blank"
            className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
            title="Ir para o repositório"
            rel="noreferrer"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            href={front.url_deploy || '#'}
            target="_blank"
            className="rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
            title="Ir para o site"
            rel="noreferrer"
          >
            <LinkSimple size={20} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
