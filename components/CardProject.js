const NUMBER_LENGTH = 24;

function CardProject({api}) {
  return (
    <div className="mr-2 p-3 bg-light-primary rounded-md dark:bg-dark-primary shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col space-y-3">
      <div className="w-full h-40 ">
        <img src="/images/explorer.png" alt="Imagem do projeto" className="object-cover h-40 w-96 rounded-md"/>
      </div>
      <p className="text-lg font-bold text-light-text dark:text-dark-text">
        {api.name.length > NUMBER_LENGTH ? `${api.name.slice(0, NUMBER_LENGTH)}...` : api.name}
      </p>
    </div>
  );
}

export default CardProject;