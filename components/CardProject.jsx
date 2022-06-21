import Link from 'next/link';

const NUMBER_LENGTH = 24;

function CardProject({ front }) {
  return (
    <Link href={`/front-details/${front.id}`}>
      <div className="mr-2 p-3 bg-light-primary rounded-md dark:bg-dark-primary shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col space-y-3">
        <div className="w-full h-40 ">
          <img src={front.url_img || '/images/explorer.png'} alt="Imagem do projeto" className="object-cover h-40 w-96 rounded-md" />
        </div>
        <p className="text-lg font-bold text-light-text dark:text-dark-text">
          {front.name.length > NUMBER_LENGTH ? `${front.name.slice(0, NUMBER_LENGTH)}...` : front.name}
        </p>
      </div>
    </Link>
  );
}

export default CardProject;
